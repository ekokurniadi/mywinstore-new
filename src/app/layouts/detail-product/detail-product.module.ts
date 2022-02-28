import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailProductComponent } from './detail-product.component';
import { Routes, RouterModule } from '@angular/router';
import { MyComponentsModule } from 'src/app/my-components/my-components.module';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [{ path: '', component:DetailProductComponent }];

@NgModule({
  declarations: [
    DetailProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MyComponentsModule,
    RouterModule.forChild(routes),
  ]
})
export class DetailProductModule { }
