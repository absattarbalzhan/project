import { Component, OnInit } from '@angular/core';
import {SpecialistService} from '../specialist.service';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css']
})
export class MainListComponent implements OnInit {

  constructor(
    public specialistService: SpecialistService
  ) { }

  ngOnInit(): void {
  }

}
