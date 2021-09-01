import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  offer_form: FormGroup;

  constructor(private apiService: ApiService, private form_builder: FormBuilder) { }

  ngOnInit(): void {
    this.getOffers();
    this.getCategories();
    this.offer_form = this.form_builder.group({
      title: '',
      description: '',
      price: '',
      category: ''
    });

    this.offer_form.controls["title"].setValidators([Validators.required]);
    this.offer_form.controls["description"].setValidators([Validators.required]);
    this.offer_form.controls["price"].setValidators([Validators.required]);
    this.offer_form.controls["category"].setValidators([Validators.required]);
  }

  public getOffers() {
    this.offers$ = this.apiService.getOffers();
  }

  public getCategories() {
    this.categories$ = this.apiService.getCategories();
  }

  onSubmit() {
    this.apiService.postOffer(this.offer_form.value)
      .subscribe(
        (response) => {
          console.log(response);
          this.getOffers();
        }
      )
  }

}
