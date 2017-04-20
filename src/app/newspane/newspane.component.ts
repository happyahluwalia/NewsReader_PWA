import { SocialShareComponent } from './../shared/social-share/social-share.component';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

import {MdIconRegistry} from '@angular/material';
import { MdTooltipModule, MdDialog, MdDialogConfig } from '@angular/material';

import { News } from '../model/news.model';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'nw-newspane',
  templateUrl: './newspane.component.html',
  styleUrls: ['./newspane.component.css']
})
export class NewspaneComponent implements OnInit {
  news: News[];
  favoriteTopic = [];
  navLinks = ['Favorites', 'Preferences', 'Help', 'About'];
  constructor(public dataService: DataService,
              private http: Http,
              private router1: Router,
              private dialog: MdDialog ) {}

  ngOnInit() {
    /* this.dataService.getNews(topic.title).subscribe(
       (data: any[] ) => this.news = data,
       (error) => console.log(error)
     )*/
     this.getSelectedTopic({title: 'default'});
     this.favoriteTopic = this.dataService.getFavoriteCategories();
  }
  getSelectedTopic(topic) {
    this.dataService.getNews(topic).subscribe(
       (data: any[] ) => {this.news = data; console.log(this.news); },
       (error) => console.log(error)
     );
    }

  openSharePopup(url, title) {
      const dialogRef = this.dialog.open(SocialShareComponent);
      dialogRef.componentInstance.title = title;
      dialogRef.componentInstance.url = url;
      dialogRef.afterClosed()
        .subscribe(result => console.log(result));
  }

}

