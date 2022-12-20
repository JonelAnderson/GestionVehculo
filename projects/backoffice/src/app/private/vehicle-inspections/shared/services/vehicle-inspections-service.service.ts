import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VehicleInspections } from '../interfaces/vehicle-inspections.interface';

@Injectable({
  providedIn: 'root',
})
export class VehicleInspectionsService {
  constructor(private httpService: HttpClient) {}

  getCustomersMedium() {
    return this.httpService
      .get<any>('assets/data/vehicleInspections-medium.json')
      .toPromise()
      .then(res => <VehicleInspections[]>res.data)
      .then(data => {
        return data;
      });
  }
}
