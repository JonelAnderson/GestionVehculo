import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PipService } from '../shared/services/pipservices';
import { Pip } from '../shared/interfaces/pipinterfaces';

@Component({
  selector: 'cad-create-pip',
  templateUrl: './create-pip.component.html',
  styleUrls: ['./create-pip.component.scss'],
})
export class CreatePipComponent implements OnInit {
  insurances: any[] = [
    { value: 'PACIFICO S.A.C.', viewValue: '1' },
    { value: 'BANCO DE LA NACION', viewValue: '2' },
    { value: 'SOAT', viewValue: '3' },
  ];

  pipId: string;

  form!: FormGroup;

  isSubmitting: boolean = false;

  file: any = '';

  constructor(private _fb: FormBuilder, private pipService: PipService) {}

  ngOnInit(): void {
    const formControls = {
      licensePlate: new FormControl('', [Validators.required, Validators.pattern(/^([A-Za-z,0-9,-]){6}$/)]),
      /* area: new FormControl('', [Validators.required]),
      responsible: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
      mark: new FormControl('', [Validators.required]),
      model: new FormControl('', [Validators.required]),
      color: new FormControl('', [Validators.required]),
      year: new FormControl('', [Validators.required]),
      NEngine: new FormControl('', [Validators.required]),
      serie: new FormControl('', [Validators.required]), */
      insurance: new FormControl('', Validators.required),
      policyNumber: new FormControl('', Validators.required),
      startPolicyValidity: new FormControl('', Validators.required),
      endPolicyValidity: new FormControl('', Validators.required),
      startCertificateValidity: new FormControl('', Validators.required),
      endCertificateValidity: new FormControl('', Validators.required),
      identificationDocument: new FormControl('', [Validators.required, Validators.pattern(/^([0-9]){8}$|^([0-9]){11}$/)]),
      date: new FormControl('', Validators.required),
      hour: new FormControl('', Validators.required),
      amount: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]+(.[0-9]+)?$/i)]),
      document: new FormControl({}, Validators.required),
    };

    this.form = this._fb.group(formControls);
  }

  searchVehicle(): void {
    console.log(this.form);
  }

  onBlur(controlName: string) {
    this.form.get(controlName)?.markAsDirty();
  }
  save(): void {
    const pip: Pip = {
      LicensePlate: this.form.value.licensePlate,
      Insurance: this.form.value.insurance,
      PolicyNumber: this.form.value.policyNumber,
      StartPolicyValidity: this.form.value.startPolicyValidity,
      EndPolicyValidity: this.form.value.endPolicyValidity,
      StartCertificateValidity: this.form.value.startCertificateValidity,
      EndCertificateValidity: this.form.value.endCertificateValidity,
      IdentificationDocument: this.form.value.identificationDocument,
      Date: this.form.value.date,
      Hour: this.form.value.hour,
      Amount: this.form.value.amount,
      Document: this.form.value.document,
    };

    if (this.form.valid) {
      this.pipService.add(pip).subscribe(
        res => {
          console.log(res);
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  btn_upload() {
    const fileUpload = document.getElementById('fileUpload') as HTMLInputElement;
    fileUpload.click();
  }

  btn_remove() {
    this.file = '';
  }

  fileUploaded(event: any) {
    this.file = event.target.files[0];
    this.form.value.document = this.file;
  }

  sendIDVehicle($event) {
    console.log('event', $event);
  }
}
