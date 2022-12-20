/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmEditDialogComponent } from 'projects/ui-components/src/lib/confirm-edit-dialog/confirm-edit-dialog.component';

@Component({
  selector: 'cad-edit-fuel-supply-contracts',
  templateUrl: './edit-fuel-supply-contracts.component.html',
  styleUrls: ['./edit-fuel-supply-contracts.component.scss'],
})
export class EditFuelSupplyContractsComponent implements OnInit {
  contractForm: FormGroup;
  constructor(public dialog: MatDialog, private fb: FormBuilder) {
    this.contractForm = this.fb.group({
      contractNumber: new FormControl('', [Validators.required]),
      startDate: new FormControl('', [Validators.required]),
      finalDate: new FormControl('', [Validators.required]),
      ruc: new FormControl('', [Validators.required]),
      direction: new FormControl('', [Validators.required]),
      mail: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}
  saveEditContract() {}

  confirmationSave(): void {
    const dialogRef = this.dialog.open(ConfirmEditDialogComponent, { disableClose: true });
    dialogRef.backdropClick();
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
