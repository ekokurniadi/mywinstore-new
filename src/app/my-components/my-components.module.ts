import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { CardProductComponent } from './card-product/card-product.component';
import { ProductRekomendasiComponent } from './product-rekomendasi/product-rekomendasi.component';
import { BottomNavigationBarComponent } from './bottom-navigation-bar/bottom-navigation-bar.component';
import { CategoryProductComponent } from './category-product/category-product.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { DaftarPesananContentComponent } from './daftar-pesanan-content/daftar-pesanan-content.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    CardProductComponent,
    ProductRekomendasiComponent,
    BottomNavigationBarComponent,
    CategoryProductComponent,
    DaftarPesananContentComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    CardProductComponent,
    ProductRekomendasiComponent,
    BottomNavigationBarComponent,
    CategoryProductComponent,
    DaftarPesananContentComponent
  ],
})
export class MyComponentsModule {}
