import { Injectable, signal, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Lang = 'ua' | 'en' | 'pl' | 'de';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  currentLang = signal<Lang>('ua');

  translations: Record<Lang, any> = {
    ua: {
      nav: { home: 'Головна', rooms: 'Номери', gallery: 'Галерея', contacts: 'Контакти' },
      home: { 
        title: 'Spadok Hotel', 
        subtitle: 'Там, де історія Старого міста зустрічається з сучасним затишком.',
        btnRooms: 'Наші номери',
        btnBook: 'Забронювати',
        aboutTitle: 'Відчуйте аутентичність',
        aboutText1: 'Наш готель розташований у старовинній будівлі в самому серці Кам\'янця-Подільського. Ми зберегли її історичну душу, додавши сучасний комфорт та сервіс найвищого рівня.',
        aboutText2: 'Навіть під час відключень ми залишаємося острівцем стабільності завдяки власній сонячній електростанції — у нас завжди є світло, тепло та швидкісний інтернет.',
        featuresTitle: 'Чому обирають нас',
        f1Title: 'Зелений сад та тераса',
        f1Desc: 'Власна затишна зона для ранкової кави або вечірнього барбекю.',
        f2Title: 'Повна автономність',
        f2Desc: 'Сонячні панелі гарантують безперебійне світло та гарячу воду 24/7.',
        f3Title: 'Безпечний паркінг',
        f3Desc: 'Безкоштовна приватна парковка під відеонаглядом для наших гостей.',
        locationTitle: 'У серці історії',
        locationDesc: 'Ідеальна локація для піших прогулянок. Від нас рукою подати до головних пам\'яток міста.',
        loc1: 'Кам\'янець-Подільська фортеця (10 хв)',
        loc2: 'Смотрицький каньйон та оглядові майданчики',
        loc3: 'Кафедральний костел та Ратуша',
        reviewsTitle: 'Що кажуть наші гості',
        rev1: '«Неймовірна гостинність! Відчували себе як удома. Номери ідеально чисті, а ліжка дуже зручні. Особливо порадувало, що навіть під час відключень у нас завжди було світло та інтернет.»',
        rev2: '«Найкраще розташування в самому центрі Старого міста. Дуже затишний номер з видом на сад. Все зроблено з душею і великою повагою до гостей.»'
      },
      roomsPage: {
        title: 'Наші Номери',
        subtitle: 'Оберіть ідеальний варіант для вашого перебування у Кам\'янці-Подільському.',
        featuresLabel: 'Зручності:',
        bookBtn: 'Забронювати',
        amenitiesTitle: 'Спільні зручності для всіх гостей',
        am1: '⚡ Безперебійне електропостачання',
        am2: '🌐 Швидкісний Wi-Fi',
        am3: '🚗 Приватна парковка',
        am4: '☕ Набір для чаю/кави',
        list: [
          {
            name: 'Двомісний номер Делюкс',
            description: 'Просторий номер площею близько 32 м² з великим двоспальним ліжком. Ідеальний вибір для комфортного відпочинку для пар.',
            features: ['Велике двоспальне ліжко', 'Власна ванна кімната', 'Телевізор з плоским екраном', 'Робочий стіл', 'Звукоізоляція']
          },
          {
            name: 'Сімейний номер Делюкс',
            description: 'Великий номер площею 65 м², спеціально розрахований на комфортне проживання сім\'ї з 3-4 осіб. Достатньо місця для всіх.',
            features: ['Кілька ліжок / диван', 'Власна ванна кімната', 'Телевізор', 'Холодильник', 'Зона відпочинку']
          },
          {
            name: 'Номер «Люкс» (Suite)',
            description: 'Покращений номер підвищеного комфорту з окремою вітальнею зоною. Забезпечує чудовий вид на сад або місто.',
            features: ['Окрема зона відпочинку', 'Преміум вид з вікна', 'Власна ванна кімната', 'Халати та тапочки', 'Чайник та кавоварка']
          }
        ]
      },
      footer: { address: 'вул. Домініканська, 2, Кам\'янець-Подільський', copyright: 'Всі права захищені.' }
    },
    en: {
      nav: { home: 'Home', rooms: 'Rooms', gallery: 'Gallery', contacts: 'Contacts' },
      home: { 
        title: 'Spadok Hotel', 
        subtitle: 'Where history of the Old Town meets modern comfort.',
        btnRooms: 'Our Rooms',
        btnBook: 'Book Now',
        aboutTitle: 'Experience Authenticity',
        aboutText1: 'Our hotel is located in a historic building in the very heart of Kamianets-Podilskyi. We have preserved its historic soul while adding modern comfort and top-level service.',
        aboutText2: 'Even during blackouts, we remain an island of stability thanks to our own solar power plant — we always have electricity, heating, and high-speed internet.',
        featuresTitle: 'Why Choose Us',
        f1Title: 'Green Garden & Terrace',
        f1Desc: 'A cozy private area for morning coffee or an evening BBQ.',
        f2Title: 'Full Autonomy',
        f2Desc: 'Solar panels guarantee uninterrupted electricity and hot water 24/7.',
        f3Title: 'Secure Parking',
        f3Desc: 'Free private parking with video surveillance for our guests.',
        locationTitle: 'In the Heart of History',
        locationDesc: 'Perfect location for walking tours. The main city attractions are just a stone\'s throw away.',
        loc1: 'Kamianets-Podilskyi Fortress (10 min walk)',
        loc2: 'Smotrych Canyon and viewpoints',
        loc3: 'Cathedral and City Hall',
        reviewsTitle: 'What Our Guests Say',
        rev1: '"Incredible hospitality! Felt right at home. The rooms are perfectly clean and the beds are very comfortable. We were especially pleased to have electricity and internet at all times."',
        rev2: '"Best location in the heart of the Old Town. Very cozy room with a garden view. Everything is done with soul and great respect for the guests."'
      },
      roomsPage: {
        title: 'Our Rooms',
        subtitle: 'Choose the perfect option for your stay in Kamianets-Podilskyi.',
        featuresLabel: 'Amenities:',
        bookBtn: 'Book Now',
        amenitiesTitle: 'Shared amenities for all guests',
        am1: '⚡ Uninterrupted power supply',
        am2: '🌐 High-speed Wi-Fi',
        am3: '🚗 Private parking',
        am4: '☕ Tea/Coffee maker',
        list: [
          {
            name: 'Deluxe Double Room',
            description: 'Spacious room of about 32 m² with a large double bed. Perfect choice for a comfortable stay for couples.',
            features: ['Large double bed', 'Private bathroom', 'Flat-screen TV', 'Desk', 'Soundproofing']
          },
          {
            name: 'Deluxe Family Room',
            description: 'Large 65 m² room, specially designed for a comfortable stay of a family of 3-4 people. Plenty of space for everyone.',
            features: ['Multiple beds / sofa', 'Private bathroom', 'TV', 'Refrigerator', 'Seating area']
          },
          {
            name: 'Suite',
            description: 'Upgraded superior room with a separate living area. Provides a beautiful view of the garden or the city.',
            features: ['Separate seating area', 'Premium view', 'Private bathroom', 'Bathrobes and slippers', 'Tea/Coffee maker']
          }
        ]
      },
      footer: { address: '2 Dominicanska St, Kamianets-Podilskyi', copyright: 'All rights reserved.' }
    },
    pl: {
      nav: { home: 'Strona główna', rooms: 'Pokoje', gallery: 'Galeria', contacts: 'Kontakt' },
      home: { 
        title: 'Spadok Hotel', 
        subtitle: 'Gdzie historia Starego Miasta spotyka się z nowoczesnym komfortem.',
        btnRooms: 'Nasze pokoje',
        btnBook: 'Zarezerwuj',
        aboutTitle: 'Poczuj Autentyczność',
        aboutText1: 'Nasz hotel mieści się w zabytkowym budynku w samym sercu Kamieńca Podolskiego. Zachowaliśmy jego historyczną duszę, dodając nowoczesny komfort.',
        aboutText2: 'Nawet podczas przerw w dostawie prądu pozostajemy wyspą stabilności dzięki własnej elektrowni słonecznej.',
        featuresTitle: 'Dlaczego My',
        f1Title: 'Ogród i Taras',
        f1Desc: 'Przytulna strefa na poranną kawę lub wieczornego grilla.',
        f2Title: 'Pełna Autonomia',
        f2Desc: 'Panele słoneczne gwarantują prąd i ciepłą wodę 24/7.',
        f3Title: 'Bezpieczny Parking',
        f3Desc: 'Bezpłatny prywatny parking z monitoringiem.',
        locationTitle: 'W Sercu Historii',
        locationDesc: 'Idealna lokalizacja na spacery. Główne atrakcje są na wyciągnięcie ręki.',
        loc1: 'Twierdza w Kamieńcu Podolskim (10 min)',
        loc2: 'Kanion Smotrycza i punkty widokowe',
        loc3: 'Katedra i Ratusz',
        reviewsTitle: 'Opinie Gości',
        rev1: '"Niesamowita gościnność! Czułam się jak w domu. Pokoje idealnie czyste."',
        rev2: '"Najlepsza lokalizacja na Starym Mieście. Bardzo duży plus za prąd 24/7 i parking."'
      },
      roomsPage: {
        title: 'Nasze Pokoje',
        subtitle: 'Wybierz idealną opcję na swój pobyt w Kamieńcu Podolskim.',
        featuresLabel: 'Udogodnienia:',
        bookBtn: 'Zarezerwuj',
        amenitiesTitle: 'Wspólne udogodnienia dla wszystkich gości',
        am1: '⚡ Nieprzerwane zasilanie',
        am2: '🌐 Szybkie Wi-Fi',
        am3: '🚗 Prywatny parking',
        am4: '☕ Zestaw do parzenia kawy/herbaty',
        list: [
          {
            name: 'Pokój Dwuosobowy typu Deluxe',
            description: 'Przestronny pokój o powierzchni ok. 32 m² z dużym łóżkiem podwójnym. Idealny wybór na komfortowy pobyt dla par.',
            features: ['Duże łóżko podwójne', 'Prywatna łazienka', 'Telewizor z płaskim ekranem', 'Biurko', 'Dźwiękoszczelność']
          },
          {
            name: 'Rodzinny Pokój typu Deluxe',
            description: 'Duży pokój o powierzchni 65 m², specjalnie zaprojektowany dla 3-4 osobowej rodziny. Dużo miejsca dla wszystkich.',
            features: ['Wiele łóżek / sofa', 'Prywatna łazienka', 'Telewizor', 'Lodówka', 'Część wypoczynkowa']
          },
          {
            name: 'Apartament (Suite)',
            description: 'Pokój o podwyższonym standardzie z oddzielną częścią dzienną. Zapewnia piękny widok na ogród lub miasto.',
            features: ['Oddzielna część wypoczynkowa', 'Widok Premium', 'Prywatna łazienka', 'Szlafroki i kapcie', 'Zestaw do kawy']
          }
        ]
      },
      footer: { address: 'ul. Dominikańska 2, Kamieniec Podolski', copyright: 'Wszelkie prawa zastrzeżone.' }
    },
    de: {
      nav: { home: 'Startseite', rooms: 'Zimmer', gallery: 'Galerie', contacts: 'Kontakt' },
      home: { 
        title: 'Spadok Hotel', 
        subtitle: 'Wo die Geschichte der Altstadt auf modernen Komfort trifft.',
        btnRooms: 'Unsere Zimmer',
        btnBook: 'Buchen',
        aboutTitle: 'Authentizität Erleben',
        aboutText1: 'Unser Hotel befindet sich in einem historischen Gebäude im Herzen von Kamjanez-Podilskyj. Wir haben die Seele bewahrt und modernen Komfort hinzugefügt.',
        aboutText2: 'Dank unserer eigenen Solaranlage sind wir auch bei Stromausfällen eine Insel der Stabilität.',
        featuresTitle: 'Warum Wir',
        f1Title: 'Garten & Terrasse',
        f1Desc: 'Ein gemütlicher Bereich für den Morgenkaffee oder ein BBQ.',
        f2Title: 'Volle Autonomie',
        f2Desc: 'Solarmodule garantieren 24/7 Strom und Warmwasser.',
        f3Title: 'Sicherer Parkplatz',
        f3Desc: 'Kostenloser Privatparkplatz mit Videoüberwachung.',
        locationTitle: 'Im Herzen der Geschichte',
        locationDesc: 'Perfekte Lage für Spaziergänge. Die Hauptattraktionen sind nur einen Steinwurf entfernt.',
        loc1: 'Festung Kamjanez-Podilskyj (10 Min)',
        loc2: 'Smotrytsch-Schlucht und Aussichtspunkte',
        loc3: 'Kathedrale und Rathaus',
        reviewsTitle: 'Gästebewertungen',
        rev1: '"Unglaubliche Gastfreundschaft! Fühlte mich wie zu Hause. Zimmer sehr sauber."',
        rev2: '"Beste Lage in der Altstadt. Großes Plus für eigenen Strom und Parkplatz."'
      },
      roomsPage: {
        title: 'Unsere Zimmer',
        subtitle: 'Wählen Sie die perfekte Option für Ihren Aufenthalt in Kamjanez-Podilskyj.',
        featuresLabel: 'Ausstattung:',
        bookBtn: 'Buchen',
        amenitiesTitle: 'Gemeinsame Annehmlichkeiten',
        am1: '⚡ Unterbrechungsfreie Stromversorgung',
        am2: '🌐 High-Speed Wi-Fi',
        am3: '🚗 Privatparkplatz',
        am4: '☕ Tee-/Kaffeekocher',
        list: [
          {
            name: 'Deluxe Doppelzimmer',
            description: 'Geräumiges Zimmer (ca. 32 m²) mit großem Doppelbett. Perfekte Wahl für einen komfortablen Aufenthalt für Paare.',
            features: ['Großes Doppelbett', 'Eigenes Bad', 'Flachbild-TV', 'Schreibtisch', 'Schalldämmung']
          },
          {
            name: 'Deluxe Familienzimmer',
            description: 'Großes 65 m² Zimmer, speziell für einen komfortablen Aufenthalt einer 3-4-köpfigen Familie. Viel Platz für alle.',
            features: ['Mehrere Betten / Sofa', 'Eigenes Bad', 'TV', 'Kühlschrank', 'Sitzecke']
          },
          {
            name: 'Suite',
            description: 'Verbessertes Superior-Zimmer mit separatem Wohnbereich. Bietet einen schönen Blick auf den Garten oder die Stadt.',
            features: ['Separater Sitzbereich', 'Premium-Aussicht', 'Eigenes Bad', 'Bademäntel', 'Kaffeemaschine']
          }
        ]
      },
      footer: { address: 'Dominikanska-Str. 2, Kamjanez-Podilskyj', copyright: 'Alle Rechte vorbehalten.' }
    }
  };

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      const saved = localStorage.getItem('lang') as Lang;
      if (saved) this.currentLang.set(saved);
    }
  }

  setLang(lang: Lang) {
    this.currentLang.set(lang);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('lang', lang);
    }
  }

  get t() {
    return this.translations[this.currentLang()];
  }
}
