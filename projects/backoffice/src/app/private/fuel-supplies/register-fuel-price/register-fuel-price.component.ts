import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FuelPrice } from '../shared/interfaces/fuel-price.interface';
import { FuelPriceService } from '../shared/services/fuel-price-service.service';

@Component({
  selector: 'cad-register-fuel-price',
  templateUrl: './register-fuel-price.component.html',
  styleUrls: ['./register-fuel-price.component.scss'],
})
export class RegisterFuelPriceComponent implements OnInit {
  form!: FormGroup;
  file: any = '';

  constructor(private _fb: FormBuilder, private fuelPriceService: FuelPriceService) {
    const formControls = {
      contract: new FormControl('', Validators.required),
      concept: new FormControl('', Validators.required),
      efectiveDate: new FormControl('', Validators.required),
      worth: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]+(.[0-9]+)?$/i)]),
      document: new FormControl({}, Validators.required),
    };
    this.form = this._fb.group(formControls);
  }

  contracts: any[] = [
    { value: 'PACIFICO S.A.C.', viewValue: '1' },
    { value: 'BANCO DE LA NACION', viewValue: '2' },
    { value: 'SOAT', viewValue: '3' },
  ];

  ngOnInit(): void {}

  save(): void {
    const fuelPrice: FuelPrice = {
      Contract: this.form.value.contract,
      Concept: this.form.value.contract,
      EfectiveDate: this.form.value.contract,
      Worth: this.form.value.contract,
      Document: this.form.value.contract,
    };
    if (this.form.valid) {
      this.fuelPriceService.add(fuelPrice).subscribe(
        res => {
          console.log(res);
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  onFileSelect(event): any {
    this.file = event.target.files[0];
    this.form.value.document = this.file;
  }
}
