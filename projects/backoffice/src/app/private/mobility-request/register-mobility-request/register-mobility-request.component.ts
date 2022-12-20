import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MobilityRequest } from '../shared/interfaces/mobilityRequest.interface';
import { MobilityRequestService } from '../shared/services/mobilityRequest-service.service';
@Component({
  selector: 'cad-register-mobility-request',
  templateUrl: './register-mobility-request.component.html',
  styleUrls: ['./register-mobility-request.component.scss'],
})
export class RegisterMobilityRequestComponent implements OnInit {
  form: FormGroup;
  file: any = '';
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

  searchVehicle(): void {}

  save(): void {
    const registerMobility: MobilityRequest = {
      LicensePlate: this.form.value.licensePlate,
      ServiceNumber: this.form.value.serviceNumber,
      UserArea: this.form.value.userArea,
      CommissionaryStaff: this.form.value.commissionaryStaff,
      DateService: this.form.value.dateService,
      HourService: this.form.value.hourService,
      CommissionGoal: this.form.value.commissionGoal,
      AssignedDriver: this.form.value.assignedDriver,
      DepartureTime: this.form.value.departureTime,
      ArrivalTime: this.form.value.arrivalTime,
      DepartureKM: this.form.value.departureKM,
      ArrivalKM: this.form.value.arrivalKM,
      Entity: this.form.value.entity,
      District: this.form.value.district,
      Observation: this.form.value.observation,
      Address: this.form.value.address,
      Document: this.form.value.document,
    };
    if (this.form.valid) {
      this.mobilityRequestService.add(registerMobility).subscribe(
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
