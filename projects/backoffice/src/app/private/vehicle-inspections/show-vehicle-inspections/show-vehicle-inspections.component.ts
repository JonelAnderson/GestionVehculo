import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EditVehicleInspectionsComponent } from '../edit-vehicle-inspections/edit-vehicle-inspections.component';
import { UnsuscribeVehicleInspectionsComponent } from '../unsuscribe-vehicle-inspections/unsuscribe-vehicle-inspections.component';
import { VehicleInspectionsService } from '../shared/services/vehicle-inspections-service.service';
import { VehicleInspections } from '../shared/interfaces/vehicle-inspections.interface';
@Component({
  selector: 'cad-show-vehicle-inspections',
  templateUrl: './show-vehicle-inspections.component.html',
  styleUrls: ['./show-vehicle-inspections.component.scss'],
})
export class ShowVehicleInspectionsComponent implements OnInit {
  item: VehicleInspections;
  constructor(
    public dialog: MatDialog,
    private vehicleInspectionsService: VehicleInspectionsService,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  ngOnInit(): void {
    this.vehicleInspectionsService.getCustomersMedium().then(data => {
      data.map(vechicleInspection => {
        if (this.data.id === vechicleInspection.id) {
          this.item = vechicleInspection;
        }
      });
    });
  }

  openUnsuscribe() {
    const dialogRef = this.dialog.open(UnsuscribeVehicleInspectionsComponent, { disableClose: true });
    dialogRef.backdropClick();
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openEdit() {
    const dialogRef = this.dialog.open(EditVehicleInspectionsComponent, { disableClose: true });
    dialogRef.backdropClick();
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
