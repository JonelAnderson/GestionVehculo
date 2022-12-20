import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'cad-list-alerts',
  templateUrl: './list-alerts.component.html',
  styleUrls: ['./list-alerts.component.scss'],
})
export class ListAlertsComponent implements OnInit {
  columns: any[];
  actions: any[];
  data: any[];
  columnsPIP: any[];
  columnsLicense: any[];
  columnsVehicleInspections: any[];
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      document: new FormControl('', [Validators.required]),
    });

    this.actions = [1, 0, 0];

    this.columnsPIP = [
      { field: 'Identifier', header: 'Identificador' },
      { field: 'Vehicle', header: 'Vehículo' },
      { field: 'Descripción', header: 'Description' },
      { field: 'Insurance', header: 'Aseguradora' },
      { field: 'Expiration', header: 'Vencimiento' },
    ];

    this.columnsLicense = [
      { field: 'Identifier', header: 'Identificador' },
      { field: 'IdentificationDocument', header: 'DNI' },
      { field: 'Drive', header: 'Conductor' },
      { field: 'Class', header: 'Clase. Categoria' },
      { field: 'Expiration', header: 'Vencimiento' },
    ];

    this.columnsVehicleInspections = [
      { field: 'Identifier', header: 'Identificador' },
      { field: 'Vehicle', header: 'Vehículo' },
      { field: 'Descripción', header: 'Description' },
      { field: 'Contractor', header: 'Contratista' },
      { field: 'Expiration', header: 'Vencimiento' },
    ];
  }
  documents = [{ name: 'SOAT' }, { name: 'Licencia' }, { name: 'Revisión Tecnica' }];

  ngOnInit(): void {}

  save(): void {
    console.log('form', this.form);
    if (this.form.value.document.name == 'SOAT') {
      this.columns = this.columnsPIP;
    }
    if (this.form.value.document.name == 'Licencia') {
      this.columns = this.columnsLicense;
    }
    if (this.form.value.document.name == 'Revisión Tecnica') {
      this.columns = this.columnsVehicleInspections;
    }
  }
}
