import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  openModal() {
    $('#ekspedisiModal').modal('show');
  }
  closeModal() {
    $('#ekspedisiModal').modal('hide');
  }
}
