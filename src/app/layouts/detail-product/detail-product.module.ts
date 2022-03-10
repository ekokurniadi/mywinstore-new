import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailProductComponent } from './detail-product.component';
import { Routes, RouterModule } from '@angular/router';
import { MyComponentsModule } from 'src/app/my-components/my-components.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ModalAlamatComponent } from '../modal-alamat/modal-alamat.component';

const routes: Routes = [{ path: '', component: DetailProductComponent }];

@NgModule({
  declarations: [
    DetailProductComponent,
    ModalAlamatComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MyComponentsModule,
    RouterModule.forChild(routes),
  ],
  entryComponents: [
    ModalAlamatComponent
  ]
})
export class DetailProductModule { }
