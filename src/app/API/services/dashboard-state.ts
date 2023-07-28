import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Observable } from 'rxjs';


@Injectable()


export class DashboardState {

    public airportCodesBehaviorSubject$ = new BehaviorSubject<any[]>([]);



    public setAirportCodes(codes: any[]) {
        this.airportCodesBehaviorSubject$.next(codes)
    }

}