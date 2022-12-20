import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from '@cad-core/services';
import { Observable } from 'rxjs';
import { MasterDetail } from '../interfaces/MasterDetail.model';

@Injectable({
  providedIn: 'root'
})
export class MasterDetailService {
  _masterDetailURL:string;
  constructor(private httpService:HttpClient, private _configService: ConfigService) {
    this._masterDetailURL = `${this._configService.appConfig.apiEntitiesUrl}api/v1/MasterDetail`;
   }

   getMasterDetailsById(Id:number):Observable<any>{
    return this.httpService.get(this._masterDetailURL+"/GetMasterDetailsById/"+Id);
  }
  saveDetailMaster(detailMaster:MasterDetail):Observable<any>{
    return this.httpService.post(this._masterDetailURL+"/create", detailMaster);
  }
}
