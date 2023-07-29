import { Component, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { LightboxComponent } from '../lightbox/lightbox.component';
import { Router, NavigationEnd, RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @ViewChild('lightbox')
  lightbox!: LightboxComponent;

  // @ViewChild('lightbox')
  // lightbox!: ElementRef;

   constructor(private renderer: Renderer2) {}

  openLightbox(): void {
    this.renderer.setStyle(this.lightbox['nativeElement'], 'display', 'flex');
  }

  closeLightbox(): void {
    this.renderer.setStyle(this.lightbox['nativeElement'], 'display', 'none');
  }
}