import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  standalone:true,
  imports: [CommonModule]
})
export class AboutComponent implements OnInit {
  blogEntries = [
    { image: '../assets/image/plant.jpg' },
    { image: '../assets/image/computer.jpg' },
    { image: '../assets/image/phone.jpg' },
  ];

  achievementNumbers = [42, 125, 15, 99, 24];
  achievementTitles = ['Web Design Project', 'Award Winner', '', 'Cups of Coffee', 'Last Digit'];
  constructor() { }

  ngOnInit() {
  }

}
