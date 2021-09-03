import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OffersComponent } from './components/offers/offers.component';
import { OopsComponent } from './components/oops/oops.component';
import { SingleOfferComponent } from './components/single-offer/single-offer.component';
import { SingleOfferDetailsComponent } from './components/single-offer-details/single-offer-details.component';
import { AddOfferComponent } from './components/add-offer/add-offer.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    OffersComponent,
    OopsComponent,
    SingleOfferComponent,
    SingleOfferDetailsComponent,
    AddOfferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    RippleModule,
    DropdownModule,
    InputTextModule,
    InputTextareaModule,
    MessagesModule,
    MessageModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
