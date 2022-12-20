import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterFuelSupplyContractsComponent } from '../register-fuel-supply-contracts/register-fuel-supply-contracts.component';
import { ShowFuelSupplyContractsComponent } from '../show-fuel-supply-contracts/show-fuel-supply-contracts.component';
import { FuelSupplyContractService } from '../shared/services/fuel-supply-contract-service.service';
@Component({
  selector: 'cad-list-fuel-supply-contracts',
  templateUrl: './list-fuel-supply-contracts.component.html',
  styleUrls: ['./list-fuel-supply-contracts.component.scss'],
})
export class ListFuelSupplyContractsComponent implements OnInit {
  data: any[] = [];
  columns: any[];
  actions: any[];
  constructor(public dialog: MatDialog, private fuelSupplyContractService: FuelSupplyContractService) {
    this.columns = [
      { field: 'ContractNumber', header: 'Contratistas' },
      { field: 'BusinessName', header: 'Concepto' },
      { field: 'FromContractDate', header: 'Inicio' },
      { field: 'UntilContractDate', header: 'vencimiento' },
      { field: 'TotalQuantity', header: 'Cantidad Total' },
      { field: 'QuantityAvailable', header: 'Cantidad Disponible' },
      { field: 'StatusContract', header: 'Estado-Contrato' },
      { field: 'StatusRegistration', header: 'Estado-Registro' },
    ];
    this.actions = [1, 0, 0];
  }

  fruits: any[] = [{ name: 'Lemon' }, { name: 'Lime' }, { name: 'Apple' }];

  contractState: any[] = [{ name: 'Vigente' }, { name: 'Por caducar' }, { name: 'Caducado' }];

  registerState: any[] = [{ name: 'Activo' }, { name: 'De Baja' }];

  ngOnInit(): void {
    this.fuelSupplyContractService.getCustomersMedium().then(data => (this.data = data));
  }

  openRegister(): void {
    const dialogRef = this.dialog.open(RegisterFuelSupplyContractsComponent, { disableClose: true });
    dialogRef.backdropClick();
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openShow(): void {
    const dialogRef = this.dialog.open(ShowFuelSupplyContractsComponent, { disableClose: true });
    dialogRef.backdropClick();
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  searchEvent($event: number) {
    const searchModal = this.dialog.open(ShowFuelSupplyContractsComponent, {
      disableClose: true,
      data: {
        Id: $event,
      },
    });
    searchModal.backdropClick();
    searchModal.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
