import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDetailFuelConsumptionComponent } from './list-detail-fuel-consumption/list-detail-fuel-consumption.component';
import { ListFuelSuppliesComponent } from './list-fuel-supplies/list-fuel-supplies.component';
import { ListFuelPriceComponent } from './list-fuel-price/list-fuel-price.component';
import { ReportSelectorValorizationComponent } from './report-selector-valorization/report-selector-valorization.component';

const routes: Routes = [
  {
    path: '',
    component: ListFuelSuppliesComponent,
  },
  {
    path: 'detailFuelConsumption',
    component: ListDetailFuelConsumptionComponent,
  },
  {
    path: 'fuelPrice',
    component: ListFuelPriceComponent,
  },
  {
    path: 'reportValorization',
    component: ReportSelectorValorizationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class fuelSuppliesRoutingModule {}
