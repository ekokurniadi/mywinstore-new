import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeranjangBelanjaComponent } from './keranjang-belanja.component';
import { Routes, RouterModule } from '@angular/router';
import { MyComponentsModule } from 'src/app/my-components/my-components.module';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [{ path: '', component:KeranjangBelanjaComponent }];

@NgModule({
  declarations: [
    KeranjangBelanjaComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MyComponentsModule,
    RouterModule.forChild(routes),
  ]
})
export class KeranjangBelanjaModule { }
