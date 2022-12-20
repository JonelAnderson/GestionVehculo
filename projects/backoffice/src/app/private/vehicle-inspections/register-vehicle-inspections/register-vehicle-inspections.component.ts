import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'cad-register-vehicle-inspections',
  templateUrl: './register-vehicle-inspections.component.html',
  styleUrls: ['./register-vehicle-inspections.component.scss'],
})
export class RegisterVehicleInspectionsComponent implements OnInit {
  file: any = '';
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      licencePlate: new FormControl('', [Validators.required]),
      /* area: new FormControl('', [Validators.required]),
      responsible: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
      mark: new FormControl('', [Validators.required]),
      model: new FormControl('', [Validators.required]),
      color: new FormControl('', [Validators.required]),
      year: new FormControl('', [Validators.required]),
      NEngine: new FormControl('', [Validators.required]),
      serie: new FormControl('', [Validators.required]), */
      certificateNumber: new FormControl('', [Validators.required]),
      enterprise: new FormControl('', [Validators.required]),
      reviewDate: new FormControl('', [Validators.required]),
      expirationDate: new FormControl('', [Validators.required]),
      document: new FormControl({}, [Validators.required]),
    });
  }

  ngOnInit(): void {}

  searchVehicle(): void {
    console.log('form', this.form);
  }

  save(): void {}

  onFileSelect(event): any {
    this.file = event.target.files[0];
    this.form.value.document = this.file;
    console.log('file', this.file);
  }
}
