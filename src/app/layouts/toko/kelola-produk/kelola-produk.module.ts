import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { KelolaProdukComponent } from './kelola-produk.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MyComponentsModule } from 'src/app/my-components/my-components.module';

const routes: Routes = [{ path: '', component: KelolaProdukComponent }];

@NgModule({
  declarations: [
    KelolaProdukComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MyComponentsModule,
    RouterModule.forChild(routes),
  ]
})
export class KelolaProdukModule { }
