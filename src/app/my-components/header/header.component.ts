import { Component, OnInit,HostListener } from '@angular/core';
declare var $: any;
@HostListener('window:scroll', ['$event'])
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor() {}
  ngOnInit(): void {

  }

  openModal(){
    $('#modalPencarian').modal('show');
  }
  closeModal(){
    $('#modalPencarian').modal('hide');
  }




}
