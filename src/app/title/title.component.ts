import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class TitleComponent implements OnInit {
  @Input() topTitle: any;
  @Input() mainTitle: any;
  @Input() borderColor: any;

  constructor() { }

  ngOnInit() {
  }

}
