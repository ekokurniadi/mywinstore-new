import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuatTokoComponent } from './buat-toko.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MyComponentsModule } from 'src/app/my-components/my-components.module';

const routes: Routes = [{ path: '', component: BuatTokoComponent }];

@NgModule({
  declarations: [
    BuatTokoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MyComponentsModule,
    RouterModule.forChild(routes),
  ]
})
export class BuatTokoModule { }
