import { Component,Input, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'cad-unsuscribe-mobility-request',
  templateUrl: './unsuscribe-mobility-request.component.html',
  styleUrls: ['./unsuscribe-mobility-request.component.scss']
})
export class UnsuscribeMobilityRequestComponent implements OnInit {

  PIPForm: FormGroup;
  @Input() idPIP:number;
  constructor() { }

  ngOnInit(): void {
  }

  unsuscribe(unsuscribe:FormControl){
    console.log(unsuscribe.value);
  }

}
