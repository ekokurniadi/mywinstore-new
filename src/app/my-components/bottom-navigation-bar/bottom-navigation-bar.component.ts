import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-navigation-bar',
  templateUrl: './bottom-navigation-bar.component.html',
  styleUrls: ['./bottom-navigation-bar.component.scss']
})
export class BottomNavigationBarComponent implements OnInit {
  selected:number=0;

  constructor() { }

  ngOnInit(): void {
  }

  setSelected(index:number){
    this.selected = index;
  }

}
