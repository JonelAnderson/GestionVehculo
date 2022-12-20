import { Component, OnInit, ViewChild } from '@angular/core';
import {FormGroup, FormControl, Validators,FormBuilder} from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { DateAdapter} from '@angular/material/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'cad-register-fuel-supplies',
  templateUrl: './register-fuel-supplies.component.html',
  styleUrls: ['./register-fuel-supplies.component.scss'],
  providers: [DatePipe]
})
export class RegisterFuelSuppliesComponent implements OnInit {

  // Variables para obtener vehiculo
  arrVehicle:Vehicle[]=[];
  value2:number=0;
  textoDeInput:number;

  Date= new Date(new Date());
  currentDate=this.datePipe.transform(this.Date, 'dd-MM-yyyy');
  currentTime=this.Date.getHours()+':'+this.Date.getMinutes();

  // Tabla de abastecimiento
  @ViewChild('concept') concept: MatSelect;


  constructor(private dateAdapter: DateAdapter<Date>,private _fb: FormBuilder, private datePipe:DatePipe) { 
    this.dateAdapter.setLocale('en-GB');
    this.createForm();    
  }

  ngOnInit(): void {
    this.fuelSpplyForm.patchValue({dispachDate:this.Date});
    this.fuelSpplyForm.patchValue({dispatchTime:this.currentTime});
    
  }
  fuelSpplyForm: FormGroup;
  fuelSupliesConcept: FuelSuplies[]=ELEMENT_DATA;
  arrayTable:any[]=[];
  value:any;
  

  private createForm(): void {
    this.fuelSpplyForm =this._fb.group({
      // vehiculo
      licencePlate: new FormControl('', [Validators.required, Validators.minLength(6),Validators.maxLength(6),Validators.pattern(/^([A-Za-z,0-9,-]){6}$/)]),
      
      dispachNote: new FormControl('', [Validators.required,]),
      dispachDate: new FormControl('', [Validators.required]),
      odometer: new FormControl('', [Validators.required]),
      driver: new FormControl('', [Validators.required]),
      dispatchTime: new FormControl('', [Validators.required]),
      area: new FormControl('', [Validators.required]),
      contract: new FormControl('', [Validators.required]),
      concept: new FormControl(ELEMENT_DATA),
      supply: this._fb.group({
         item: new FormControl('', [Validators.required]),
         concept: new FormControl('', [Validators.required]),
         quantity: new FormControl('', [Validators.required]),
         pu: new FormControl('', [Validators.required]),
         amount: new FormControl('', [Validators.required]),
         total: new FormControl('', [Validators.required]),
       })
      
    });
  }
  
  searchVehicle(licencePlate){
    if(this.arrVehicle.length!=0){
      this.arrVehicle=[];
      const value=VEHICLE_DATA.find(item=>item.licencePlate==licencePlate);
      this.arrVehicle.push(value);
    }else{
      const value=VEHICLE_DATA.find(item=>item.licencePlate==licencePlate);
      this.arrVehicle.push(value);
    }
  }

  addConcept(id) {
    
    const searchData=this.fuelSupliesConcept.find(item=>item.item==id);
    const verifyDuplicate=this.arrayTable.find(item=>item.item==id)
    
    console.log(this.fuelSpplyForm);
    
    if(verifyDuplicate==null){
      this.arrayTable.push(searchData);
      this.clear();
    }else{
      this.clear();
    }
  }

  inputChanged(){
    console.log("input");

  }

  saveFuelSupply(){

  }

  clear(){
    this.concept.value=undefined;
  }

  removeData(id){
    // console.log(this.fuelSupliesConcept1);  
    this.removeObjectWithId(this.arrayTable, id);  
    // console.log("Nuevo Array");
    // console.log(this.fuelSupliesConcept1);
  }

  removeObjectWithId(arr, id) {
    const objWithIdIndex = arr.findIndex((obj) => obj.item === id);
  
    if (objWithIdIndex > -1) {
      arr.splice(objWithIdIndex, 1);
    }
    return arr;
  }

  insurances: any[] = [
    { value: 'PACIFICO S.A.C.', viewValue: '1' },
    { value: 'BANCO DE LA NACION', viewValue: '2' },
    { value: 'SOAT', viewValue: '3' },
  ];
}
// PRUEBA CON DATOS FICTICIOS
export interface FuelSuplies{
  item:number;
  concepto:string;
  cantidad:number;
  pu:number;
  
}

const ELEMENT_DATA: FuelSuplies[] = [
  {item: 1, concepto: '10001 | GASOHOL 97', cantidad: 7.161, pu: 27.31},
  {item: 2, concepto: '20001 | ACEITE', cantidad: 10, pu: 30},
  {item: 3, concepto: '30001 | ACEITE', cantidad: 15, pu: 2}
];

export interface Vehicle{
  licencePlate:string;
  brand:string;
  typeVehicle:string;
  area:string;
  model:string;
  year:number;
  feature:{
    color:string;
    nEngine:string;
    typeSupply:string;
    typeEngine:string;
    nSerie:string;
  }
}

const VEHICLE_DATA: Vehicle[] = [
  {licencePlate:'ABCDEF', brand: '10001 | GASOHOL 97', typeVehicle: 'Camioneta', area: 'OGA',model:'PRIUS',year:1,
  feature:{color:'Rojo',nEngine:'201',typeSupply:'Disel',typeEngine:'Tipo de Motor',nSerie:'asdads'}},
  {licencePlate:'BACDEF', brand: '10002 | GASOHOL 98', typeVehicle: 'Camioneta', area: 'OGA',model:'PRIUS',year:1,
  feature:{color:'Rojo',nEngine:'201',typeSupply:'Disel',typeEngine:'Tipo de Motor',nSerie:'asdads'}},
];