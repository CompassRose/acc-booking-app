import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DashboardApi } from '../API/dashboar.api';


@Component({
    selector: 'app-flight-options',
    templateUrl: './flight-options.component.html',
    // changeDetection: ChangeDetectionStrategy.OnPush,
    //encapsulation: ViewEncapsulation.None,
    styleUrls: ['./flight-options.component.scss']
})


export class FlightOptionsComponent implements OnInit {

    public airportList: any[] = [];
    public flightList: any[] = [];

    constructor(private dashboardApi: DashboardApi) { }

    public ngOnInit(): void {

        this.dashboardApi.getColumns()
            .subscribe((response) => {

                response.forEach((c: any, i: any) => {
                    // if (i > 100 && 1 < 200) {
                    c.departure
                    // const first4 = c.departure.substring(0, 10);
                    // console.log('first4 ', first4)
                    c.departure = c.departure.slice(-6);
                    c.arrival = c.arrival.slice(-6);
                    //console.log('last3 ', last3); // uty
                    this.flightList.push(c)
                    console.log(c)
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