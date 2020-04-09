import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { mockUser} from '../mock-users';

@Component({
  selector: 'app-my-specialists',
  templateUrl: './my-specialists.component.html',
  styleUrls: ['./my-specialists.component.css']
})
export class MySpecialistsComponent implements OnInit {

  constructor() { }
  title = new FormControl('');
  age = new FormControl('');

  ngOnInit(): void {
  }

  newSpecialist() {
    // tslint:disable-next-line:max-line-length
    mockUser.user_specialists.push({id: Math.random(), title: this.title.value, age: 0, gender: '', city: '', likes: 0, comments: [], front_image: '', images: [], category: null});
  }

}
