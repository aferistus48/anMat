import { Component, OnInit } from '@angular/core';
import { NgModel, FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../user';
@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {
  model = new User('Surname', 'Name', 'Date of Birth', 'Email', 'Phone', 'Photo', 'Patronymic');
  submitted = false;

  onSubmit() {this.submitted = true};

  get diagnostic() { return JSON.stringify(this.model); }

  onView() {
    this.model = new User();
  }
  constructor() { }

  ngOnInit() {
  }

}
