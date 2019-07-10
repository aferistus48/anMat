import { Component, OnInit } from '@angular/core';
import { NgModel, FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
   user: FormGroup = new FormGroup( {
    surname: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),

    
  })
  constructor() { }

  ngOnInit() {
  }
  
  
}
