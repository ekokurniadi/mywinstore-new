import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TambahProdukComponent } from './tambah-produk.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MyComponentsModule } from 'src/app/my-components/my-components.module';


const routes: Routes = [{ path: '', component: TambahProdukComponent }];

@NgModule({
  declarations: [
    TambahProdukComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MyComponentsModule,
    RouterModule.forChild(routes),
  ]
})
export class TambahProdukModule { }
