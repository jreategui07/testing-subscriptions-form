import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { CatalogueService } from '../../services/catalogue.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  anyForm: FormGroup;
  
  colorSC$ : Observable<any>;
  brandSC$ : Observable<any>;
  sizeSC$  : Observable<any>;
  fruitSC$ : Observable<any>;

  constructor(private fb: FormBuilder,
              private catalogueService: CatalogueService) { 

    this.anyForm = this.fb.group({
      color: [''],
      brand: [''],
      size: [''],
      fruit: [''],
    });
    
    this.colorSC$ = catalogueService.getColors();
    this.brandSC$ = catalogueService.getSizes();
    this.sizeSC$  = catalogueService.getFruits();
    this.fruitSC$ = catalogueService.getColors();

    console.log('this.colorSC$', this.colorSC$);

  }

  ngOnInit() {

  }
  
  onSubmit() {
    console.log(this.anyForm);
  }

}
