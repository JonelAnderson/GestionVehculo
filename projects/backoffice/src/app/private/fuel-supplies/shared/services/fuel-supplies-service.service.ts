import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FuelSupplies } from '../interfaces/fuel-supplies.interface';
import { ConfigService } from '@cad-core/services';

@Injectable({
  providedIn: 'root',
})
export class FuelSuppliesService {
  _fuelSuppliesURL: string;
  constructor(private httpService: HttpClient, private _configService: ConfigService) {
    this._fuelSuppliesURL = `${this._configService.appConfig.apiEntitiesUrl}api/v1/FuelSupplies`;
  }

  getCustomersMedium() {
    return this.httpService
      .get<any>('assets/data/fuelSupplies-medium.json')
      .toPromise()
      .then(res => <FuelSupplies[]>res.data)
      .then(data => {
        return data;
      });
  }
}
