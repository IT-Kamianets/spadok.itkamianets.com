import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrls: ['./gallery.css']
})
export class GalleryComponent {
  images = [
    { title: 'Екстер\'єр готелю', icon: '🏨' },
    { title: 'Номер Делюкс', icon: '🛏️' },
    { title: 'Ванна кімната', icon: '🛁' },
    { title: 'Територія саду', icon: '🌳' },
    { title: 'Зона барбекю', icon: '🔥' },
    { title: 'Вид на Старе місто', icon: '🏰' }
  ];
}
