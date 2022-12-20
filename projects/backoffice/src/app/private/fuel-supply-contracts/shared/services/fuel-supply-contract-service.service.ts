import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FuelSupplyContract } from '../interfaces/fuel-supply-contract.interface';

@Injectable({
  providedIn: 'root',
})
export class FuelSupplyContractService {
  constructor(private httpService: HttpClient) {}

  getCustomersMedium() {
    return this.httpService
      .get<any>('assets/data/fuelSupplyContract-medium.json')
      .toPromise()
      .then(res => <FuelSupplyContract[]>res.data)
      .then(data => {
        return data;
      });
  }
}
