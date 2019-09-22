import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
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
  
  colorChanged : Subscription;
  brandChanged : Subscription;
  sizeChanged : Subscription;
  fruitChanged : Subscription;

  constructor(private fb: FormBuilder,
              private catalogueService: CatalogueService) { 

    this.anyForm = this.fb.group({
      color: [''],
      brand: [''],
      size: [''],
      fruit: [''],
    });
    
    
    this.colorSC$ = catalogueService.getColors();
    this.brandSC$ = catalogueService.getBrands();
    this.sizeSC$  = catalogueService.getSizes();
    this.fruitSC$ = catalogueService.getFruits();

  }

  ngOnInit() {

    this.colorChanged = this.anyForm.controls.color.valueChanges.subscribe(response => {
      console.log('color has changed, do something', response);
    });

    this.brandChanged = this.anyForm.controls.brand.valueChanges.subscribe(response => {
      console.log('brand has changed, do something', response);
    });

    this.sizeChanged = this.anyForm.controls.size.valueChanges.subscribe(response => {
      console.log('size has changed, do something', response);
    });

    this.fruitChanged = this.anyForm.controls.fruit.valueChanges.subscribe(response => {
      console.log('fruit has changed, do something', response);
    });

  }
  
  onSubmit() {
    console.log(this.anyForm);
  }

  ngOnDestroy(): void {
    this.colorChanged.unsubscribe();
    this.brandChanged.unsubscribe();
    this.sizeChanged.unsubscribe();
    this.fruitChanged.unsubscribe();
  }

}
