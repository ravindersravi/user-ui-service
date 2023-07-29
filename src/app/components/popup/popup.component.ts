import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  constructor(public elementRef: ElementRef) { }

  ngOnInit(): void {
  }
}