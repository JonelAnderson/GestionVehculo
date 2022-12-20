import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditVehicleComponent } from '../edit-vehicle/edit-vehicle.component';
import { GetVehicleByIdQuery } from '../shared/interfaces/get-vehicle-by-id-query.interface';
import { VehicleService } from '../shared/services/vehicle-service.service';
import { UnsuscribeVehicleComponent } from '../unsuscribe-vehicle/unsuscribe-vehicle.component';

@Component({
  selector: 'cad-show-vehicle',
  templateUrl: './show-vehicle.component.html',
  styleUrls: ['./show-vehicle.component.scss']
})
export class ShowVehicleComponent implements OnInit {
  idVehicle:number;
  pruebaEstadoSoat="Caducado";
  pruebaEstadoRT="Vigente";
  vehicle:GetVehicleByIdQuery;
  maintenanceDates=[
    {Type:"A", Date:"21/05/2023"},
    {Type:"B", Date:"21/07/2023"},
    {Type:"C", Date:"21/08/2023"}
  ];
  constructor(@Inject(MAT_DIALOG_DATA) public data:any, public dialog: MatDialog, private vehicleService:VehicleService) { 
  }

  ngOnInit(): void {
    this.idVehicle= this.data.Id;
    this.vehicleService.getVehicleById(this.idVehicle).subscribe(res=>{
      this.vehicle=res.data;
    });
  }
  editVehicle(){
    const editVehicleModal = this.dialog.open(EditVehicleComponent,{disableClose:true, data:{
     vehicle: this.vehicle
    }});
    editVehicleModal.backdropClick();
    editVehicleModal.afterClosed().subscribe(result => {
      this.vehicleService.getVehicleById(this.idVehicle).subscribe(res=>{
        this.vehicle=res.data;
      });
    });
  }

  unsuscribeVehicle(){
    const unsuscribeVehicleModal = this.dialog.open(UnsuscribeVehicleComponent,{disableClose:true, data:{
      Id:this.idVehicle
    }});
    unsuscribeVehicleModal.backdropClick();
    unsuscribeVehicleModal.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
