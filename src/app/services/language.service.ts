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
        priceLabel: 'від',
        bookBtn: 'Забронювати',
        amenitiesTitle: 'Спільні зручності для всіх гостей',
        am1: '⚡ Безперебійне електропостачання',
        am2: '🌐 Швидкісний Wi-Fi',
        am3: '🚗 Приватна парковка',
        am4: '☕ Набір для чаю/кави',
        list: [
          {
            name: 'Номер Делюкс з ліжком розміру "king-size"',
            description: 'Просторий номер площею 26 кв. м з видом на пам\'ятку та місто. Включає велике двоспальне ліжко та всі необхідні зручності для комфортного відпочинку.',
            features: ['Ліжко "king-size"', 'Площа 26 кв. м', 'Вид на місто/пам\'ятку', 'Власна ванна кімната', 'Звукоізоляція'],
            price: '1 700 UAH',
            image: '/rooms/deluxe-king/1.png',
            images: [1,2,3,4,5,6,7,8,9,10].map(n => `/rooms/deluxe-king/${n}.png`)
          },
          {
            name: 'Двомісний номер Делюкс з душем',
            description: 'Затишний номер площею 32 кв. м з видом на сад, місто або внутрішній двір. Оснащений кондиціонером та особливо широким двоспальним ліжком.',
            features: ['Особливо широке двоспальне ліжко', 'Площа 32 кв. м', 'Кондиціонер', 'Вид на сад/місто', 'Власна ванна кімната'],
            price: '1 700 UAH',
            image: '/rooms/deluxe-double-shower/1.png',
            images: [1,2,3,4,5,6,7,8,9,10,11].map(n => `/rooms/deluxe-double-shower/${n}.png`)
          },
          {
            name: 'Люкс з ліжком розміру "king-size"',
            description: 'Розкішний люкс площею 33 кв. м з окремим входом. Має диван-ліжко та велике двоспальне ліжко, ідеально підходить для підвищеного комфорту.',
            features: ['Ліжко "king-size" + диван-ліжко', 'Площа 33 кв. м', 'Кондиціонер', 'Вид на пам\'ятки', 'Халат та капці'],
            price: '1 840 UAH',
            image: '/rooms/king-suite/1.png',
            images: [1,2,3,4,5,6,7,9,10,11,12].map(n => `/rooms/king-suite/${n}.png`)
          },
          {
            name: 'Сімейний номер Делюкс',
            description: 'Наш найбільший номер площею 65 кв. м. Розрахований на велику компанію або сім\'ю. Включає особливо широке двоспальне ліжко та два диван-ліжка.',
            features: ['Площа 65 кв. м', 'Двоспальне ліжко + 2 диван-ліжка', 'Кондиціонер', 'Холодильник', 'Звукоізоляція'],
            price: '2 100 UAH',
            image: '/rooms/deluxe-family/1.png',
            images: [1,2,3,4,5,6,7,8,9,10,11,12,13].map(n => `/rooms/deluxe-family/${n}.png`)
          }
        ]
      },
      galleryPage: {
        title: 'Галерея',
        subtitle: 'Пориньте в атмосферу Spadok Hotel та Старого міста.',
        photos: [1,2,3,4,5,6,7,8,9].map(n => `/gallery/${n}.png`)
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
        priceLabel: 'from',
        bookBtn: 'Book Now',
        amenitiesTitle: 'Shared amenities for all guests',
        am1: '⚡ Uninterrupted power supply',
        am2: '🌐 High-speed Wi-Fi',
        am3: '🚗 Private parking',
        am4: '☕ Tea/Coffee maker',
        list: [
          {
            name: 'Deluxe King Room',
            description: 'Spacious 26 sq. m room with landmark and city views. Features a king-size bed and all necessary amenities for a comfortable stay.',
            features: ['King-size bed', 'Area 26 sq. m', 'Landmark/City view', 'Private bathroom', 'Soundproofing'],
            price: '1 700 UAH',
            image: '/rooms/deluxe-king/1.png',
            images: [1,2,3,4,5,6,7,8,9,10].map(n => `/rooms/deluxe-king/${n}.png`)
          },
          {
            name: 'Deluxe Double Room with Shower',
            description: 'Cozy 32 sq. m room with views of the garden, city, or courtyard. Equipped with air conditioning and an extra-wide double bed.',
            features: ['Extra-wide double bed', 'Area 32 sq. m', 'Air conditioning', 'Garden/City view', 'Private bathroom'],
            price: '1 700 UAH',
            image: '/rooms/deluxe-double-shower/1.png',
            images: [1,2,3,4,5,6,7,8,9,10,11].map(n => `/rooms/deluxe-double-shower/${n}.png`)
          },
          {
            name: 'King Suite',
            description: 'Luxurious 33 sq. m suite with a private entrance. Features a sofa bed and a king-size bed, ideal for enhanced comfort.',
            features: ['King-size bed + sofa bed', 'Area 33 sq. m', 'Air conditioning', 'Landmark view', 'Bathrobes & slippers'],
            price: '1 840 UAH',
            image: '/rooms/king-suite/1.png',
            images: [1,2,3,4,5,6,7,9,10,11,12].map(n => `/rooms/king-suite/${n}.png`)
          },
          {
            name: 'Deluxe Family Room',
            description: 'Our largest room (65 sq. m). Designed for large groups or families. Includes an extra-wide double bed and two sofa beds.',
            features: ['Area 65 sq. m', 'Double bed + 2 sofa beds', 'Air conditioning', 'Refrigerator', 'Soundproofing'],
            price: '2 100 UAH',
            image: '/rooms/deluxe-family/1.png',
            images: [1,2,3,4,5,6,7,8,9,10,11,12,13].map(n => `/rooms/deluxe-family/${n}.png`)
          }
        ]
      },
      galleryPage: {
        title: 'Gallery',
        subtitle: 'Immerse yourself in the atmosphere of Spadok Hotel and the Old Town.',
        photos: [1,2,3,4,5,6,7,8,9].map(n => `/gallery/${n}.png`)
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
        priceLabel: 'od',
        bookBtn: 'Zarezerwuj',
        amenitiesTitle: 'Wspólne udogodnienia dla wszystkich gości',
        am1: '⚡ Nieprzerwane zasilanie',
        am2: '🌐 Szybkie Wi-Fi',
        am3: '🚗 Prywatny parking',
        am4: '☕ Zestaw do parzenia kawy/herbaty',
        list: [
          {
            name: 'Pokój Deluxe z łóżkiem typu King-size',
            description: 'Przestronny pokój o powierzchni 26 m² z widokiem na zabytki i miasto. Zawiera duże łóżko podwójне.',
            features: ['Łóżko King-size', 'Powierzchnia 26 m²', 'Widok na miasto', 'Prywatna łazienka', 'Dźwiękoszczelność'],
            price: '1 700 UAH',
            image: '/rooms/deluxe-king/1.png',
            images: [1,2,3,4,5,6,7,8,9,10].map(n => `/rooms/deluxe-king/${n}.png`)
          },
          {
            name: 'Pokój Dwuosobowy Deluxe z prysznicem',
            description: 'Przytulny pokój o powierzchni 32 m² z widokiem na ogród lub miasto. Wyposażony в klimatyzację.',
            features: ['Szerokie łóżko подwójне', 'Powierzchnia 32 m²', 'Klimatyzacja', 'Widok na ogród', 'Prywatna łazienka'],
            price: '1 700 UAH',
            image: '/rooms/deluxe-double-shower/1.png',
            images: [1,2,3,4,5,6,7,8,9,10,11].map(n => `/rooms/deluxe-double-shower/${n}.png`)
          },
          {
            name: 'Apartament typu Suite z łóżkiem King-size',
            description: 'Luksusowy apartament o powierzchni 33 m² з osobnym wejściem i sofą.',
            features: ['Łóżko King-size + sofa', 'Powierzchnia 33 m²', 'Klimatyzacja', 'Widok na zabytki', 'Szlafroki'],
            price: '1 840 UAH',
            image: '/rooms/king-suite/1.png',
            images: [1,2,3,4,5,6,7,9,10,11,12].map(n => `/rooms/king-suite/${n}.png`)
          },
          {
            name: 'Rodzinny pokój Deluxe',
            description: 'Nasz największy pokój (65 m²) dla rodzin lub grup. Zawiera szerokie łóżko i dwie sofy.',
            features: ['Powierzchnia 65 m²', 'Łóżko + 2 sofy', 'Klimatyzacja', 'Lodówka', 'Dźwiękoszczelność'],
            price: '2 100 UAH',
            image: '/rooms/deluxe-family/1.png',
            images: [1,2,3,4,5,6,7,8,9,10,11,12,13].map(n => `/rooms/deluxe-family/${n}.png`)
          }
        ]
      },
      galleryPage: {
        title: 'Galeria',
        subtitle: 'Zanurz się w atmosferze hotelu Spadok i Starego Miasta.',
        photos: [1,2,3,4,5,6,7,8,9].map(n => `/gallery/${n}.png`)
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
        priceLabel: 'ab',
        bookBtn: 'Buchen',
        amenitiesTitle: 'Gemeinsame Annehmlichkeiten',
        am1: '⚡ Unterbrechungsfreie Stromversorgung',
        am2: '🌐 High-Speed Wi-Fi',
        am3: '🚗 Privatparkplatz',
        am4: '☕ Tee-/Kaffeekocher',
        list: [
          {
            name: 'Deluxe-Zimmer mit King-Size-Bett',
            description: 'Geräumiges 26 m² Zimmer mit Blick auf die Stadt und Sehenswürdigkeiten. Inklusive King-Size-Bett.',
            features: ['King-Size-Bett', '26 m² Fläche', 'Stadtblick', 'Eigenes Bad', 'Schalldämmung'],
            price: '1 700 UAH',
            image: '/rooms/deluxe-king/1.png',
            images: [1,2,3,4,5,6,7,8,9,10].map(n => `/rooms/deluxe-king/${n}.png`)
          },
          {
            name: 'Deluxe Doppelzimmer mit Dusche',
            description: 'Gemütliches 32 m² Zimmer with Garten- oder Stadtblick. Ausgestattet mit Klimaanlage.',
            features: ['Breites Doppelbett', '32 m² Fläche', 'Klimaanlage', 'Gartenblick', 'Eigenes Bad'],
            price: '1 700 UAH',
            image: '/rooms/deluxe-double-shower/1.png',
            images: [1,2,3,4,5,6,7,8,9,10,11].map(n => `/rooms/deluxe-double-shower/${n}.png`)
          },
          {
            name: 'King Suite',
            description: 'Luxuriöse 33 m² Suite mit separatem Eingang und Schlafsofa.',
            features: ['King-Size-Bett + Sofa', '33 m² Fläche', 'Klimaanlage', 'Blick auf Sehenswürdigkeiten', 'Bademäntel'],
            price: '1 840 UAH',
            image: '/rooms/king-suite/1.png',
            images: [1,2,3,4,5,6,7,9,10,11,12].map(n => `/rooms/king-suite/${n}.png`)
          },
          {
            name: 'Deluxe Familienzimmer',
            description: 'Unser größtes Zimmer (65 m²) für Familien oder Gruppen. Mit breitem Bett und zwei Schlafsofas.',
            features: ['65 m² Fläche', 'Doppelbett + 2 Sofas', 'Klimaanlage', 'Kühlschrank', 'Schalldämmung'],
            price: '2 100 UAH',
            image: '/rooms/deluxe-family/1.png',
            images: [1,2,3,4,5,6,7,8,9,10,11,12,13].map(n => `/rooms/deluxe-family/${n}.png`)
          }
        ]
      },
      galleryPage: {
        title: 'Galerie',
        subtitle: 'Tauchen Sie ein in die Atmosphäre des Spadok Hotels und der Altstadt.',
        photos: [1,2,3,4,5,6,7,8,9].map(n => `/gallery/${n}.png`)
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
