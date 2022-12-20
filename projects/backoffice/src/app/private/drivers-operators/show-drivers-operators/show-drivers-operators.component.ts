/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditDriversOperatorsComponent } from '../edit-drivers-operators/edit-drivers-operators.component';
import { RevalidationRegistrationComponent } from '../revalidation-registration/revalidation-registration.component';

@Component({
  selector: 'cad-show-drivers-operators',
  templateUrl: './show-drivers-operators.component.html',
  styleUrls: ['./show-drivers-operators.component.scss'],
})
export class ShowDriversOperatorsComponent implements OnInit {
  colums: any[];

  constructor(
    public dialog: MatDialog,
    dialogRef: MatDialogRef<ShowDriversOperatorsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.colums = [
      { field: 'licenseNumber', header: 'Número - Licencia' },
      { field: 'class', header: 'Clase/Cat.' },
      { field: 'category', header: 'Expedición' },
      { field: 'expirationDate', header: 'Vencimiento' },
      { field: 'License', header: 'Licencia' },
    ];
  }

  openEdit(): void {
    const dialogRef = this.dialog.open(EditDriversOperatorsComponent, { disableClose: true });
    dialogRef.backdropClick();
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  revalidationRegistration(): void {
    const dialogRef = this.dialog.open(RevalidationRegistrationComponent, { disableClose: true });
    dialogRef.backdropClick();
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
