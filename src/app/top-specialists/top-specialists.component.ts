import { Component, OnInit } from '@angular/core';
import { List } from '../list';

@Component({
  selector: 'app-top-specialists',
  templateUrl: './top-specialists.component.html',
  styleUrls: ['./top-specialists.component.css']
})
export class TopSpecialistsComponent implements OnInit {
  specialists = [
    List[5],
    List[7],
    List[13]
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
