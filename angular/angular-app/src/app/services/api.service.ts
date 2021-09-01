import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Offer, Category } from '../interface'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL = 'http://localhost'

  constructor(private http: HttpClient) { }

  public getOffers(): Observable<Offer[]> {
    return this.http.get<Offer[]>(`${this.API_URL}/offer/`);
  }

  public getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.API_URL}/category/`);
  }

  public postOffer(new_offer: Offer) {
    return this.http.post(`${this.API_URL}/offer/`,new_offer);
  }

  public postCategory(new_category: Category) {
    return this.http.post(`${this.API_URL}/category/`,new_category);
  }

}