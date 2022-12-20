import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditFuelSuppliesComponent } from '../edit-fuel-supplies/edit-fuel-supplies.component';
import { UnsuscribeFuelSuppliesComponent } from '../unsuscribe-fuel-supplies/unsuscribe-fuel-supplies.component';

@Component({
  selector: 'cad-show-fuel-supplies',
  templateUrl: './show-fuel-supplies.component.html',
  styleUrls: ['./show-fuel-supplies.component.scss']
})
export class ShowFuelSuppliesComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  fuelSuplies: FuelSuplies[]=ELEMENT_DATA;
  total=this.fuelSuplies.reduce((acumulador, actual) => acumulador + actual.importe, 0);

  ngOnInit(): void {
    
  }

  openEdit(): void {
    const dialogRef = this.dialog.open(EditFuelSuppliesComponent, { disableClose: true });
    dialogRef.backdropClick();
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openUnsuscribe(): void {
    const dialogRef = this.dialog.open(UnsuscribeFuelSuppliesComponent, { disableClose: true });
    dialogRef.backdropClick();
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

export interface FuelSuplies{
  item:number;
  concepto:string;
  cantidad:number;
  pu:number;
  importe:number;
}

const ELEMENT_DATA: FuelSuplies[] = [
  {item: 1, concepto: '10001 | GASOHOL 97', cantidad: 7.161, pu: 27.31,importe:195.47},
  {item: 2, concepto: '20001 | ACEITE', cantidad: 1, pu: 25.72,importe:25.72},
];