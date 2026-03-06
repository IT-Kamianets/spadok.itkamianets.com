import { Component, Inject, PLATFORM_ID, HostListener } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { LanguageService, Lang } from '../../services/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent {
  isDarkTheme = false;
  isLangMenuOpen = false;
  isHeaderHidden = false;
  activeIndex = 0; // За замовчуванням Home (індекс 0)
  private lastScrollTop = 0;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    public ls: LanguageService,
    private router: Router
  ) {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('theme');
      this.isDarkTheme = savedTheme === 'dark';
      this.applyTheme();

      // Відстежуємо шлях для анімації краплі
      this.updateActiveIndex(this.router.url);
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe((event: any) => {
        this.updateActiveIndex(event.urlAfterRedirects);
      });
    }
  }

  private updateActiveIndex(url: string) {
    if (url === '/') this.activeIndex = 0;
    else if (url.includes('/rooms')) this.activeIndex = 1;
    else if (url.includes('/gallery')) this.activeIndex = 2;
    else if (url.includes('/contacts')) this.activeIndex = 3;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      const isMobile = window.innerWidth <= 768;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (isMobile) {
        if (scrollTop > this.lastScrollTop && scrollTop > 80) this.isHeaderHidden = true;
        else this.isHeaderHidden = false;
      } else {
        this.isHeaderHidden = false;
      }
      this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }
  }

  toggleLangMenu() { this.isLangMenuOpen = !this.isLangMenuOpen; }

  changeLang(lang: string) {
    this.ls.setLang(lang as Lang);
    this.isLangMenuOpen = false;
  }

  toggleTheme(event: MouseEvent) {
    const x = event.clientX || innerWidth / 2;
    const y = event.clientY || innerHeight / 2;
    const endRadius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));

    if (isPlatformBrowser(this.platformId) && (document as any).startViewTransition) {
      const transition = (document as any).startViewTransition(() => {
        this.isDarkTheme = !this.isDarkTheme;
        localStorage.setItem('theme', this.isDarkTheme ? 'dark' : 'light');
        this.applyTheme();
      });

      transition.ready.then(() => {
        const isTurningDark = this.isDarkTheme;
        const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`];
        document.documentElement.animate(
          { clipPath: isTurningDark ? [...clipPath].reverse() : clipPath },
          { duration: 700, easing: 'cubic-bezier(0.4, 0, 0.2, 1)', pseudoElement: isTurningDark ? '::view-transition-old(root)' : '::view-transition-new(root)' }
        );
      });
    } else {
      this.isDarkTheme = !this.isDarkTheme;
      if (isPlatformBrowser(this.platformId)) localStorage.setItem('theme', this.isDarkTheme ? 'dark' : 'light');
      this.applyTheme();
    }
  }

  private applyTheme() {
    if (isPlatformBrowser(this.platformId)) {
      const root = document.documentElement;
      if (this.isDarkTheme) root.setAttribute('data-theme', 'dark');
      else root.removeAttribute('data-theme');
    }
  }
}
