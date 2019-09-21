import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  headers: any;

  constructor(public http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'text/plain; charset=utf-8'
    });
  }

  getColors() {
    return this.http.get('http://localhost:8080/getColors', { headers: this.headers, observe: 'response' }).pipe(
      map(response => {
        return response;
      })
    );
  }

  getBrands() {
    return this.http.get('http://localhost:8080/getBrands', { headers: this.headers, observe: 'response' }).pipe(
      map(response => {
        return response;
      })
    );
  }

  getSizes() {
    return this.http.get('http://localhost:8080/getSizes', { headers: this.headers, observe: 'response' }).pipe(
      map(response => {
        return response;
      })
    );
  }

  getFruits() {
    return this.http.get('http://localhost:8080/getFruits', { headers: this.headers, observe: 'response' }).pipe(
      map(response => {
        return response;
      })
    );
  }

}
