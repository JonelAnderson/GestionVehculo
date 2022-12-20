import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MasterDetail } from '../shared/interfaces/MasterDetail.model';
import { MasterDetailService } from '../shared/services/master-detail.service';


@Component({
  selector: 'cad-register-detail-master',
  templateUrl: './register-detail-master.component.html',
  styleUrls: ['./register-detail-master.component.scss']
})
export class RegisterDetailMasterComponent implements OnInit {
  idMaster:number;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private masterDetailService:MasterDetailService
  ,private registerBrandModal: MatDialogRef<RegisterDetailMasterComponent>) { }

  ngOnInit(): void {
    this.idMaster=this.data.MasterId;
  }
  registerDetailMaster($event:MasterDetail){
    const masterDetail:MasterDetail={
      GenericId:$event.GenericId,
      Code:$event.Code,
      Name: $event.Name
    };
    this.masterDetailService.saveDetailMaster(masterDetail).subscribe(res=>{
      this.registerBrandModal.close();
    }, error=>{
      console.log(error);
    });
  }
  
}
