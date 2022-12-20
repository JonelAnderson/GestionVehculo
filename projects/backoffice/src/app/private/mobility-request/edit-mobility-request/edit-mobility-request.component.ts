import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MobilityRequest } from '../shared/interfaces/mobilityRequest.interface';
import { MobilityRequestService } from '../shared/services/mobilityRequest-service.service';
import { Update } from '@ngrx/entity';

@Component({
  selector: 'cad-edit-mobility-request',
  templateUrl: './edit-mobility-request.component.html',
  styleUrls: ['./edit-mobility-request.component.scss'],
})
export class EditMobilityRequestComponent implements OnInit {
  form: FormGroup;
  file: any = '';
  files: any = [];
  constructor(private fb: FormBuilder, private mobilityRequestService: MobilityRequestService) {
    this.form = this.fb.group({
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
      serviceNumber: new FormControl('', [Validators.required, Validators.pattern(/^([0-9,-]){9}$/)]),
      userArea: new FormControl('', [Validators.required]),
      commissionaryStaff: new FormControl('', [Validators.required]),
      dateService: new FormControl('', [Validators.required]),
      hourService: new FormControl('', [Validators.required]),
      commissionGoal: new FormControl('', [Validators.required]),
      assignedDriver: new FormControl('', [Validators.required]),
      departureTime: new FormControl('', [Validators.required]),
      arrivalTime: new FormControl('', [Validators.required]),
      departureKM: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]+(.[0-9]+)?$/i)]),
      arrivalKM: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]+(.[0-9]+)?$/i)]),
      entity: new FormControl('', [Validators.required]),
      district: new FormControl('', [Validators.required]),
      observation: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      document: new FormControl({}, [Validators.required]),
    });
  }

  ngOnInit(): void {}

  save(): void {}

  searchVehicle(): void {}

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
}
