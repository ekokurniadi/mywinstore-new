import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  menuItems = [
    {
      path:'/user',
      title:'Profile',
      icon:'account_circle',
      color:'#80f2ff',
      class:'',
    },
    {
      path:'daftar-pesanan',
      title:'Daftar Pesanan',
      icon:'assignment',
      color:'#0055cb',
      class:'',
    },
    {
      path:'notifikasi',
      title:'Notifikasi',
      icon:'notifications_none',
      color:'#51D29D',
      class:'',
    },
    {
      path:'chat',
      title:'Chat',
      icon:'question_answer',
      color:'#FF4051',
      class:'',
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  selectedIndex: number = 0;
  setIndex(index: number) {
    this.selectedIndex = index;
  }

}
