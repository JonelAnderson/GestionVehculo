/* eslint-disable no-console */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'cad-register-fuel-supply-contracts',
  templateUrl: './register-fuel-supply-contracts.component.html',
  styleUrls: ['./register-fuel-supply-contracts.component.scss'],
})
export class RegisterFuelSupplyContractsComponent implements OnInit {
  contractForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contractForm = this.fb.group({
      contractNumber: new FormControl('', Validators.required),
      startDate: new FormControl('', Validators.required),
      finalDate: new FormControl('', Validators.required),
      concept: new FormControl('', Validators.required),
      ruc: new FormControl('', Validators.required),
      direction: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {}
}
