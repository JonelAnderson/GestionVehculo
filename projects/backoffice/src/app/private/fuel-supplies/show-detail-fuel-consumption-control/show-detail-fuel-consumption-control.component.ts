import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cad-show-detail-fuel-consumption-control',
  templateUrl: './show-detail-fuel-consumption-control.component.html',
  styleUrls: ['./show-detail-fuel-consumption-control.component.scss'],
})
export class ShowDetailFuelConsumptionControlComponent implements OnInit {
  fuelSuplies: FuelConsuption[] = [];
  total: number = 0;
  limitKMPermitConsuptionFuel: number = 100000; //limiteKmToleranciaConsumoCombustible
  lowerPercentageConsuptionFuel: number = 10 / 100; //porcentajeInferiorToleranciaConsumoCombustible
  topPercentageConsuptionFuel: number = 20 / 100; //porcentajeSuperiorToleranciaConsumoCombustible
  RangePerceivedToInterval: number = 0;
  ColorRangePerceivedToInterval: number = 0;

  constructor() {
    this.fuelSuplies = ELEMENT_DATA;
  }

  ngOnInit(): void {
    this.calculeRangePerceivedToInterval();
  }

  // openEdit() {}

  openUnsuscribe() {}

  calculeRangePerceivedToInterval() {
    var totalTrail = 0;
    var totalFuelConsuption = 0;
    this.fuelSuplies.forEach(element => {
      totalTrail = element.Trail + totalTrail;
      totalFuelConsuption = element.ConsumedGallon + totalFuelConsuption;
      this.ColorRangePerceivedToInterval = element.RangeEstablish;
    });
    this.RangePerceivedToInterval = totalTrail / totalFuelConsuption;
  }
}

export interface FuelConsuption {
  DateSupply: string;
  UserArea: string;
  Driver: string;
  KMInitial: number;
  KMFinal: number;
  Trail: number;
  ConsumedGallon: number;
  RangeEstablish: number;
  RangePerceived: number;
}

const ELEMENT_DATA: FuelConsuption[] = [
  {
    DateSupply: '16/12/2022',
    UserArea: '10001 | GASOHOL 97',
    Driver: '7.161',
    KMInitial: 27.31,
    KMFinal: 195.47,
    Trail: 160,
    ConsumedGallon: 4,
    RangeEstablish: 20,
    RangePerceived: 40,
  },
  {
    DateSupply: '16/12/2022',
    UserArea: '10001 | GASOHOL 97',
    Driver: '7.161',
    KMInitial: 27.31,
    KMFinal: 195.47,
    Trail: 240,
    ConsumedGallon: 6,
    RangeEstablish: 10,
    RangePerceived: 40,
  },
  {
    DateSupply: '16/12/2022',
    UserArea: '10001 | GASOHOL 97',
    Driver: '7.161',
    KMInitial: 27.31,
    KMFinal: 195.47,
    Trail: 350,
    ConsumedGallon: 10,
    RangeEstablish: 37,
    RangePerceived: 35,
  },
];
