import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaftarPesananComponent } from './daftar-pesanan.component';
import { Routes, RouterModule } from '@angular/router';
import { MyComponentsModule } from 'src/app/my-components/my-components.module';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [{ path: '', component:DaftarPesananComponent }];

@NgModule({
  declarations: [
    DaftarPesananComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MyComponentsModule,
    RouterModule.forChild(routes),
  ]
})
export class DaftarPesananModule { }
