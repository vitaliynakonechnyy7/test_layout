import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-hero-section',
    templateUrl: './hero-section.component.html',
    styleUrls: ['./hero-section.component.css'],
    standalone: true,
    imports: [CommonModule, HeaderComponent]
})
export class HeroSectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
