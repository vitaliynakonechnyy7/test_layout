import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
  standalone:true,
  imports: [CommonModule]
})
export class TestimonialsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
