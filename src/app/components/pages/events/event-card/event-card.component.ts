import { Component, Input, OnInit } from '@angular/core';
import { ChurchEvent } from 'src/app/models/church-event';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {

  @Input() public event?: ChurchEvent

  constructor() { }

  ngOnInit(): void {
  }

}
