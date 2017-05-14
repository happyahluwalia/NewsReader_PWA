import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {Http, Response } from '@angular/http';


import {MdTabsModule} from '@angular/material';

import { DataService } from './shared/data.service';
import { News } from './model/news.model';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'News';
  news: News[];

  Topics = [{title: '  Technology'}, {title: 'General News'}, {title: 'Sports'}, ];
  favoriteTopic = [];
  constructor(public dataService: DataService, private http: Http,
              private titleService: Title) {}

  ngOnInit() {
    // https://angular.io/docs/ts/latest/cookbook/set-document-title.html
    this.setTitle('Happy  News');
  }

  private setTitle(strTitle: string) {
    this.titleService.setTitle(strTitle);
  }
  openMenuDialog() {
   // menu.show();
  }


}
