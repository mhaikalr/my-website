import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  tabs = ['About Me', 'Education & Experience', 'Hobbies & Interests', 'Contact']
  activeIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
