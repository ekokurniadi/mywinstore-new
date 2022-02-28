import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent implements OnInit {
  products:number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  constructor() { }

  ngOnInit(): void {
  }

}
