import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
  standalone:true,
  imports: [CommonModule]
})
export class ServiceComponent implements OnInit {
  @Input() summary: { name: string; icon: string; data: string }[] = [
    { name: 'Tour starts', icon: 'flag', data: 'Use solar energy to power your home and reduce your..' },
    { name: 'Difficulty', icon: 'network_check', data: 'Use solar energy to power your home and reduce your..' },
    { name: 'Available', icon: 'calendar_today', data: 'Use solar energy to power your home and reduce your..' },
    { name: 'Duration', icon: 'hourglass_empty', data: 'Use solar energy to power your home and reduce your..' },
    { name: 'Languages', icon: 'translate', data: 'Use solar energy to power your home and reduce your..' },
    { name: 'Minimum age', icon: 'sell', data: 'Use solar energy to power your home and reduce your..' },
  ];
  @Input() icons: string[] = ['verified_user', 'support_agent', 'sell'];
  @Input() visible = true;
  fontSize: any;
  summaryTour = 'Summary tour';
  constructor() { }

  ngOnInit() {
  }

}
