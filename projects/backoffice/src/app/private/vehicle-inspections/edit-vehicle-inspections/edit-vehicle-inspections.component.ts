import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators,FormBuilder} from '@angular/forms';
import { DateAdapter} from '@angular/material/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'cad-edit-vehicle-inspections',
  templateUrl: './edit-vehicle-inspections.component.html',
  styleUrls: ['./edit-vehicle-inspections.component.scss'],
  providers: [DatePipe]
})
export class EditVehicleInspectionsComponent implements OnInit {

  //envioroment
  year:number;
  month:number;
  day:number;
  date:any;

  vehicleForm: FormGroup;
  files: any = [];

  minDate = new Date((new Date()).getFullYear()-10, 0, 1);
  maxDate = new Date((new Date()).getFullYear()+2,0,1);
  
  
  constructor(private dateAdapter: DateAdapter<Date>,private _fb: FormBuilder,private datePipe:DatePipe) { 
    this.dateAdapter.setLocale('en-GB');
  }

  ngOnInit(): void { 
    this.CreateForm();
  }

  private CreateForm(): void {
    this.vehicleForm =this._fb.group({
      licencePlate: new FormControl('', [Validators.required, Validators.minLength(6),Validators.maxLength(6),Validators.pattern(/^([A-Za-z,0-9,-]){6}$/)]),
      numberCertified: new FormControl('', [Validators.required]),
      enterprise: new FormControl('', [Validators.required]),
      reviewDate: new FormControl('', [Validators.required]),
      expirationDate: new FormControl('', [Validators.required]),
    });
  }

  editVehicle(){
    
  }

  btn_upload() {
    const fileUpload = document.getElementById('fileUpload') as HTMLInputElement;
    fileUpload.click()

  }
  fileUploaded(event: any) {
    const fileCapture = event.target.files[0];
    if (fileCapture) {
      this.files.push(fileCapture);
      console.log(this.files);
    }
  }

  StartDatePoliza(){
    const startDate=this.datePipe.transform(this.vehicleForm.value.reviewDate, 'MM-dd-yyyy');
    this.date=new Date(startDate);
    this.year=this.date.getFullYear()+1;
    this.date.setFullYear(this.year);
    this.vehicleForm.patchValue({expirationDate:this.date});
  }

  EndDatePoliza(){
    if(this.vehicleForm.value.expirationDate<=this.vehicleForm.value.expirationDate){
      console.log(this.vehicleForm);
      this.vehicleForm.controls.expirationDate.setValue(null);
    }
  }

  btnSave(){
    console.log(this.vehicleForm);
  }


}
