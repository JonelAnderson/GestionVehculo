import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from '@cad-core/services';
import { Observable } from 'rxjs';
import { Update } from '@ngrx/entity';
import { Pip } from '../interfaces/pipinterfaces';

@Injectable({
  providedIn: 'root',
})
export class PipService {
  _pipURL: string;
  constructor(private httpService: HttpClient, private _configService: ConfigService) {
    this._pipURL = `${this._configService.appConfig.apiEntitiesUrl}api/v1/Pip`;
  }

  getPipMedium() {
    return this.httpService
      .get<any>('assets/data/list-soats.json')
      .toPromise()
      .then(res => <Pip[]>res.data)
      .then(data => {
        return data;
      });
  }

  add(body: Pip): Observable<Pip> {
    let fd: any = new FormData();
    fd.append('LicensePlate', body.LicensePlate);
    fd.append('ServiceNumber', body.Area);
    fd.append('UserArea', body.Responsible);
    fd.append('CommissionaryStaff', body.Type);
    fd.append('DateService', body.Brand);
    fd.append('HourService', body.Model);
    fd.append('CommissionGoal', body.Color);
    fd.append('AssignedDriver', body.Year);
    fd.append('DepartureTime', body.NEngine);
    fd.append('ArrivalTime', body.Serie);
    fd.append('DepartureKM', body.Insurance);
    fd.append('ArrivalKM', body.PolicyNumber);
    fd.append('Entity', body.StartPolicyValidity);
    fd.append('District', body.EndPolicyValidity);
    fd.append('Observation', body.StartCertificateValidity);
    fd.append('Address', body.EndCertificateValidity);
    fd.append('Address', body.IdentificationDocument);
    fd.append('Address', body.Date);
    fd.append('Address', body.Hour);
    fd.append('Address', body.Amount);
    fd.append('Document', body.Document);
    return this.httpService.post<Pip>(`${this._pipURL}/Create`, fd);
  }

  update(update: Update<Pip>): Observable<Pip> {
    let fd: any = new FormData();
    fd.append('Id', update.changes.id);
    fd.append('LicensePlate', update.changes.LicensePlate);
    fd.append('ServiceNumber', update.changes.Area);
    fd.append('UserArea', update.changes.Responsible);
    fd.append('CommissionaryStaff', update.changes.Type);
    fd.append('DateService', update.changes.Brand);
    fd.append('HourService', update.changes.Model);
    fd.append('CommissionGoal', update.changes.Color);
    fd.append('AssignedDriver', update.changes.Year);
    fd.append('DepartureTime', update.changes.NEngine);
    fd.append('ArrivalTime', update.changes.Serie);
    fd.append('DepartureKM', update.changes.Insurance);
    fd.append('ArrivalKM', update.changes.PolicyNumber);
    fd.append('Entity', update.changes.StartPolicyValidity);
    fd.append('District', update.changes.EndPolicyValidity);
    fd.append('Observation', update.changes.StartCertificateValidity);
    fd.append('Address', update.changes.EndCertificateValidity);
    fd.append('Address', update.changes.IdentificationDocument);
    fd.append('Address', update.changes.Date);
    fd.append('Address', update.changes.Hour);
    fd.append('Address', update.changes.Amount);
    fd.append('Document', update.changes.Document);

    return this.httpService.put<Pip>(`${this._pipURL}/Update`, fd);
  }

  delete(id: string): Observable<any> {
    return this.httpService.delete(`${this._pipURL}/${id}`);
  }
}
