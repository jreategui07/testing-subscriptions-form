import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CatalogueService } from '../../services/catalogue.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy {

  anyForm: FormGroup;
  
  colorSC: Subscription;
  brandSC: Subscription;
  sizeSC: Subscription;
  fruitSC: Subscription;
  
  colorsData: any;
  brandsData: any;
  sizesData: any;
  fruitsData: any;

  constructor(private fb: FormBuilder,
              private catalogueService: CatalogueService) { 
    this.anyForm = this.fb.group({
      color: [''],
      brand: [''],
      size: [''],
      fruit: [''],
    });
  }

  ngOnInit() {

    this.colorSC = this.catalogueService.getColors().subscribe(
      (response: any) => {
        console.log(response.body);
        this.colorsData = response.body;
      },
      error => 
      {
        console.warn('Error from service', error);
      }
    );

    this.brandSC = this.catalogueService.getSizes().subscribe(
      (response: any) => {
        console.log(response.body);
        this.brandsData = response.body;
      },
      error => 
      {
        console.warn('Error from service', error);
      }
    );

    this.sizeSC = this.catalogueService.getFruits().subscribe(
      (response: any) => {
        console.log(response.body);
        this.sizesData = response.body;
      },
      error => 
      {
        console.warn('Error from service', error);
      }
    );

    this.fruitSC = this.catalogueService.getColors().subscribe(
      (response: any) => {
        console.log(response.body);
        this.fruitsData = response.body;
      },
      error => 
      {
        console.warn('Error from service', error);
      }
    );
    
  }
  
  onSubmit() {
    console.log(this.anyForm);
  }

  ngOnDestroy(): void {
    this.colorSC.unsubscribe();
    this.brandSC.unsubscribe();
    this.sizeSC.unsubscribe();
    this.fruitSC.unsubscribe();
  }

}
