import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMaintenancesComponent } from './list-maintenances/list-maintenances.component';

const routes: Routes = [
  {
    path: '',
    component: ListMaintenancesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaintenancesRoutingModule {}
