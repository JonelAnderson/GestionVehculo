import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'cad-unsuscribe-drivers-operators',
  templateUrl: './unsuscribe-drivers-operators.component.html',
  styleUrls: ['./unsuscribe-drivers-operators.component.scss'],
})
export class UnsuscribeDriversOperatorsComponent implements OnInit {
  @Input() id: number;

  constructor() {}

  ngOnInit(): void {}

  unsuscribe(unsuscribe: FormControl) {}
}
