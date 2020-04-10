import { Component, OnInit } from '@angular/core';
import {SpecialistService} from '../specialist.service';
import {Specialist} from '../specialist';
import {SPECIALISTS} from '../mock-specialists';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private specislistService: SpecialistService) { }
  neededSpecialist: Specialist;
  ngOnInit(): void {
  }
  search(name): void {
    const SpecialistWeNeed = SPECIALISTS.find((specialist: any) => specialist.title === name);
    this.neededSpecialist = SpecialistWeNeed;
  }

}
