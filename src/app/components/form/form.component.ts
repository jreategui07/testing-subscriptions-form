import { Component, OnInit, Pipe } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CatalogueService } from '../../services/catalogue.service';
import { HttpErrorResponse } from '@angular/common/http';

export interface IError {
  status: boolean,
  error: string
};

@Pipe({
  name: 'appflyers',
  pure: false
})
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  anyForm: FormGroup;
  formHasError: Array<string>;
  
  colorSC$ : Observable<any>;
  brandSC$ : Observable<any>;
  sizeSC$  : Observable<any>;
  fruitSC$ : Observable<any>;
  
  colorChanged : Subscription;
  brandChanged : Subscription;
  sizeChanged : Subscription;
  fruitChanged : Subscription;

  errorFn = catchError((e: HttpErrorResponse) => {
    this.formHasError.push(e.message);
    return [];
  });

  constructor(private fb: FormBuilder,
              private catalogueService: CatalogueService) { 

    this.anyForm = this.fb.group({
      color: [''],
      brand: [''],
      size: [''],
      fruit: [''],
    });
    
    this.colorSC$ = catalogueService.getColors().pipe(this.errorFn);
    this.brandSC$ = catalogueService.getBrands().pipe(this.errorFn);
    this.sizeSC$  = catalogueService.getSizes().pipe(this.errorFn);
    this.fruitSC$ = catalogueService.getFruits().pipe(this.errorFn);

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
