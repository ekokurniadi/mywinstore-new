import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare interface RouteInfo {
  title: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { title: 'Semua', class: '' },
  { title: 'Belum Bayar', class: '' },
  { title: 'Dikemas', class: '' },
  { title: 'Dikirim', class: '' },
  { title: 'Dibatalkan', class: '' },
  { title: 'Diterima', class: '' },
];
@Component({
  selector: 'app-daftar-pesanan',
  templateUrl: './daftar-pesanan.component.html',
  styleUrls: ['./daftar-pesanan.component.scss'],
})
export class DaftarPesananComponent implements OnInit {
  public menuItems: any[] = [];
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
  }
  selectedIndex: number = 0;

  setIndex(index: number) {
    this.selectedIndex = index;
  }

}
