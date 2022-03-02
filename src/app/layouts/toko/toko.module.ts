import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TokoComponent } from './toko.component';
import { Routes, RouterModule } from '@angular/router';
import { MyComponentsModule } from 'src/app/my-components/my-components.module';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '', component: TokoComponent, children: [
      {
        path: '', loadChildren: () => import('./dashboard-toko/dashboard-toko.module').then(m => m.DashboardTokoModule)
      },
      {
        path: 'buat-toko', loadChildren: () => import('./buat-toko/buat-toko.module').then(m => m.BuatTokoModule)
      },
      {
        path: 'tambah-produk', loadChildren: () => import('./tambah-produk/tambah-produk.module').then(m => m.TambahProdukModule)
      },
      {
        path: 'kelola-produk', loadChildren: () => import('./kelola-produk/kelola-produk.module').then(m => m.KelolaProdukModule)
      }
    ]
  }
];

@NgModule({
  declarations: [
    TokoComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MyComponentsModule,
    RouterModule.forChild(routes),
  ]
})
export class TokoModule { }
