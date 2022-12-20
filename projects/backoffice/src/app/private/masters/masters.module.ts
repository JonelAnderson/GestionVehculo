import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMastersComponent } from './list-masters/list-masters.component';
import { ShowMasterComponent } from './show-master/show-master.component';
import { masterRoutingModule } from './master-routing.module';
import { SharedModule } from '@cad-shared/shared.module';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { RegisterDetailMasterComponent } from './register-detail-master/register-detail-master.component';
@NgModule({
  declarations: [
    ListMastersComponent,
    ShowMasterComponent,
    RegisterDetailMasterComponent,
  ],
  imports: [
    CommonModule,SharedModule,MatCheckboxModule,MatInputModule,MatRadioModule,MatSelectModule
    
  ],exports:[
    masterRoutingModule
  ]
})
export class MastersModule { }
