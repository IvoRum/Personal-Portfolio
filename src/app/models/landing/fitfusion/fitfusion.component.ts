import { Component } from '@angular/core';

@Component({
  selector: 'app-fitfusion',
  templateUrl: './fitfusion.component.html',
  styleUrls: ['./fitfusion.component.css'],
})
export class FitfusionComponent {
  images: string[] = [
    'assets\\img\\FitFusion\\main.png',
    'assets\\img\\FitFusion\\relations.png',
  ];

  currentIndex: number = 0;

  showNext() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  showPrev() {
    this.currentIndex =
      (this.currentIndex + this.images.length - 1) % this.images.length;
  }
}
