import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterMobilityRequestComponent } from '../register-mobility-request/register-mobility-request.component';
import { MobilityRequestService } from '../shared/services/mobility-request-service.service';
import { ShowMobilityRequestComponent } from '../show-mobility-request/show-mobility-request.component';

@Component({
  selector: 'cad-list-mobility-request',
  templateUrl: './list-mobility-request.component.html',
  styleUrls: ['./list-mobility-request.component.scss'],
})
export class ListMobilityRequestComponent implements OnInit {
  
  //table
  data:any[]=[];
  columns:any[];
  actions:any[];

  constructor(public dialog: MatDialog,private movilityRequestService:MobilityRequestService) {
    this.columns = [ 
      { field: 'NRequest', header: 'N° DE SOLICITUD' },
      { field: 'UserArea', header: 'ÁREA USUARIA' },
      { field: 'Vehicle', header: 'VEHÍCULO'},
      { field: 'Driver', header: 'CONDUCTOR'},
      { field: 'commissionaryStaff', header: 'PERSONAL COMISIONADO'}
    ];
    this.actions= [1,0,0];
  }

  ngOnInit(): void {
    // this.movilityRequestService.getAll().then(data => this.data = data);
    this.data=ELEMENT_DATA;
  }
  openRegister(): void {
    const dialogRef = this.dialog.open(RegisterMobilityRequestComponent, { disableClose: true });
    dialogRef.backdropClick();
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openShow($event:number): void {
    const searchModal = this.dialog.open(ShowMobilityRequestComponent,{disableClose:true,data:{
      Id:$event
    }});
    searchModal.backdropClick();
    searchModal.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  fruits: any[] = [
    {name: 'Lemon'},
    {name: 'Lime'},
    {name: 'Apple'},
  ];
}

export interface mobility{
  NRequest:string;
  UserArea:string;
  Vehicle:string;
  Driver:string;
  commissionaryStaff:string;
}

const ELEMENT_DATA: mobility[] = [
  {NRequest: '0010-2022', UserArea: 'MINISTRA', Vehicle: 'AIU-056',Driver:'CURI RIOS FERNANDO',commissionaryStaff:'LIDIA ENCISO'}
];

 