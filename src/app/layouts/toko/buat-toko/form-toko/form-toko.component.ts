import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-form-toko',
  templateUrl: './form-toko.component.html',
  styleUrls: ['./form-toko.component.scss']
})
export class FormTokoComponent implements OnInit {
  @Output() valueChange = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  back() {
    let a = {
      state: 'back'
    }

    this.valueChange.emit(a);
  }
}
