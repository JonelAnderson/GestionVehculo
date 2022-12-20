import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from '@cad-core/services';
import { Observable } from 'rxjs';
import { MasterDetail } from '../interfaces/MasterDetail.model';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  _masterURL:string;
  constructor(private httpService:HttpClient, private _configService: ConfigService) { 

    this._masterURL = `${this._configService.appConfig.apiEntitiesUrl}api/v1/Master`;
  }

  getAllMasters():Observable<any>{
     return this.httpService.get(this._masterURL+"/GetAllWithDetails");
  }
}
