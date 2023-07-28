import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard-parent/dashboard-parent.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { FlightSelectComponent } from '../app/flight-select/flight-select.component';
import { FlightOptionsComponent } from './flight-options/flight-options.component';

const routes: Routes = [
  { path: 'flight-options', component: FlightOptionsComponent },
  { path: 'flight-details', component: DashboardComponent },

  { path: 'flight-select', component: FlightSelectComponent }

];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})


export class AppRoutingModule { }
