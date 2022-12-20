import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ShowVehicleInspectionsComponent } from '../show-vehicle-inspections/show-vehicle-inspections.component';
import { RegisterVehicleInspectionsComponent } from '../register-vehicle-inspections/register-vehicle-inspections.component';
import { VehicleInspectionsService } from '../shared/services/vehicle-inspections-service.service';
import { ShowHistoryVehicleInspectionsComponent } from '../show-history-vehicle-inspections/show-history-vehicle-inspections.component';
@Component({
  selector: 'cad-list-vehicle-inspections',
  templateUrl: './list-vehicle-inspections.component.html',
  styleUrls: ['./list-vehicle-inspections.component.scss'],
})
export class ListVehicleInspectionsComponent implements OnInit {
  data: any[] = [];
  columns: any[];
  actions: any[];
  state: any[] = [{ name: 'Vigente' }, { name: 'Por caducar' }, { name: 'Caducado' }];
  areas: any[] = [{ name: 'MINISTRA' }, { name: 'LIMA ESTE' }, { name: 'LIMA NORTE' }];
  constructor(public dialog: MatDialog, private vehicleInspectionsService: VehicleInspectionsService) {
    this.columns = [
      { field: 'daysToBeat', header: 'DÍAS PARA VENCER' },
      { field: 'Area', header: 'ÁREA' },
      { field: 'Enterprise', header: 'EMPRESA' },
      { field: 'CertificateNumber', header: 'Nº CERTIFICADO' },
      { field: 'LicensePlate', header: 'PLACA' },
      { field: 'Type', header: 'TIPO' },
      { field: 'status', header: 'ESTADO' },
    ];
    this.actions = [1, 0, 0];
  }

  ngOnInit(): void {
    this.vehicleInspectionsService.getCustomersMedium().then(data => (this.data = data));
  }
  searchEvent($event: number) {
    const searchModal = this.dialog.open(ShowVehicleInspectionsComponent, {
      data: {
        id: $event,
      },
      disableClose: true,
    });
    searchModal.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openRegister(): void {
    const dialogRef = this.dialog.open(RegisterVehicleInspectionsComponent, { disableClose: true });
    dialogRef.backdropClick();
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openShow(): void {
    const dialogRef = this.dialog.open(ShowVehicleInspectionsComponent, { disableClose: true });
    dialogRef.backdropClick();
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openShowHistory(): void {
    const dialogRef = this.dialog.open(ShowHistoryVehicleInspectionsComponent, { disableClose: true });
    dialogRef.backdropClick();
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
