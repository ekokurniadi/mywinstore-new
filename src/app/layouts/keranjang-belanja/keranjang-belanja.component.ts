import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-keranjang-belanja',
  templateUrl: './keranjang-belanja.component.html',
  styleUrls: ['./keranjang-belanja.component.scss']
})
export class KeranjangBelanjaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openModalVoucher(){
    $('#modalVoucher').modal('show');
  }
  closeModalVoucher(){
    $('#modalVoucher').modal('hide');
  }

}
