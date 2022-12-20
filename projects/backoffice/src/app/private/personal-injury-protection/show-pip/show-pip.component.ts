import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { EditPipComponent } from '../edit-pip/edit-pip.component';
import { UnsuscribePipComponent } from '../unsuscribe-pip/unsuscribe-pip.component';


@Component({
  selector: 'cad-show-pip',
  templateUrl: './show-pip.component.html',
  styleUrls: ['./show-pip.component.scss']
})
export class ShowPipComponent implements OnInit {

  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<ShowPipComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  ngOnInit(): void {
  }

  openEdit(): void {
    const dialogRef = this.dialog.open(EditPipComponent, { disableClose: true });
    dialogRef.backdropClick();
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openUnsuscribe(): void {
    const dialogRef = this.dialog.open(UnsuscribePipComponent, { disableClose: true });
    dialogRef.backdropClick();
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
