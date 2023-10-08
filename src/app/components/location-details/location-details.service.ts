import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

interface locationByIDResponse {
  data: {
    id: number,
    inCount: number,
    outCount: number,
    totalCount: number,
    name: string,
  }
}

export interface timesheet {
  startTime: string,
  endTime: string,
  inCount: number,
  outCount: number,
  totalCount: number,
}

interface locationTimesheet {
  data: {
    id: number,
    name: string,
    timesheet: timesheet[]
  }
}

@Injectable()
export class LocationDetailsService {

  constructor(private httpClient: HttpClient) {}

  getLocationByID() {
    return this.httpClient.get<locationByIDResponse>('http://localhost:3000/api/location/2', { observe: 'response' });
  }

  getLocationTimesheet() {
    return this.httpClient.get<locationTimesheet>('http://localhost:3000/api/location/timesheet/2', { observe: 'response' });
  }
}
