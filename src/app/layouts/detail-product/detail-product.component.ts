import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit {
  productBrand: string = "[KOMBO HEMAT] Redmi Note 9 Pro (6GB+64GB)64MP Quad Kamera Snapdragon 720G 6.67`` FHD+GaransiResmi"
  alamat: string = "DKI Jakarta, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta, Indonesia";
  constructor() { }

  ngOnInit(): void {
  }

}
