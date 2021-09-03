import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../../services/api.service';
import { Offer, Category } from '../../interface'

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
  offers$: Observable<Offer[]>;
  categories$: Observable<Category[]>;
  selectedFilter: string = 'none';

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getOffers();
    this.getCategories();
  }

  public getOffers() {
    this.offers$ = this.apiService.getOffers();
  }

  public getCategories() {
    this.categories$ = this.apiService.getCategories();
  }

  selectChangeHandler (event: any) {
    this.offers$ = this.apiService.filterOffers(event.value.id)
  }

  resetFilter() {
    this.offers$ = this.apiService.getOffers();
    this.selectedFilter = 'none';
  }

}
