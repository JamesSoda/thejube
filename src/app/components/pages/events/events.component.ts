import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { collection, collectionData } from '@angular/fire/firestore';
import { delay, Observable } from 'rxjs';
import { ChurchEvent } from 'src/app/models/church-event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  public readonly events$: Observable<ChurchEvent[]>;
  
  constructor(readonly firestore: AngularFirestore) {
    
    this.events$ = firestore.collection<ChurchEvent>('events').valueChanges().pipe(delay(700))
  }

  ngOnInit(): void {
  }

}
