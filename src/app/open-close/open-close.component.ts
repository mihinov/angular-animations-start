import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { itemAnimation } from './open-close.animation';

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.scss'],
  animations: [
    itemAnimation
  ]
})
export class OpenCloseComponent implements OnInit {

  constructor() { }

  form: FormGroup = new FormGroup({
    list_text: new FormControl('This is America')
  });
  number = 10;
  items: string[];

  modifyNumber(n: number): void {
    this.number += n;
  }

  ngOnInit(): void {

    if (localStorage.getItem('items')) {
      this.items = JSON.parse(localStorage.getItem('items'));
    } else {
      this.items = ['Первая запись'];
      this.setLocaleStorage();
    }

  }

  addItem(): void {
    this.items.push(this.form.value.list_text);
    this.setLocaleStorage();
  }

  removeItem(): void {
    this.items.pop();
    this.setLocaleStorage();
  }

  setLocaleStorage(): void {
    localStorage.setItem('items', JSON.stringify(this.items));
  }

}
