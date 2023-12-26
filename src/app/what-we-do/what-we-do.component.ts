import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-what-we-do',
  templateUrl: './what-we-do.component.html',
  styleUrls: ['./what-we-do.component.css'],
  standalone:true,
  imports: [CommonModule]
})
export class WhatWeDoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
