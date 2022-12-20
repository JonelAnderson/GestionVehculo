import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FuelPrice } from '../interfaces/fuel-price.interface';
import { ConfigService } from '@cad-core/services';
import { Observable } from 'rxjs';
import { Update } from '@ngrx/entity';

@Injectable({
  providedIn: 'root',
})
export class FuelPriceService {
  _fuelPriceURL: string;
  constructor(private httpService: HttpClient, private _configService: ConfigService) {
    this._fuelPriceURL = `${this._configService.appConfig.apiEntitiesUrl}api/v1/FuelPrice`;
  }

  getCustomersMedium() {
    return this.httpService
      .get<any>('assets/data/fuelPrice-medium.json')
      .toPromise()
      .then(res => <FuelPrice[]>res.data)
      .then(data => {
        return data;
      });
  }

  add(body: FuelPrice): Observable<FuelPrice> {
    let fd: any = new FormData();
    fd.append('Contract', body.Contract);
    fd.append('Concept', body.Concept);
    fd.append('EfectiveDate', body.EfectiveDate);
    fd.append('Worth', body.Worth);
    fd.append('Document', body.Document);
    return this.httpService.post<FuelPrice>(`${this._fuelPriceURL}/Create`, fd);
  }

  update(update: Update<FuelPrice>): Observable<FuelPrice> {
    let fd: any = new FormData();
    fd.append('Id', update.changes.id);
    fd.append('Contract', update.changes.Contract);
    fd.append('Concept', update.changes.Concept);
    fd.append('EfectiveDate', update.changes.EfectiveDate);
    fd.append('Worth', update.changes.Worth);
    fd.append('Document', update.changes.Document);

    return this.httpService.put<FuelPrice>(`${this._fuelPriceURL}/Update`, fd);
  }

  delete(id: string): Observable<any> {
    return this.httpService.delete(`${this._fuelPriceURL}/${id}`);
  }
}
