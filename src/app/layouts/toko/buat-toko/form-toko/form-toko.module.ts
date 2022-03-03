import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormTokoComponent } from './form-toko.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{ path: '', component: FormTokoComponent }];

@NgModule({
  declarations: [
    FormTokoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class FormTokoModule { }
