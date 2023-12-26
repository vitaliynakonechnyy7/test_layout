import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
  standalone:true,
  imports: [CommonModule]
})
export class ServiceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
