import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-mobile',
  templateUrl: './nav-mobile.component.html',
  styleUrls: ['./nav-mobile.component.css']
})
export class NavMobileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  close_click(){
  
    var menu = document.getElementById('menu');
    menu.style.top = '-100vh';
  }

  menu_click(){
    var menu = document.getElementById('menu');
    menu.style.top = '0';
  }

}
