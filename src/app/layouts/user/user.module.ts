import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { Routes, RouterModule } from '@angular/router';
import { MyComponentsModule } from 'src/app/my-components/my-components.module';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full',
      },
      // {
      //   path: '',
      //   loadChildren: () =>
      //     import('./profile/profile.module').then((m) => m.ProfileModule),
      // },
      {
        path: 'profile',
        loadChildren: () =>
          import('./profile/profile.module').then((m) => m.ProfileModule),
      },
      {
        path: 'daftar-pesanan',
        loadChildren: () =>
          import('./daftar-pesanan/daftar-pesanan.module').then((m) => m.DaftarPesananModule),
      },
    ],
  },
];

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    SharedModule,
    MyComponentsModule,
    RouterModule.forChild(routes),
  ],
})
export class UserModule { }
