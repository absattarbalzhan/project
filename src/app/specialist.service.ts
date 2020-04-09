import { Injectable } from '@angular/core';
import {List} from './list';
import {Specialist} from './specialist';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpecialistService {
  list: Specialist[];
  constructor() {
    this.chooseList(1);
  }
  getSpecialists(id: number): Observable<Specialist[]> {
    this.list = List.filter(
      specialist =>  specialist.category.id === id
    );
    return of (this.list);
  }
  chooseList(id: number): void {
    this.getSpecialists(id).subscribe(list => this.list = list);
  }
}
