import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-toko',
  templateUrl: './dashboard-toko.component.html',
  styleUrls: ['./dashboard-toko.component.scss']
})
export class DashboardTokoComponent implements OnInit {
  items = [
    { title: 'Pesanan Baru', total: 74 },
    { title: 'Siap Dikirim', total: 23 },
    { title: 'Dikirim', total: 78 },
    { title: 'Dibatalkan', total: 2 },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
