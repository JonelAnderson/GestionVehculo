import { Component, OnInit,Input } from '@angular/core';
import {FormGroup, FormControl, Validators,FormBuilder} from '@angular/forms';

@Component({
  selector: 'cad-unsuscribe-vehicle-inspections',
  templateUrl: './unsuscribe-vehicle-inspections.component.html',
  styleUrls: ['./unsuscribe-vehicle-inspections.component.scss']
})
export class UnsuscribeVehicleInspectionsComponent implements OnInit {

  
  @Input() idPIP:number;
  constructor() { }

  ngOnInit(): void {
  }
  unsuscribe(unsuscribe:FormControl){
    console.log(unsuscribe.value);
  }

}
