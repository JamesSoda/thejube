import { ChurchEvent } from '../models/church-event';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  readonly events$: Observable<ChurchEvent[]>

  constructor(private firestore: AngularFirestore) {
    this.events$ = firestore.collection<ChurchEvent>('events').valueChanges()
  }
}
