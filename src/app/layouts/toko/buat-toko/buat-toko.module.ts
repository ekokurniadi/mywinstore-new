import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuatTokoComponent } from './buat-toko.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MyComponentsModule } from 'src/app/my-components/my-components.module';
import { FormTokoComponent } from './form-toko/form-toko.component';

const routes: Routes = [{
  path: '', component: BuatTokoComponent,
}];

@NgModule({
  declarations: [
    BuatTokoComponent,
    FormTokoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MyComponentsModule,
    RouterModule.forChild(routes),
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class BuatTokoModule { }
