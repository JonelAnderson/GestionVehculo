import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { RegisterVehicleComponent } from '../register-vehicle/register-vehicle.component';
import { VehicleService } from '../shared/services/vehicle-service.service';
import { ShowVehicleComponent } from '../show-vehicle/show-vehicle.component';
@Component({
  selector: 'cad-list-vehicle',
  templateUrl: './list-vehicle.component.html',
  styleUrls: ['./list-vehicle.component.scss']
})
export class ListVehicleComponent implements OnInit {
  private PAGE_SIZE_DEFAULT: string = '900';
  private PAGE_NUMBER_DEFAULT: string = '1';

  viewTitle:string;
  //table
  data:any[]=[];
  columns:any[];
  actions:any[];
  constructor(public dialog: MatDialog, private vehicleService:VehicleService) {
    this.viewTitle="Vehicle Box";
    this.columns = [ 
      { field: 'area', header: 'AREA' },
      { field: 'type', header: 'TIPO'},
      { field: 'licensePlate', header: 'PLACA'},
      { field: 'brand', header: 'MARCA' },
      { field: 'model', header: 'MODELO'},
      { field: 'year', header: 'AÑO'},
      { field: 'pipPolicy', header: 'SOAT'},
      { field: 'registrationState', header: 'ESTADO-REGISTRO'},
      { field: 'state', header: 'ESTADO-VEHICULO'},
    ];
    this.actions= [1,0,0];
  }

  fruits: any[] = [
    {name: 'Lemon'},
    {name: 'Lime'},
    {name: 'Apple'},
  ];

  ngOnInit(): void {
    this.getAllVehicles();
  }


  openRegister(){
    const dialogRef = this.dialog.open(RegisterVehicleComponent,{disableClose:true});
    dialogRef.backdropClick();
    dialogRef.afterClosed().subscribe(result => {
      this.getAllVehicles();
    });
  }

  searchEvent($event:number){
    const searchModal = this.dialog.open(ShowVehicleComponent,{disableClose:true,data:{
      Id:$event
    }});
    searchModal.backdropClick();
    searchModal.afterClosed().subscribe(result => {
      this.getAllVehicles();
    });
  }

  getAllVehicles(){
    let queryParams = { pageSize: this.PAGE_SIZE_DEFAULT, pageNumber: this.PAGE_NUMBER_DEFAULT };
    this.vehicleService.getAll(queryParams).subscribe(res=>{
      this.data=res;
    });
  }
}
