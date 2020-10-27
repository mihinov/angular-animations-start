import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.scss'],
  animations: [

  ]
})
export class OpenCloseComponent implements OnInit {

  constructor() { }

  isOpen = true;
  number = 10;
  items: string[] = ['This is America'];

  toggle(): void {
    this.isOpen = !this.isOpen;
  }

  modifyNumber(n: number): void {
    this.number += n;
  }

  ngOnInit(): void {

  }

}
