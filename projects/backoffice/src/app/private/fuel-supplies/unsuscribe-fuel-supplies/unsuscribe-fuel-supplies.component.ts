import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'cad-unsuscribe-fuel-supplies',
  templateUrl: './unsuscribe-fuel-supplies.component.html',
  styleUrls: ['./unsuscribe-fuel-supplies.component.scss'],
})
export class UnsuscribeFuelSuppliesComponent implements OnInit {
  @Input() idPIP: number;
  constructor() {}

  ngOnInit(): void {}
  unsuscribe(unsuscribe: FormControl) {
    console.log(unsuscribe.value);
  }
}
