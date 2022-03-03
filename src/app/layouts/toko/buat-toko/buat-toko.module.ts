import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuatTokoComponent } from './buat-toko.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MyComponentsModule } from 'src/app/my-components/my-components.module';

const routes: Routes = [{
  path: '', component: BuatTokoComponent, children: [
    {
      path: 'form-toko', loadChildren: () => import('./form-toko/form-toko.module').then(m => m.FormTokoModule)
    },
  ]
}];

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
