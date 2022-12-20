/* eslint-disable no-return-assign */
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ShowDriversOperatorsComponent } from '../show-drivers-operators/show-drivers-operators.component';
import { RegisterDriversOperatorsComponent } from '../register-drivers-operators/register-drivers-operators.component';
import { DataDriverOperators } from '../shared/services/drivers-operators.services';

@Component({
  selector: 'cad-list-drivers-operators',
  templateUrl: './list-drivers-operators.component.html',
  styleUrls: ['./list-drivers-operators.component.scss'],
})
export class ListDriversOperatorsComponent implements OnInit {
  columns: any[];
  actions: any[];
  data: any[];
  constructor(public dialog: MatDialog, private dataDriverOperators: DataDriverOperators) {
    this.columns = [
      { field: 'dni', header: 'DNI' },
      { field: 'driver', header: 'Driver' },
      { field: 'phone', header: 'Phone' },
      { field: 'gmail', header: 'Gmail' },
      { field: 'license', header: 'License' },
      { field: 'expedition', header: 'Expedition' },
      { field: 'expiration', header: 'Expiration' },
      { field: 'classCategory', header: 'classCategory' },
      { field: 'registrationStatus', header: 'registrationStatus' },
    ];
    this.actions = [1, 0, 0];
  }

  ngOnInit(): void {
    this.dataDriverOperators.getCustomersMedium().then(data => (this.data = data));
  }

  openRegister(): void {
    const dialogRef = this.dialog.open(RegisterDriversOperatorsComponent, { disableClose: true });
    dialogRef.backdropClick();
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openShow(): void {
    const dialogRef = this.dialog.open(ShowDriversOperatorsComponent, { disableClose: true });
    dialogRef.backdropClick();
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  classCategory: any[] = [{ name: 'Allb' }, { name: 'Allc' }, { name: 'Allc' }];

  searchEvent($event: any) {
    console.log(`search ${$event}`);
  }

  editEvent($event: any) {
    console.log(`edit ${$event.value}`);
  }

  deleteEvent($event: any) {
    console.log(`delete ${$event.value}`);
  }
}
