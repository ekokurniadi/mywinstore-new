import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keranjang-belanja-card',
  templateUrl: './keranjang-belanja-card.component.html',
  styleUrls: ['./keranjang-belanja-card.component.scss']
})
export class KeranjangBelanjaCardComponent implements OnInit {
  productBrand: string = "[KOMBO HEMAT] Redmi Note 9 Pro (6GB+64GB)64MP Quad Kamera Snapdragon 720G 6.67`` FHD+GaransiResmi";
  constructor() { }

  ngOnInit(): void {
  }

}
