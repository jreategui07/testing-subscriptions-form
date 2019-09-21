import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  anyForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.anyForm = this.fb.group({
      color: [''],
      brand: [''],
      size: [''],
      fruit: [''],
    });

  }
  
  onSubmit() {
    console.log(this.anyForm);
  }

}
