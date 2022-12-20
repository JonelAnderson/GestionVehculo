import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'cad-consult-vehicle',
  templateUrl: './consult-vehicle.component.html',
  styleUrls: ['./consult-vehicle.component.scss'],
})
export class ConsultVehicleComponent implements OnInit {
  @Input() LicensePlate: string;
  @Input() Area: string;
  @Input() Responsible: string;
  @Input() Type: string;
  @Input() Brand: string;
  @Input() Model: string;
  @Input() Color: string;
  @Input() Year: string;
  @Input() NEngine: string;
  @Input() Serie: string;

  @Output() SendIDVehicle = new EventEmitter<any>();

  MessageError: string = 'El campo es obligatorio';
  form: FormGroup;

  dataArea: string = '';
  dataResponsible: string = '';
  dataType: string = '';
  dataBrand: string = '';
  dataModel: string = '';
  dataColor: string = '';
  dataYear: string = '';
  dataNEngine: string = '';
  dataSerie: string = '';

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.form = this._fb.group({
      licensePlate: new FormControl('', [Validators.required]),
    });
  }

  searchVehicle(): void {
    if (this.form?.valid) {
      console.log('Valido');
      this.SendIDVehicle.emit(this.form);
      this.dataArea = 'Area ';
      this.dataResponsible = 'Responsible ';
      this.dataType = 'Type ';
      this.dataBrand = 'Brand ';
      this.dataModel = 'Model ';
      this.dataColor = 'Color ';
      this.dataYear = 'Year ';
      this.dataNEngine = 'NEngine ';
      this.dataSerie = 'Serie ';
    }
    console.log('No valido');
  }
}
