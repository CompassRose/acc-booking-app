import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DashboardApi } from '../API/dashboar.api';


@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  //encapsulation: ViewEncapsulation.None,
  styleUrls: ['./home-screen.component.scss']
})


export class HomeScreenComponent implements OnInit {

  public airportList: any[] = [];
  public flightList: any[] = [];
  constructor(private dashboardApi: DashboardApi) { }

  public ngOnInit(): void {

    console.log('getAirportCodes ',)

    this.dashboardApi.getColumns()
      .subscribe((response) => {

        response.forEach((c: any, i: any) => {
          // if (i > 100 && 1 < 200) {
          this.flightList.push(c)
          // console.log(c)
          // }
        })
        console.log('this.flightList. ', this.flightList)
      })


    this.dashboardApi.getAirportCodes()
      .subscribe((airports) => {

        airports.forEach((lap, i) => {
          if (i > 100 && 1 < 200) {
            this.airportList.push(lap.name)
            //console.log(lap.name)
          }
        })
      })


  }


}