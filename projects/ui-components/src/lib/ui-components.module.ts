import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PrimengModule } from './primeng.module';
import { SwButtonComponent } from './button/sw-button.component';
import { SwPageHeadComponent } from './page-head/sw-page-head.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { ChipsInputComponent } from './chips-input/chips-input.component';
import { UnsuscribeDialogComponent } from './unsuscribe-dialog/unsuscribe-dialog.component';

import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MultiCheckBoxFilterComponent } from './multi-check-box-filter/multi-check-box-filter.component';
import { TableFilterComponent } from './table-filter/table-filter.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { RegisterMasterComponent } from './register-master/register-master.component';
import { RegisterMasterDetailComponent } from './register-master-detail/register-master-detail.component';
import { ConfirmEditDialogComponent } from './confirm-edit-dialog/confirm-edit-dialog.component';
import { TableFilterFileComponent } from './table-filter-file/table-filter-file.component';
import { ConsultVehicleComponent } from './consult-vehicle/consult-vehicle.component';

@NgModule({
  declarations: [
    SwButtonComponent,
    SwPageHeadComponent,
    ConfirmationDialogComponent,
    ChipsInputComponent,
    MultiCheckBoxFilterComponent,
    TableFilterComponent,
    UnsuscribeDialogComponent,
    RegisterMasterComponent,
    RegisterMasterDetailComponent,
    ConfirmEditDialogComponent,
    TableFilterFileComponent,
    ConsultVehicleComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PrimengModule,
    MatChipsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDialogModule,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PrimengModule,
    SwButtonComponent,
    SwPageHeadComponent,
    ConfirmationDialogComponent,
    ChipsInputComponent,
    MultiCheckBoxFilterComponent,
    TableFilterComponent,
    UnsuscribeDialogComponent,
    RegisterMasterDetailComponent,
    TableFilterFileComponent,
    ConsultVehicleComponent,
  ],
})
export class UiComponentsModule {}
