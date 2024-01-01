import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { TitleComponent } from "../title/title.component";

@Component({
    selector: 'app-hero-section',
    templateUrl: './hero-section.component.html',
    styleUrls: ['./hero-section.component.css'],
    standalone: true,
    imports: [CommonModule, HeaderComponent, TitleComponent]
})
export class HeroSectionComponent implements OnInit {
  isEditing: boolean = false;
  backgroundImageOptions: string[] = [
    '../assets/image/fon.jpg',
    '../assets/image/big-sur-flower.jpg',
    '../assets/image/big-sur.jpg',
    '../assets/image/flowers.jpg',
  ];

  selectedBackgroundImage: string = this.backgroundImageOptions[0];
  heroText: string = 'Creative Template';  // Change heroText to be a common text for both headings
  heroTextMain: string = 'Welcome to Mogo';
  borderColor='white';

  constructor() { }

  ngOnInit(): void {
  }

  changeBackground(backgroundImage: string) {
    this.selectedBackgroundImage = backgroundImage;
  }

  editHeroSection() {
    const newText = prompt('Enter new text:', this.heroText);
    /* const newImage = prompt('Enter new image URL:', this.selectedBackgroundImage); */

    if (newText !== null ) {
      this.heroText = newText;
      /* this.selectedBackgroundImage = newImage; */
    }
  }

  editText() {
    const newText = prompt('Enter new text:', this.heroTextMain);
    if (newText !== null) {
      this.heroTextMain = newText;
    }
  }

  edit() {
    this.isEditing = !this.isEditing;
  }
}
