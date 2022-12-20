import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UnsuscribeFuelSupplyContractsComponent } from '../unsuscribe-fuel-supply-contracts/unsuscribe-fuel-supply-contracts.component';
import { EditFuelSupplyContractsComponent } from '../edit-fuel-supply-contracts/edit-fuel-supply-contracts.component';

@Component({
  selector: 'cad-show-fuel-supply-contracts',
  templateUrl: './show-fuel-supply-contracts.component.html',
  styleUrls: ['./show-fuel-supply-contracts.component.scss'],
})
export class ShowFuelSupplyContractsComponent implements OnInit {
  // Variables
  fuelSupliesContract: FuelSupliesContract[] = ELEMENT_DATA;
  dateEnd = new Date('12-15-2021');
  // Variables que establecen el color de la vigencia (Parametrizar)
  ColorSuccessState: number = 7;
  ColorYelowState: number = 8;
  ColorRedState: number = 0;
  // Variables para pintar el estado de vigencia
  currentDay = new Date(new Date());
  deferenceDates: number;
  i: number = 0;

  // Variables para Pintar Icono Dolar
  totalAmount: number = 6311.985; // Monto total
  percentage: number = 30 / 100; // porcentaje
  percentageOfTotalAmount; // Pocentaje del monto total
  valueTotalContract: number = 0;

  // Variable para pintar la tabla segun la cantidad
  quantityAvailable: number = 25 / 100;

  constructor(public dialog: MatDialog) {
    this.validityContractState();
    this.valityBalanceState();
  }

  ngOnInit(): void {}

  validityContractState() {
    this.deferenceDates = this.dateEnd.getDate() - this.currentDay.getDate();

    if (this.dateEnd.getFullYear() < this.currentDay.getFullYear()) {
      this.deferenceDates *= -1;
    }
    if (this.dateEnd.getFullYear() == this.currentDay.getFullYear()) {
      if (this.dateEnd.getMonth() < this.currentDay.getMonth()) {
        this.deferenceDates *= -1;
      } else if (this.dateEnd.getMonth() == this.currentDay.getMonth() && this.dateEnd.getDate() < this.currentDay.getDate()) {
        this.deferenceDates *= -1;
      }
    }
    this.i += 1;
    console.log(this.i);
  }

  valityBalanceState() {
    this.percentageOfTotalAmount = this.totalAmount * this.percentage; // % del monto total
    this.fuelSupliesContract.forEach(item => {
      this.valueTotalContract += item.cantidadDisponible * item.pu;
    });
  }

  openEdit(): void {
    const dialogRef = this.dialog.open(EditFuelSupplyContractsComponent, { disableClose: true });
    dialogRef.backdropClick();
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openUnsuscribe(): void {
    const dialogRef = this.dialog.open(UnsuscribeFuelSupplyContractsComponent, { disableClose: true });
    dialogRef.backdropClick();
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

export interface FuelSupliesContract {
  concepto: string;
  area: string;
  cantidadContratada: number;
  cantidadConsumida: number;
  cantidadDisponible: number;
  pu: number;
}

const ELEMENT_DATA: FuelSupliesContract[] = [
  { concepto: 'GASOHOL 97', area: 'OGA', cantidadContratada: 5000, cantidadConsumida: 1050, cantidadDisponible: 950, pu: 2.2 },
  { concepto: 'GASOHOL 97', area: 'DIMAP', cantidadContratada: 5000, cantidadConsumida: 1400, cantidadDisponible: 3600, pu: 1.5 },
];
