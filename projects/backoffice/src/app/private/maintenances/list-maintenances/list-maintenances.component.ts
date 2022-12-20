import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ShowHistoryVehicleMaintenanceComponent } from '../show-history-vehicle-maintenance/show-history-vehicle-maintenance.component';

@Component({
  selector: 'cad-list-maintenances',
  templateUrl: './list-maintenances.component.html',
  styleUrls: ['./list-maintenances.component.scss'],
})
export class ListMaintenancesComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openHistrial() {
    const dialogRef = this.dialog.open(ShowHistoryVehicleMaintenanceComponent, { disableClose: true });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
