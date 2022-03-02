import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-modal-voucher',
  templateUrl: './modal-voucher.component.html',
  styleUrls: ['./modal-voucher.component.scss']
})
export class ModalVoucherComponent implements OnInit {

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
