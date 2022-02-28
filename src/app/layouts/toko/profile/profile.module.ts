import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { Routes, RouterModule } from '@angular/router';
import { MyComponentsModule } from 'src/app/my-components/my-components.module';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [{ path: '', component:ProfileComponent }];

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MyComponentsModule,
    RouterModule.forChild(routes),
  ]
})
export class ProfileModule { }
