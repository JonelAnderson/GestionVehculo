import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ShowFuelSuppliesComponent } from '../show-fuel-supplies/show-fuel-supplies.component';
import { RegisterFuelSuppliesComponent } from '../register-fuel-supplies/register-fuel-supplies.component';
import { FuelSuppliesService } from '../shared/services/fuel-supplies-service.service';
import { ShowDetailFuelConsumptionControlComponent } from '../show-detail-fuel-consumption-control/show-detail-fuel-consumption-control.component';
@Component({
  selector: 'cad-list-fuel-supplies',
  templateUrl: './list-fuel-supplies.component.html',
  styleUrls: ['./list-fuel-supplies.component.scss'],
})
export class ListFuelSuppliesComponent implements OnInit {
  data: any[] = [];
  columns: any[];
  actions: any[];
  constructor(public dialog: MatDialog, private fuelSuppliesService: FuelSuppliesService) {
    this.columns = [
      { field: 'date', header: 'FECHA' },
      { field: 'nNote', header: 'DESPACHO' },
      { field: 'licensePlate', header: 'PLACA' },
      { field: 'vehicleType', header: 'TIPO' },
      { field: 'area', header: 'AREA' },
      { field: 'drive', header: 'CONDUCTOR' },
      { field: 'fuel', header: 'COMBUSTIBLE' },
      { field: 'contract', header: 'CONTRATO' },
      { field: 'total', header: 'TOTAL/CONSUMO' },
      { field: 'status', header: 'ESTADO' },
    ];
    this.actions = [1, 0, 0];
  }

  fruits: any[] = [{ name: 'Lemon' }, { name: 'Lime' }, { name: 'Apple' }];
  searchEvent($event: number) {
    const searchModal = this.dialog.open(ShowFuelSuppliesComponent, {
      data: {
        id: $event,
      },
      disableClose: true,
    });
    searchModal.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
    this.fuelSuppliesService.getCustomersMedium().then(data => (this.data = data));
  }

  openRegister(): void {
    const dialogRef = this.dialog.open(RegisterFuelSuppliesComponent, { disableClose: true });
    dialogRef.backdropClick();
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openShow(): void {
    const dialogRef = this.dialog.open(ShowFuelSuppliesComponent, { disableClose: true });
    dialogRef.backdropClick();
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDetail(): void {
    const dialogRef = this.dialog.open(ShowDetailFuelConsumptionControlComponent, { disableClose: true });
    dialogRef.backdropClick();
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
