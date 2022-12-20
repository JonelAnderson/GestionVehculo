import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrivateLayoutComponent } from './layout/private-layout.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: PrivateLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'products',
        loadChildren: () => import('./products/products.module').then(m => m.ElementsModule),
      },
      {
        path: 'vehicles',
        loadChildren: () => import('./vehicles/vehicles.module').then(m => m.VehiclesModule),
      },
      {
        path: 'pip',
        loadChildren: () =>
          import('./personal-injury-protection/personal-injury-protection.module').then(m => m.PersonalInjuryProtectionModule),
      },
      {
        path: 'new-supply-contract',
        loadChildren: () => import('./supply-contract/supply-contract.module').then(m => m.SupplyContractModule),
      },
      {
        path: 'vehicleInspections',
        loadChildren: () => import('./vehicle-inspections/vehicle-inspections.module').then(m => m.VehicleInspectionsModule),
      },
      {
        path: 'fuelSupplies',
        loadChildren: () => import('./fuel-supplies/fuel-supplies.module').then(m => m.FuelSuppliesInspectionsModule),
      },
      {
        path: 'fuelSupplyContract',
        loadChildren: () => import('./fuel-supply-contracts/fuel-supply-contracts.module').then(m => m.FuelSupplyContractsModule),
      },
      {
        path: 'masters',
        loadChildren: () => import('./masters/masters.module').then(m => m.MastersModule),
      },
      {
        path: 'driversOperators',
        loadChildren: () => import('./drivers-operators/drivers-operators.module').then(m => m.DriversOperatorsModule),
      },
      {
        path: 'mobilityRequest',
        loadChildren: () => import('./mobility-request/mobility-request.module').then(m => m.MobilityRequestModule),
      },
      {
        path: 'maintenances',
        loadChildren: () => import('./maintenances/maintenances.module').then(m => m.MaintenancesModule),
      },
      {
        path: 'alerts',
        loadChildren: () => import('./alerts/alerts.module').then(m => m.AlertsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
