import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from '@cad-core/services';
import { QueryParams } from '@ngrx/data';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetAllVehicles } from '../interfaces/get-all-vehicles.interface';
import { GetVehicleByIdQuery } from '../interfaces/get-vehicle-by-id-query.interface';
import { Vehicle } from '../interfaces/vechicle.interface';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  _vehicleURL:string;
  constructor(private httpService:HttpClient, private _configService: ConfigService) {
    this._vehicleURL = `${this._configService.appConfig.apiEntitiesUrl}api/v1/Vehicle`;

   }
  add(vehicle: Vehicle): Observable<Vehicle> {
    const createVehicleCommand={
      vehicle: vehicle
    };
    return this.httpService.post<Vehicle>(`${this._vehicleURL}/Create`, createVehicleCommand);
  }

  getAll(queryParams: string | QueryParams):Observable<GetAllVehicles[]>{
    return this.httpService.get<any>(this._vehicleURL, { params: queryParams as any }).pipe(map(response => response.items));
  }
  getAllSettings():Observable<any>{
    return this.httpService.get<any>(this._vehicleURL+"/GetAllSettings");
  }

  getVehicleById(id:number):Observable<any>{
    return this.httpService.get<GetVehicleByIdQuery>(this._vehicleURL+"/"+id);
  }
  updateVehicle(vehicle:Vehicle):Observable<any>{
    const updateVehicleCommand={
      updateVehicleCommand: vehicle
    };
    return this.httpService.put(this._vehicleURL+'/Update', updateVehicleCommand);
  }
  
}
