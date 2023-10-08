import { Component } from '@angular/core';
import { LocationDetailsService, timesheet } from './location-details.service';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css'],
})
export class LocationDetailsComponent {
  constructor(private readonly locationDetailsService: LocationDetailsService) {
    setInterval(() => {
      this.getData();
    }, 5000);
  }

  displayedColumns: string[] = ['startTime', 'endTime', 'inCount', 'outCount', 'totalCount'];
  dataSource: timesheet[] = [];

  tiles = [
    {text: 'Location: ', cols: 2, rows: 1, color: 'lightpink'},
    {text: 'Entry taken: ', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Exited count: ', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Persons in hall: ', cols: 1, rows: 1, color: 'lightblue'},
  ];

  getData() {
    console.log("Called");
    this.locationDetailsService.getLocationByID()
      .subscribe((response) => {
        const { name, inCount, outCount, totalCount } = response.body?.data!;
        
        this.tiles[0].text = `Location: ${name}`;
        this.tiles[1].text = `Entry taken: ${inCount}`;
        this.tiles[2].text = `Exited count: ${outCount}`;
        this.tiles[3].text = `Persons in hall: ${totalCount}`;
      });

    this.locationDetailsService.getLocationTimesheet()
      .subscribe((response) => {
        this.dataSource = response.body?.data.timesheet!;
      })
  }
}
