import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.css'],
})
export class ImageCarouselComponent implements OnInit {
  images: string[] = [
    '../assets/p3.jpg',
    '../assets/p4.jpg',
    '../assets/p10.jpg',
    '../assets/p13.jpg',
    '../assets/p16.jpg',
    '../assets/p11.jpg',
    '../assets/p7.jpg'
  ];
  currentImage!: string;
  currentImageIndex: number = 0;

  ngOnInit(): void {
    this.changeImage();
  }

  changeImage(): void {
    this.currentImage = this.images[this.currentImageIndex];

    setInterval(() => {
      this.currentImageIndex++;
      if (this.currentImageIndex >= this.images.length) {
        this.currentImageIndex = 0;
      }
      this.currentImage = this.images[this.currentImageIndex];
    }, 1000); // Change image every 2000ms (2 seconds)
  }

  changeImageByIndex(index: number): void {
    this.currentImageIndex = index;
    this.currentImage = this.images[this.currentImageIndex];
  }
}