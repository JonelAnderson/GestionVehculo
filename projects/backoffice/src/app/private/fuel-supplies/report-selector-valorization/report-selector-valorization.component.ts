import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cad-report-selector-valorization',
  templateUrl: './report-selector-valorization.component.html',
  styleUrls: ['./report-selector-valorization.component.scss'],
})
export class ReportSelectorValorizationComponent implements OnInit {
  checked = false;
  indeterminate = false;
  valueRadioBtn: 'valorization' | 'control' = 'valorization';
  disabled = false;

  selectedValue: string;
  selectedCar: string;

  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];

  constructor() {}

  ngOnInit(): void {}

  openRegister() {}
}

interface Food {
  value: string;
  viewValue: string;
}
