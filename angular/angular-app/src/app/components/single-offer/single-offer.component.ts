import { Component, Input } from '@angular/core';
import { Offer } from 'src/app/interface';

@Component({
  selector: 'app-single-offer',
  templateUrl: './single-offer.component.html',
  styleUrls: ['./single-offer.component.css']
})
export class SingleOfferComponent {

  @Input() offer: Offer;

  constructor() { }

}
