import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-alamat',
  templateUrl: './modal-alamat.component.html',
  styleUrls: ['./modal-alamat.component.scss']
})
export class ModalAlamatComponent implements OnInit {
  page: any;

  constructor(
    public dialogRef: MatDialogRef<ModalAlamatComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  daftarAlamat() {
    this.page = 0;
  }

  ubahAlamat() {
    this.page = 2;
  }

  displayCounter(e: any) {
    if (e.state == 'back') {
      this.page = 0;
    }
  }

  closePopup() {
    this.dialogRef.close();
  }



}
