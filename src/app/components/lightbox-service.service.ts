import { Injectable } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { LightboxComponent } from './lightbox/lightbox.component';

@Injectable({
  providedIn: 'root'
})
export class LightboxService {
  private overlayRef: OverlayRef | null = null;

  constructor(private overlay: Overlay) { }

  openLightbox(origin: HTMLElement) {
    if (!this.overlayRef) {
      this.overlayRef = this.overlay.create({
        hasBackdrop: true,
        positionStrategy: this.overlay.position()
          .flexibleConnectedTo(origin)
          .withPositions([{ originX: 'center', originY: 'bottom', overlayX: 'center', overlayY: 'top' }])
      });

      const lightboxPortal = new ComponentPortal(LightboxComponent);
      this.overlayRef.attach(lightboxPortal);

      this.overlayRef.backdropClick().subscribe(() => this.closeLightbox());
    }
  }

  closeLightbox() {
    if (this.overlayRef) {
      this.overlayRef.detach();
      this.overlayRef = null;
    }
  }
}
