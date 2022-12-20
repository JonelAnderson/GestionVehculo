import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterFuelPriceComponent } from '../register-fuel-price/register-fuel-price.component';
import { FuelPriceService } from '../shared/services/fuel-price-service.service';
import { EditFuelPriceComponent } from '../edit-fuel-price/edit-fuel-price.component';

@Component({
  selector: 'cad-list-fuel-price',
  templateUrl: './list-fuel-price.component.html',
  styleUrls: ['./list-fuel-price.component.scss'],
})
export class ListFuelPriceComponent implements OnInit {
  data: any[] = [];
  columns: any[];
  actions: any[];
  constructor(public dialog: MatDialog, private fuelPriceService: FuelPriceService) {
    this.columns = [
      { field: 'EfectiveDate', header: 'FECHA DE VIGENCIA' },
      { field: 'Contract', header: 'CONTRATO' },
      { field: 'Concept', header: 'CONCEPTO' },
      { field: 'Worth', header: 'VALOR' },
      { field: 'STATUS', header: 'ESTADO DE PRECIO' },
      { field: 'DOCUMENT', header: 'DOCUMENTO' },
    ];
    this.actions = [0, 1, 1];
  }

  fruits: any[] = [{ name: 'Lemon' }, { name: 'Lime' }, { name: 'Apple' }];

  ngOnInit(): void {
    this.fuelPriceService.getCustomersMedium().then(data => (this.data = data));
  }

  openRegister(): void {
    const dialogRef = this.dialog.open(RegisterFuelPriceComponent, { disableClose: true });
    dialogRef.backdropClick();
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  editEvent($event: number) {
    console.log('paso');
    const searchModal = this.dialog.open(EditFuelPriceComponent, {
      data: {
        id: $event,
      },
      disableClose: true,
    });
    searchModal.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
