import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DashboardApi } from '../API/dashboar.api';


@Component({
    selector: 'app-flight-select',
    templateUrl: './flight-select.component.html',
    // changeDetection: ChangeDetectionStrategy.OnPush,
    //encapsulation: ViewEncapsulation.None,
    styleUrls: ['./flight-select.component.scss']
})


export class FlightSelectComponent implements OnInit {



    public ngOnInit(): void {

    }


}