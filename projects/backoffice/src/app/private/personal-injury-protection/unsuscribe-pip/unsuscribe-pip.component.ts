import { Component,Input, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators,FormBuilder} from '@angular/forms';

@Component({
  selector: 'cad-unsuscribe-pip',
  templateUrl: './unsuscribe-pip.component.html',
  styleUrls: ['./unsuscribe-pip.component.scss']
})
export class UnsuscribePipComponent implements OnInit {

  PIPForm: FormGroup;
  @Input() idPIP:number;

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    // this.createForm();
  }

  // private createForm(): void {
  //   this.PIPForm =this._fb.group({
  //     id: new FormControl(''),
  //     detail: new FormControl('', [Validators.required]),
  //   });
  // }

  unsuscribe(unsuscribe:FormControl){
    console.log(unsuscribe.value);
  }

}
