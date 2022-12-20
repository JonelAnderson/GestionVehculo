import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ShowDetailFuelConsumptionControlComponent } from '../show-detail-fuel-consumption-control/show-detail-fuel-consumption-control.component';

@Component({
  selector: 'cad-list-detail-fuel-consumption',
  templateUrl: './list-detail-fuel-consumption.component.html',
  styleUrls: ['./list-detail-fuel-consumption.component.scss'],
})
export class ListDetailFuelConsumptionComponent implements OnInit {
  data: any[] = [];
  columns: any[];
  actions: any[];
  constructor(public dialog: MatDialog) {
    this.columns = [
      { field: 'LicensePlate', header: 'Placa' },
      { field: 'Fuel', header: 'Combustible' },
      { field: 'InitialKM', header: 'Km Inicial' },
      { field: 'EndKM', header: 'Km Final' },
      { field: 'Route', header: 'Recorrido (Km)' },
      { field: 'Gallons', header: 'Galones Consumidos (GI)' },
      { field: 'FixedRange', header: 'Rango fijo establecido (Km/gl)' },
      { field: 'PerceivedRange', header: 'Rango Percibido (Km/gl)' },
    ];
    this.actions = [1, 0, 0];
  }

  searchEvent($event: number) {
    const searchModal = this.dialog.open(ShowDetailFuelConsumptionControlComponent, {
      disableClose: true,
      data: {
        Id: $event,
      },
    });
    searchModal.backdropClick();
    searchModal.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
    this.data = ELEMENT_DATA;
  }

  fruits: any[] = [{ name: 'Lemon' }, { name: 'Lime' }, { name: 'Apple' }];
}

export interface detailFuelConsumption {
  LicensePlate: string;
  Fuel: string;
  InitialKM: string;
  EndKM: string;
  Route: string;
  Gallons: string;
  FixedRange: string;
  PerceivedRange: string;
}

const ELEMENT_DATA: detailFuelConsumption[] = [
  {
    LicensePlate: 'EGJ100',
    Fuel: 'GASOHOL 97',
    InitialKM: '2700',
    EndKM: '3450',
    Route: '750',
    Gallons: '20',
    FixedRange: '36,698',
    PerceivedRange: '37,500',
  },
];
