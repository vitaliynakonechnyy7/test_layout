import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeroSectionComponent } from "../hero-section/hero-section.component";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    standalone: true,
    imports: [CommonModule, HeroSectionComponent]
})
export class HeaderComponent implements OnInit {
handleSearch($event: SubmitEvent) {
throw new Error('Method not implemented.');
}

  constructor() { }

  ngOnInit() {
  }

}
