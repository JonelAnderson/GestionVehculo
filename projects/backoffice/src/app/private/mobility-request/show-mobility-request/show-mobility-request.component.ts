import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditMobilityRequestComponent } from '../edit-mobility-request/edit-mobility-request.component';
import { UnsuscribeMobilityRequestComponent } from '../unsuscribe-mobility-request/unsuscribe-mobility-request.component';

@Component({
  selector: 'cad-show-mobility-request',
  templateUrl: './show-mobility-request.component.html',
  styleUrls: ['./show-mobility-request.component.scss']
})
export class ShowMobilityRequestComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openEdit(){
    const dialogRef = this.dialog.open(EditMobilityRequestComponent, { disableClose: true });
    dialogRef.backdropClick();
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openUnsuscribe(){
    const dialogRef = this.dialog.open(UnsuscribeMobilityRequestComponent, { disableClose: true });
    dialogRef.backdropClick();
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
