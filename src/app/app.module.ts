import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MaterialExampleModule } from '../material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard-parent/dashboard-parent.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { FlightSelectComponent } from '../app/flight-select/flight-select.component';
import { FlightOptionsComponent } from './flight-options/flight-options.component';
import { withDesign } from 'storybook-addon-designs';

@NgModule({
  declarations: [
    AppComponent,
    FlightCardComponent,
    DashboardComponent,
    HomeScreenComponent,
    FlightOptionsComponent,
    FlightSelectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialExampleModule,
    CommonModule,
    AppRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
