import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalAlamatComponent } from '../modal-alamat/modal-alamat.component';
declare var $: any;
@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit {
  productBrand: string = "[KOMBO HEMAT] Redmi Note 9 Pro (6GB+64GB)64MP Quad Kamera Snapdragon 720G 6.67`` FHD+GaransiResmi"
  alamat: string = "DKI Jakarta, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta, Indonesia";
  gambar = [
    {
      'image': '../../../assets/images/product/sample-product-5.jpg',
    },
    {
      'image': '../../../assets/images/product/sample-product-4.jpg',
    },
    {
      'image': '../../../assets/images/product/sample-product-3.jpg',
    },
    {
      'image': '../../../assets/images/product/sample-product-2.jpg',
    },
    {
      'image': '../../../assets/images/product/sample-product-6.jpg',
    },
  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  preview(image: any) {
    $('#modalPreviewImage').modal("show");
    $('#image-preview').attr("src", image);

  }

  closeModal() {
    $('#modalPreviewImage').modal("hide");
    $('#image-preview').attr("src", "");
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalAlamatComponent, {
      panelClass: 'icon-outside-modal',
      width: '100%',
    })
  }

}


