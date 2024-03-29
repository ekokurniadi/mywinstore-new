import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BerandaComponent } from './beranda.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MyComponentsModule } from 'src/app/my-components/my-components.module';

const routes: Routes = [{ path: '', component:BerandaComponent }];

@NgModule({
  declarations: [
    BerandaComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MyComponentsModule,
    RouterModule.forChild(routes),
  ]
})
export class BerandaModule { }
