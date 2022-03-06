import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  items = [
    {
      title: 'Handphone & Tablet',
      itemDatas: ['Aksesoris Handphone', 'Aksesoris Tablet'],
    },
    {
      title: 'Handphone',
      itemDatas: ['Android OS', 'IOS', 'Windows Phone'],
    },
    {
      title: 'Tablet',
      itemDatas: ['Android OS', 'IOS', 'Windows Phone'],
    },
    {
      title: 'Komponen Handphone',
      itemDatas: ['Android OS', 'IOS', 'Windows Phone'],
    },
    {
      title: 'Komponen Tablet',
      itemDatas: ['Android OS', 'IOS', 'Windows Phone'],
    },
    {
      title: 'Power Bank',
      itemDatas: ['Android OS', 'IOS', 'Windows Phone'],
    },

  ];


  constructor() { }

  ngOnInit(): void {
  }

  openModal() {
    $('#modalKategori').modal('show');
  }
  closeModal() {
    $('#modalKategori').modal('hide');
  }

}
