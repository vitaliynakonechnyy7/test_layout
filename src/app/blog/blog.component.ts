import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  standalone:true,
  imports: [CommonModule]
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
