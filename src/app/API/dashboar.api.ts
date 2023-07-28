import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, flatMap } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})



export class DashboardApi {


    readonly AirportCodes_URL = './assets/csv/airports_all.csv';
    readonly apiDataQueryInventory = './assets/json/flightList.json';

    constructor(private http: HttpClient) {



    }

    public getColumns(): Observable<any> {
        return this.http.get<any>(this.apiDataQueryInventory);
    }

    getAirportCodes(): Observable<any[]> {
        return this.http
            .get(this.AirportCodes_URL, { responseType: 'text' })
            .pipe(map(res => {
                return this.csvAirportCodesJSON(res);
            }));
    }



    csvAirportCodesJSON(csv: any) {

        const lines = csv.split(/[\r\n]+/);
        for (let i = 0; i < lines.length; i++) {
            lines[i] = lines[i].replace(/\s/, '');
        }
        const result = [];
        const headers = lines[0].split(',');
        for (let i = 1; i < lines.length; i++) {
            const obj = {};
            const currentline = lines[i].split(',');
            for (let j = 0; j < headers.length; j++) {
                if (headers[j] !== 'coordinates') {

                    // @ts-ignore
                    obj[headers[j].toString()] = currentline[j];
                } else {
                    let temp3 = currentline[2].replace(/['"]+/g, '')
                    let temp4 = currentline[3].replace(/['"|/\s/]+/g, '')
                    temp3 = Math.round((+temp3 * 100) / 100)
                    temp4 = Math.round((+temp4 * 100) / 100)
                    const tester = [];
                    tester.push(temp4, temp3)

                    // @ts-ignore
                    obj[headers[j]] = tester;
                }
            }
            result.push(obj);
        }
        console.log('result ', result)
        return result;
        // return JSON.stringify(result); //JSON
    }

}