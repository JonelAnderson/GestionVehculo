import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators,FormBuilder} from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'cad-show-history-vehicle-inspections',
  templateUrl: './show-history-vehicle-inspections.component.html',
  styleUrls: ['./show-history-vehicle-inspections.component.scss'],
  providers: [DatePipe]
})
export class ShowHistoryVehicleInspectionsComponent implements OnInit {

  historyVehicleInspectionForm: FormGroup;
  currentDay= new Date((new Date()));
  arrayHistoryVehicleInspections: HistoryVehicleInspection[]=ELEMENT_DATA;
  arrState:any[]=[];
  quantityAvailable:number=25/100;
  i:number=0;
  constructor(private _fb: FormBuilder, private datePipe:DatePipe) {
    this.createForm();
    this.verifiState();
   }

  ngOnInit(): void {
  }

  private createForm(): void {
    this.historyVehicleInspectionForm =this._fb.group({
      licencePlate: new FormControl('', [Validators.required, Validators.minLength(6),Validators.maxLength(6),Validators.pattern(/^([A-Za-z,0-9,-]){6}$/)]),
    });
  }

  verifiState(){
    this.arrayHistoryVehicleInspections.forEach(element => {
      // arrTemporal=this.validityVehicleInspectionState(element.expirationDate);
      element.state=this.validityVehicleInspectionState(element.expirationDate);
    });
    console.log("verify");
    
  }

  validityVehicleInspectionState(endDate):boolean{    
    const dateEnd=this.regularizeDate(endDate);
    var response:boolean=true;

    if(dateEnd.getFullYear()<this.currentDay.getFullYear()){
      response=false;
    }
    if(dateEnd.getFullYear()==this.currentDay.getFullYear()){
      if(dateEnd.getMonth()<this.currentDay.getMonth()){
        response=false;
      }else if(dateEnd.getMonth()==this.currentDay.getMonth() && dateEnd.getDate()<this.currentDay.getDate()){
        response=false;
      }
    }
    console.log("vality");
    
    return response;
  }

  regularizeDate(date):Date{
    let myDate = date.replace(/(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3")
    let newDate = this.datePipe.transform(myDate, 'yyyy-MM-dd', 'es-ES');
    let resposeDate=new Date(newDate);
    return resposeDate;
  }

}

export interface HistoryVehicleInspection{
  nCertified:string;
  supplier:string;
  reviewDate:string;
  expirationDate:string;
  state:boolean;
}

const ELEMENT_DATA: HistoryVehicleInspection[] = [
  {nCertified: '839328944-283', supplier: 'CHECK S.A.C', reviewDate: '25-10-2022',expirationDate:'15-10-2022',state:null},
  {nCertified: '839328944-283', supplier: 'CHECK S.A.C', reviewDate: '15-11-2022',expirationDate:'14-12-2022',state:null},
  {nCertified: '839328944-283', supplier: 'CHECK S.A.C', reviewDate: '28-11-2022',expirationDate:'1-12-2023',state:null},
];
