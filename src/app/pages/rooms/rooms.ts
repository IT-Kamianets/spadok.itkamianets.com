import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './rooms.html',
  styleUrls: ['./rooms.css']
})
export class RoomsComponent {
  isGalleryOpen = false;
  currentRoom: any = null;
  currentPhotoIndex = 0;

  constructor(public ls: LanguageService) {}

  openGallery(room: any) {
    if (room.images && room.images.length > 0) {
      this.currentRoom = room;
      this.currentPhotoIndex = 0;
      this.isGalleryOpen = true;
      document.body.style.overflow = 'hidden'; // Disable scroll
    }
  }

  closeGallery() {
    this.isGalleryOpen = false;
    this.currentRoom = null;
    document.body.style.overflow = 'auto'; // Enable scroll
  }

  nextPhoto(event?: Event) {
    if (event) event.stopPropagation();
    if (this.currentRoom && this.currentRoom.images) {
      this.currentPhotoIndex = (this.currentPhotoIndex + 1) % this.currentRoom.images.length;
    }
  }

  prevPhoto(event?: Event) {
    if (event) event.stopPropagation();
    if (this.currentRoom && this.currentRoom.images) {
      this.currentPhotoIndex = (this.currentPhotoIndex - 1 + this.currentRoom.images.length) % this.currentRoom.images.length;
    }
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
