import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cad-show-history-vehicle-maintenance',
  templateUrl: './show-history-vehicle-maintenance.component.html',
  styleUrls: ['./show-history-vehicle-maintenance.component.scss'],
})
export class ShowHistoryVehicleMaintenanceComponent implements OnInit {
  cols: any[];
  history: any[] = [];
  selectedItem: any;

  constructor() {}

  ngOnInit(): void {
    this.cols = [
      { field: 'EngineType', header: 'TIPO MOTOR' },
      { field: 'Type', header: 'TIPO' },
      { field: 'Class', header: 'CLASE' },
      { field: 'MaintenanceDate', header: 'FECHA MANT' },
      { field: 'MaintenanceNext', header: 'PROX MANT' },
    ];
    this.history = ELEMENT_DATA;
  }

  searchVehicle(): void {}
}

const ELEMENT_DATA = [
  {
    EngineType: 'Data',
    Type: 'Data',
    Class: 'Data',
    MaintenanceDate: 'Data',
    MaintenanceNext: 'Data',
  },
];
