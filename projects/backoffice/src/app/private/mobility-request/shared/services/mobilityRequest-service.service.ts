import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from '@cad-core/services';
import { Observable } from 'rxjs';
import { MobilityRequest } from '../interfaces/mobilityRequest.interface';
import { Update } from '@ngrx/entity';

@Injectable({
  providedIn: 'root',
})
export class MobilityRequestService {
  _mobilityRequestURL: string;
  constructor(private httpService: HttpClient, private _configService: ConfigService) {
    this._mobilityRequestURL = `${this._configService.appConfig.apiEntitiesUrl}api/v1/MobilityRequest`;
  }

  getCustomersMedium() {
    return this.httpService
      .get<any>('assets/data/customers-medium.json')
      .toPromise()
      .then(res => <MobilityRequest[]>res.data)
      .then(data => {
        return data;
      });
  }

  add(body: MobilityRequest): Observable<MobilityRequest> {
    let fd: any = new FormData();
    fd.append('LicensePlate', body.LicensePlate);
    fd.append('ServiceNumber', body.ServiceNumber);
    fd.append('UserArea', body.UserArea);
    fd.append('CommissionaryStaff', body.CommissionaryStaff);
    fd.append('DateService', body.DateService);
    fd.append('HourService', body.HourService);
    fd.append('CommissionGoal', body.CommissionGoal);
    fd.append('AssignedDriver', body.AssignedDriver);
    fd.append('DepartureTime', body.DepartureTime);
    fd.append('ArrivalTime', body.ArrivalTime);
    fd.append('DepartureKM', body.DepartureKM);
    fd.append('ArrivalKM', body.ArrivalKM);
    fd.append('Entity', body.Entity);
    fd.append('District', body.District);
    fd.append('Observation', body.Observation);
    fd.append('Address', body.Address);
    fd.append('Document', body.Document);
    return this.httpService.post<MobilityRequest>(`${this._mobilityRequestURL}/Create`, fd);
  }

  update(update: Update<MobilityRequest>): Observable<MobilityRequest> {
    let fd: any = new FormData();
    fd.append('Id', update.changes.id);
    fd.append('LicensePlate', update.changes.LicensePlate);
    fd.append('ServiceNumber', update.changes.ServiceNumber);
    fd.append('UserArea', update.changes.UserArea);
    fd.append('CommissionaryStaff', update.changes.CommissionaryStaff);
    fd.append('DateService', update.changes.DateService);
    fd.append('HourService', update.changes.HourService);
    fd.append('CommissionGoal', update.changes.CommissionGoal);
    fd.append('AssignedDriver', update.changes.AssignedDriver);
    fd.append('DepartureTime', update.changes.DepartureTime);
    fd.append('ArrivalTime', update.changes.ArrivalTime);
    fd.append('DepartureKM', update.changes.DepartureKM);
    fd.append('ArrivalKM', update.changes.ArrivalKM);
    fd.append('Entity', update.changes.Entity);
    fd.append('District', update.changes.District);
    fd.append('Observation', update.changes.Observation);
    fd.append('Address', update.changes.Address);
    fd.append('Document', update.changes.Document);

    return this.httpService.put<MobilityRequest>(`${this._mobilityRequestURL}/Update`, fd);
  }

  delete(id: string): Observable<any> {
    return this.httpService.delete(`${this._mobilityRequestURL}/${id}`);
  }
}
