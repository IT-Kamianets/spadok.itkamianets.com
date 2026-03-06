import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrls: ['./gallery.css']
})
export class GalleryComponent {
  isGalleryOpen = false;
  currentPhotoIndex = 0;

  constructor(public ls: LanguageService) {}

  openGallery(index: number) {
    this.currentPhotoIndex = index;
    this.isGalleryOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeGallery() {
    this.isGalleryOpen = false;
    document.body.style.overflow = 'auto';
  }

  nextPhoto(event?: Event) {
    if (event) event.stopPropagation();
    const photos = this.ls.t.galleryPage.photos;
    this.currentPhotoIndex = (this.currentPhotoIndex + 1) % photos.length;
  }

  prevPhoto(event?: Event) {
    if (event) event.stopPropagation();
    const photos = this.ls.t.galleryPage.photos;
    this.currentPhotoIndex = (this.currentPhotoIndex - 1 + photos.length) % photos.length;
  }

  setPhotoIndex(index: number) {
    this.currentPhotoIndex = index;
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (this.isGalleryOpen) {
      if (event.key === 'Escape') this.closeGallery();
      if (event.key === 'ArrowRight') this.nextPhoto();
      if (event.key === 'ArrowLeft') this.prevPhoto();
    }
  }
}
