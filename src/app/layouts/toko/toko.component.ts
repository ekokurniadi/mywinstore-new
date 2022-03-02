import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toko',
  templateUrl: './toko.component.html',
  styleUrls: ['./toko.component.scss']
})
export class TokoComponent implements OnInit {
  menuItems = [
    {
      path: '/toko',
      title: 'Dashboard',
      icon: 'dashboard',
      color: '#80f2ff',
      class: '',
    },
    {
      path: 'buat-toko',
      title: 'Buat Toko',
      icon: 'store',
      color: '#0055cb',
      class: '',
    },
    {
      path: 'tambah-produk',
      title: 'Tambah Produk',
      icon: 'library_add',
      color: '#51D29D',
      class: '',
    },
    {
      path: 'kelola-produk',
      title: 'Kelola Produk',
      icon: 'shop_two',
      color: '#FF4051',
      class: '',
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }


  selectedIndex: number = 0;
  setIndex(index: number) {
    this.selectedIndex = index;
  }

}
