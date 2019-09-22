import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  
  requestOptions: any;
  
  constructor(public http: HttpClient) {
    const headers = new HttpHeaders({
      'Content-Type': 'text/plain; charset=utf-8'
    });
    this.requestOptions = { headers: headers, observe: 'response' };
  }
  getColors() {
    return this.http.get('http://localhost:8080/getColors', this.requestOptions).pipe(map(response => response['body']));
  }
  getBrands() {
    return this.http.get('http://localhost:8080/getBrands', this.requestOptions).pipe(map(response => response['body']));
  }
  getSizes() {
    return this.http.get('http://localhost:8080/getSizes', this.requestOptions).pipe(map(response => response['body']));
  }
  getFruits() {
    return this.http.get('http://localhost:8080/getFruits', this.requestOptions).pipe(map(response => response['body']));
  }
}