import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  //encapsulation: ViewEncapsulation.None,
  styleUrls: ['./flight-card.component.scss']
})
export class FlightCardComponent implements OnInit {

  constructor() { }

  public ngOnInit(): void {

  }

}
