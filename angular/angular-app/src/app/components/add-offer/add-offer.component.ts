import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

import { ApiService } from '../../services/api.service';
import { Category } from '../../interface'

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css'],
  providers: [MessageService]
})
export class AddOfferComponent implements OnInit {
  offer_form: FormGroup;
  categories$: Observable<Category[]>;

  constructor(private apiService: ApiService, private form_builder: FormBuilder, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getCategories();
    this.offer_form = this.form_builder.group({
      title: '',
      description: '',
      price: '',
      category: ''
    });

    this.offer_form.controls["title"].setValidators([Validators.required, Validators.minLength(5), Validators.maxLength(100)]);
    this.offer_form.controls["description"].setValidators([Validators.required, Validators.minLength(5), Validators.maxLength(5000)]);
    this.offer_form.controls["price"].setValidators([Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(10)]);
    this.offer_form.controls["category"].setValidators([Validators.required]);

  }

  public getCategories() {
    this.categories$ = this.apiService.getCategories();
  }

  onSubmit() {
    this.offer_form.value.category = this.offer_form.value.category.id;
    this.apiService.postOffer(this.offer_form.value)
      .subscribe( 
        response => {
          this.messageService.add({severity:'success', summary:'Service Message', detail:'Offer successfully created!'});
          this.offer_form.reset();
        },
        error => this.messageService.add({severity:'warn', summary:'Service Message', detail:'Something went wrong, offer not created.'}),
      )
  }

}
