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

  public getSingleOffer(id: number): Observable<Offer[]> {
    return this.http.get<Offer[]>(`${this.API_URL}/offer/${id}`);
  }

  public postOffer(new_offer: Offer) {
    return this.http.post(`${this.API_URL}/offer/`,new_offer);
  }

  public getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.API_URL}/category/`);
  }

}