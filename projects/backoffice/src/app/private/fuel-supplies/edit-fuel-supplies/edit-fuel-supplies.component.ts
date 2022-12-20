/* eslint-disable no-console */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-alert */

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmEditDialogComponent } from 'projects/ui-components/src/lib/confirm-edit-dialog/confirm-edit-dialog.component';

@Component({
  selector: 'cad-edit-fuel-supplies',
  templateUrl: './edit-fuel-supplies.component.html',
  styleUrls: ['./edit-fuel-supplies.component.scss'],
})
export class EditFuelSuppliesComponent implements OnInit {
  editsourcingForm: FormGroup;
  constructor(private fb: FormBuilder, private dialog: MatDialog) {
    this.editsourcingForm = this.fb.group({
      dispatchNote: new FormControl('', [Validators.required]),
      dispatchDate: new FormControl('', [Validators.required]),
      seller: new FormControl('', [Validators.required]),
      driver: new FormControl('', [Validators.required]),
      dispatchTime: new FormControl('', [Validators.required]),
      odometer: new FormControl('', [Validators.required]),
      area: new FormControl('', [Validators.required]),
      contract: new FormControl('', [Validators.required]),
      concept: new FormControl('', [Validators.required]),
    });
  }

  sourcingForm: any[] = [
    { value: 'PACIFICO S.A.C.', viewValue: '1' },
    { value: 'BANCO DE LA NACION', viewValue: '2' },
    { value: 'SOAT', viewValue: '3' },
  ];

  commitEdit(): void {
    const dialogRef = this.dialog.open(ConfirmEditDialogComponent, { disableClose: true });
    dialogRef.backdropClick();
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {}
}
