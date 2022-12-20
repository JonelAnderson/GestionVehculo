/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable import/no-cycle */
/* eslint-disable no-return-assign */
/* eslint-disable @angular-eslint/use-lifecycle-interface */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
import { ShowPipComponent } from '../show-pip/show-pip.component';
import { CreatePipComponent } from '../create-pip/create-pip.component';
import { PipService } from '../shared/services/pipservices';
import { DateAdapter } from '@angular/material/core';
import { RecordPersonalInjuryProtectionComponent } from '../record-personal-injury-protection/record-personal-injury-protection.component';

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

@Component({
  selector: 'cad-list-pip',
  templateUrl: './list-pip.component.html',
  styleUrls: ['./list-pip.component.scss'],
})
export class ListPipComponent implements OnInit {
  data: any[] = [];
  columns: any[];
  actions: any[];
  constructor(
    private dateAdapter: DateAdapter<Date>,
    public dialog: MatDialog,
    private _router: Router,
    private pipService: PipService
  ) {
    // TABLA LISTAR SOAT
    this.columns = [
      { field: 'daysUntilExpiration', header: 'DaysUntilExpiration' },
      { field: 'areas', header: 'Areas' },
      { field: 'insuranceCompany', header: 'InsuranceCompany' },
      { field: 'policyNumber', header: 'PolicyNumber' },
      { field: 'licensePlate', header: 'LicensePlate' },
      { field: 'type', header: 'Type' },
      { field: 'state', header: 'State' },
    ];
    this.actions = [1, 0, 0];

    this.dateAdapter.setLocale('en-GB');
  }

  searchEvent($event: any) {
    console.log(`search ${$event}`);
  }

  editEvent($event: any) {
    console.log(`edit ${$event.value}`);
  }

  deleteEvent($event: any) {
    console.log(`delete ${$event.value}`);
  }
  // TABLA

  ngOnInit(): void {
    this.pipService.getPipMedium().then(data => (this.data = data));
  }

  goElement(element: string): void {
    this._router.navigate(['private', 'pip', element]);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ShowPipComponent, { disableClose: true });
    dialogRef.backdropClick();
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openRegister() {
    const dialogRef = this.dialog.open(CreatePipComponent, { disableClose: true });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openHistrial() {
    const dialogRef = this.dialog.open(RecordPersonalInjuryProtectionComponent, { disableClose: true });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  // SELECT MULTIPLE
  stateSoats: any[] = [{ name: 'Vigente' }, { name: 'Por caducar' }, { name: 'Caducado' }];

  // SELECCIONAR AREAS
  areasAseguradora: any[] = [{ name: 'Ministra' }, { name: 'Rimac' }, { name: 'Upe Lima Este' }, { name: 'Pacifico S.A.C' }];

  campaignTwo = new FormGroup({
    start: new FormControl(new Date(year, month, 15)),
    end: new FormControl(new Date(year, month, 19)),
  });
}
// INTERFAZ TABLA LISTAR SOAT
export interface Listpip {
  id?: number;
  daysUntilExpiration?: string;
  areas?: string;
  insuranceCompany?: string;
}
