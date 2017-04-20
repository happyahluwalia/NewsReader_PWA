import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nw-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  navLinks = ['Favorites', 'Preferences', 'Help', 'About'];
  
  constructor() { }

  ngOnInit() {
  }

}
