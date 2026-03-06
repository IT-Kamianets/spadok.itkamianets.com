import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { RoomsComponent } from './pages/rooms/rooms';
import { GalleryComponent } from './pages/gallery/gallery';
import { ContactsComponent } from './pages/contacts/contacts';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Головна - Spadok Hotel' },
  { path: 'rooms', component: RoomsComponent, title: 'Номери - Spadok Hotel' },
  { path: 'gallery', component: GalleryComponent, title: 'Галерея - Spadok Hotel' },
  { path: 'contacts', component: ContactsComponent, title: 'Контакти - Spadok Hotel' },
  { path: '**', redirectTo: '' } // Редірект на головну, якщо URL не знайдено
];
