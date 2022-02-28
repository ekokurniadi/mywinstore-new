import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsComponent } from './layouts.component';
import { MyComponentsModule } from '../my-components/my-components.module';
import {RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
    children: [
      {
        path: 'beranda',
        loadChildren: () =>
          import('./beranda/beranda.module').then((m) => m.BerandaModule),
      },
      {
        path: 'checkout',
        loadChildren: () =>
          import('./checkout/checkout.module').then((m) => m.CheckoutModule),
      },
      {
        path: 'detail-product',
        loadChildren: () =>
          import('./detail-product/detail-product.module').then((m) => m.DetailProductModule),
      },
      {
        path: 'keranjang-belanja',
        loadChildren: () =>
          import('./keranjang-belanja/keranjang-belanja.module').then((m) => m.KeranjangBelanjaModule),
      },
      {
        path: 'shop',
        loadChildren: () =>
          import('./shop/shop.module').then((m) => m.ShopModule),
      },
      {
        path: 'toko',
        loadChildren: () =>
          import('./toko/toko.module').then((m) => m.TokoModule),
      },
      {
        path: 'user',
        loadChildren: () =>
          import('./user/user.module').then((m) => m.UserModule),
      },
    ],
  },
];

@NgModule({
  declarations: [LayoutsComponent],
  imports: [CommonModule, MyComponentsModule, RouterModule.forChild(routes)],
})
export class LayoutsModule {}
