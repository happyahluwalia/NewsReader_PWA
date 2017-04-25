import { PersonalPreferencesService } from './../shared/personal-preferences.service';
import { SocialShareComponent } from './../shared/social-share/social-share.component';
import { Component, OnInit, OnDestroy } from '@angular/core';
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
export class NewspaneComponent implements OnInit, OnDestroy {
  news: News[];
  favoriteTopic = [];
  navLinks = ['Favorites', 'Preferences', 'Help', 'About'];
  constructor(public dataService: DataService,
              public personalPreference: PersonalPreferencesService,
              private http: Http,
              private router1: Router,
              private dialog: MdDialog ) {}

  ngOnInit() {
    /* this.dataService.getNews(topic.title).subscribe(
       (data: any[] ) => this.news = data,
       (error) => console.log(error)
     )*/
     this.getSelectedTopic({title: 'default'});
     // this.favoriteTopic = this.dataService.getFavoriteCategories();
  }

  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.

  }

  getSelectedTopic(topic) {
    this.dataService.getNews(topic).subscribe(
       (data: any[] ) => this.news = data.splice(0, 4),
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

  markFavorite(currentNews: News) {
     currentNews.favorite = true;
     this.personalPreference.saveUserFavorite(currentNews);
  }

  unmarkFavorite(currentNews: News) {
     currentNews.favorite = false;
     this.personalPreference.removeUserFavorite(currentNews);
  }

}

