import { NgModule } from '@angular/core';
import { SharedModule } from '@cad-shared/shared.module';

import { CommonModule } from '@angular/common';
import { MaintenancesRoutingModule } from './maintenances-routing.module';
import { ShowHistoryVehicleMaintenanceComponent } from './show-history-vehicle-maintenance/show-history-vehicle-maintenance.component';
import { ListMaintenancesComponent } from './list-maintenances/list-maintenances.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [ShowHistoryVehicleMaintenanceComponent, ListMaintenancesComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    FormsModule,
    MatSelectModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
  ],
  exports: [MaintenancesRoutingModule],
})
export class MaintenancesModule {}
