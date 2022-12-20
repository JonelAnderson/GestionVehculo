import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListVehicleComponent } from './list-vehicle/list-vehicle.component';
import { RegisterVehicleComponent } from './register-vehicle/register-vehicle.component';
const routes: Routes = [
  {
    path: '',
    component: ListVehicleComponent,
  },
  {
    path:'create',
    component:RegisterVehicleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class vehicleRoutingModule {}
