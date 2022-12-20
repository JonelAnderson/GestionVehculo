import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DriverOperators } from '../interfaces/drivers-operators.interfaces';

@Injectable({
  providedIn: 'root',
})
export class DataDriverOperators {
  constructor(private httpService: HttpClient) {}

  getCustomersMedium() {
    return this.httpService
      .get<any>('assets/data/data-list-drivers.json')
      .toPromise()
      .then(res => <DriverOperators[]>res.data)
      .then(data => {
        return data;
      });
  }
}
