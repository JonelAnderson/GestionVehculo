import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators,FormBuilder} from '@angular/forms';
import { DateAdapter} from '@angular/material/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'cad-edit-pip',
  templateUrl: './edit-pip.component.html',
  styleUrls: ['./edit-pip.component.scss'],
  providers: [DatePipe]
})
export class EditPipComponent implements OnInit {
  //envioroment
  year:number;
  month:number;
  day:number;
  date:any;

  PIPForm: FormGroup;
  files: any = [];

  //initialize envioroment
  minDate = new Date((new Date()).getFullYear()-10, 0, 1);
  maxDate = new Date((new Date()).getFullYear()+2,0,1);
  
  
  constructor(private dateAdapter: DateAdapter<Date>,private _fb: FormBuilder, private datePipe:DatePipe ) { 
    this.dateAdapter.setLocale('en-GB');
  }

  ngOnInit(): void { 
    this.createForm();
  }

  private createForm(): void {
    this.PIPForm =this._fb.group({
      licencePlate: new FormControl('', [Validators.required, Validators.minLength(6),Validators.maxLength(6),Validators.pattern(/^([A-Za-z,0-9,-]){6}$/)]),
      /* url: new FormControl('', [Validators.required, Validators.maxLength(100), Validators.pattern(/\b(https?|ftp|file):\/\/[\-A-Za-z0-9+&@#\/%?=~_|!:,.;]*[\-A-Za-z0-9+&@#\/%=~_|]/)]), */
      nameInsureCarrier: new FormControl('', [Validators.required]),
      NPoliza: new FormControl('', [Validators.required]),
      startDatePoliza: new FormControl('', [Validators.required]),
      endDatePoliza: new FormControl('', [Validators.required, this.ValidationEndDate]),
      // endDatePoliza: [EditPipComponent.Validation],

      startDateSOAT: new FormControl('', [Validators.required]),
      endDateSOAT: new FormControl('', [Validators.required, this.ValidationEndDate]),
      dateInsure: new FormControl('', [Validators.required]),
      issuanceTime: new FormControl('', [Validators.required]),
      totalPrima: new FormControl('', [Validators.required,Validators.pattern("^\d$")]),
    });
  }

  StartDatePoliza(){
    const startDate=this.datePipe.transform(this.PIPForm.value.startDatePoliza, 'MM-dd-yyyy');
    this.date=new Date(startDate);
    this.year=this.date.getFullYear()+1;
    this.date.setFullYear(this.year);
    this.PIPForm.patchValue({endDatePoliza:this.date});
  }

  EndDatePoliza(){
    console.log(this.PIPForm.value.endDatePoliza);
    if(this.PIPForm.value.endDatePoliza<=this.PIPForm.value.startDatePoliza){
      console.log(this.PIPForm);
      console.log(typeof(this.PIPForm.value.endDatePoliza));
      this.PIPForm.controls.endDatePoliza.setValue(null);
      // this.PIPForm.patchValue({endDatePoliza:null});
    }
  }

  StartDateSOAT(){
    const startDate=this.datePipe.transform(this.PIPForm.value.startDateSOAT, 'MM-dd-yyyy');
    this.date=new Date(startDate);
    this.year=this.date.getFullYear()+1;
    this.date.setFullYear(this.year);
    this.PIPForm.patchValue({endDateSOAT:this.date});
  }

  EndDateSOAT(){ 
    if(this.PIPForm.value.endDateSOAT<=this.PIPForm.value.startDateSOAT){
      console.log(this.PIPForm);
      this.PIPForm.controls.endDateSOAT.setValue(null);
      // this.PIPForm.patchValue({endDatePoliza:null});
    }
  }

  // Custom Validator 
  ValidationEndDate(control :FormControl){
    if(control.value==null){
      console.log(control.value)
      return {ValidationEndDate:true}
    }
    return null;
  }



  dateChanged(){
    // this.PIPForm.value.endDatePoliza=event.target.value;

    // console.log(this.PIPForm.value.endDatePoliza);

    // QUEDA 
    // console.log(event.target);
    this.date=this.PIPForm.value.startDatePoliza;
    // console.log(this.date);
    // console.log(this.date.getFullYear());
    this.year=this.PIPForm.value.startDatePoliza.getFullYear()+1;
    this.date.setFullYear(this.year);
    const data=new Date('Wed Nov 13 2013 00:00:00 GMT-0500 (Peru Standard Time)');
    const data1=new Date('11-10-2022');
    if(this.PIPForm.value.endDatePoliza<this.PIPForm.value.startDatePoliza){
      console.log("GAAAAAAAAAAAAAAA");
    }
    this.PIPForm.patchValue({endDatePoliza:this.date});
  }

  editPIP(){

  }
  btn_upload() {
    const fileUpload = document.getElementById('fileUpload') as HTMLInputElement;
    fileUpload.click()

  }
  fileUploaded(event: any) {
    /* console.log(event.target.files); */
    const fileCapture = event.target.files[0];
    if (fileCapture) {
      this.files.push(fileCapture);
      console.log(this.files);
    }
  }

  insurances: any[] = [
    { value: 'PACIFICO S.A.C.', viewValue: '1' },
    { value: 'BANCO DE LA NACION', viewValue: '2' },
    { value: 'SOAT', viewValue: '3' },
  ];

}



    // SEND TO BD
    // const SENDstartDatePoliza=new Date(this.datePipe.transform(this.PIPForm.value.startDatePoliza, 'dd-MM-yyyy'));
    //READ TO BD
    // const READstartDatePoliza=new Date(this.datePipe.transform(this.PIPForm.value.startDatePoliza, 'MM-dd-yyyy'));
