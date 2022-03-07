import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilTokoComponent } from './profil-toko.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MyComponentsModule } from 'src/app/my-components/my-components.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: ProfilTokoComponent }];

@NgModule({
  declarations: [
    ProfilTokoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MyComponentsModule,
    RouterModule.forChild(routes),
  ]
})
export class ProfilTokoModule { }
