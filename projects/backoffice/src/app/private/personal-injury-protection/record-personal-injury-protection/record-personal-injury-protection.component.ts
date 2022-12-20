import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'cad-record-personal-injury-protection',
  templateUrl: './record-personal-injury-protection.component.html',
  styleUrls: ['./record-personal-injury-protection.component.scss'],
})
export class RecordPersonalInjuryProtectionComponent implements OnInit {
  historialForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {}

  private createForm(): void {
    this.historialForm = this.fb.group({
      licencePlate: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(6),
        Validators.pattern(/^([A-Za-z,0-9,-]){6}$/),
      ]),
    });
  }
}
