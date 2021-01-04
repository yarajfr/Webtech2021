import {Component, Input, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Data } from '../../../shared/data';
import { Location } from '@angular/common';

let input = Input();

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() data: Data;
  form: FormGroup;

  constructor(private fb: FormBuilder, private location: Location) {
    this.form = this.fb.group(
      {
        idControl: ['', Validators.required],
        firstNameControl: ['', Validators.required],
        lastNameControl: ['', Validators.required],
        emailControl: ['', Validators.required],
      }
    );
  }

  ngOnInit(): void {
    this.form.patchValue({
      idControl: this.data?.id,
      firstNameControl: this.data?.firstname,
      lastNameControl: this.data?.lastname,
      emailControl: this.data?.email
    });
  }

  onSubmit(): void {
    // TODO: Use EventEmitter with form value
    console.warn(this.form.value);
  }

  cancel(): void {
    this.location.back();
  }
}
