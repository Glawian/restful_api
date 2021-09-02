import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-single-offer-details',
  templateUrl: './single-offer-details.component.html',
  styleUrls: ['./single-offer-details.component.css']
})
export class SingleOfferDetailsComponent implements OnInit {
  offerId: number;
  offer: any;

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.offerId = Number(routeParams.get('offerId'));
    this.getOfferById()
  }

  public getOfferById() {
    this.apiService.getSingleOffer(this.offerId)
      .subscribe((response) => {
        this.offer = response;
      });
  }

}
