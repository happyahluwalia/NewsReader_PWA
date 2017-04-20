import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {MdIconRegistry} from '@angular/material';

@Component({
  selector: 'nw-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

 goHome() {
    this.router.navigate(['']);
 }
}
