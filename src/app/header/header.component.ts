import { Component, OnInit } from '@angular/core';
import {MdIconRegistry} from '@angular/material';

@Component({
  selector: 'nw-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

 navigate(caller: string) {
   alert(caller + ' clicked');
 }
}
