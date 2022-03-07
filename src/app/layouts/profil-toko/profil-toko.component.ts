import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil-toko',
  templateUrl: './profil-toko.component.html',
  styleUrls: ['./profil-toko.component.scss']
})
export class ProfilTokoComponent implements OnInit {
  index: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  setIndex(val: number) {
    this.index = val;
  }

}
