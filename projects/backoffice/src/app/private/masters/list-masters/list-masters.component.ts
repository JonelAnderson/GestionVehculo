import { Component, OnInit } from '@angular/core';
import { MasterService } from '../shared/services/master.service';

@Component({
  selector: 'cad-list-masters',
  templateUrl: './list-masters.component.html',
  styleUrls: ['./list-masters.component.scss']
})
export class ListMastersComponent implements OnInit {
  constructor(private masterService:MasterService) {
    this.masterService.getAllMasters().subscribe(res=>{
      console.log(res);
    }, error=>{
      console.log(error);
    })
   }

  ngOnInit(): void {
  }

}
