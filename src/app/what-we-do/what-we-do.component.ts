import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TitleComponent } from "../title/title.component";

@Component({
    selector: 'app-what-we-do',
    templateUrl: './what-we-do.component.html',
    styleUrls: ['./what-we-do.component.css'],
    standalone: true,
    imports: [CommonModule, TitleComponent]
})
export class WhatWeDoComponent implements OnInit {
image='../assets/image/flowers.jpg';

  constructor() { }

  ngOnInit() {
  }

}
