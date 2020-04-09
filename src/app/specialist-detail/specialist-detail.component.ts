import { Component, OnInit } from '@angular/core';
import { List } from '../list';
import { Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-specialist-detail',
  templateUrl: './specialist-detail.component.html',
  styleUrls: ['./specialist-detail.component.css']
})
export class SpecialistDetailComponent implements OnInit {

  selectedItem = List[0];
  constructor(
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.findSpecialist();
  }

  findSpecialist() {
    let id = this.route.snapshot.paramMap.get('specialistId');
    id = id.substr(1);
    this.selectedItem = List.find(specialist => specialist.id.toString() === id);
  }

  back(): void {
    this.location.back();
  }

  save() {
    alert('saved');
  }

}
