import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'cad-edit-drivers-operators',
  templateUrl: './edit-drivers-operators.component.html',
  styleUrls: ['./edit-drivers-operators.component.scss'],
})
export class EditDriversOperatorsComponent implements OnInit {
  selectedItem: any;
  licenses: any[] = [];
  cols: any[];
  fileRecord: any = '';
  fileLicense: any = '';
  licensesForm: FormGroup;
  form: FormGroup;

  genders: any[] = [
    { value: 'Masculino', viewValue: 'Masculino' },
    { value: 'Femenino', viewValue: 'Femenino' },
  ];
  typeClass: any[] = [
    { value: 'A', viewValue: 'Clase A' },
    { value: 'B', viewValue: 'Clase B' },
  ];
  typeCategory: any[] = [
    { value: 'A', viewValue: 'Categoria A' },
    { value: 'B', viewValue: 'Categoria B' },
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      indentificationDocument: new FormControl('', [Validators.required]),
      paternalLastName: new FormControl('', [Validators.required]),
      motherLastName: new FormControl('', [Validators.required]),
      names: new FormControl('', [Validators.required]),
      dateBirth: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      direction: new FormControl('', [Validators.required]),
      driversLicenses: new FormControl('', [Validators.required]),
    });
    this.licensesForm = this.fb.group({
      licenseNumber: new FormControl('', [Validators.required]),
      class: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      expeditionDate: new FormControl('', [Validators.required]),
      expirationDate: new FormControl('', [Validators.required]),
      documentLicense: new FormControl('', [Validators.required]),
      documentRecord: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.cols = [
      { field: 'licenseNumber', header: 'Número - Licencia' },
      { field: 'class', header: 'Clase/Cat.' },
      { field: 'category', header: 'Expedición' },
      { field: 'expirationDate', header: 'Vencimiento' },
    ];
  }
  onFileSelectLicense(event): any {
    this.fileLicense = event.target.files[0];
    this.licensesForm.value.documentLicense = this.fileLicense;
  }
  onFileSelectRecord(event): any {
    this.fileRecord = event.target.files[0];
    this.licensesForm.value.documentRecord = this.fileRecord;
  }
  saveLicenses(): any {
    this.licenses.push(this.licensesForm.value);
  }
  deleteLicense(id): any {
    this.licenses.splice(id, 1);
  }
  editLicense(id): any {}
}
