import { Observable } from 'rxjs/Observable';
import { PersonalPreferencesService } from './../shared/personal-preferences.service';
import { SocialShareComponent } from './../shared/social-share/social-share.component';
import { Component, OnInit, Input } from '@angular/core';
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
  @Input() currentTopic: string = 'General';
  news: News[] = [];
  favoriteTopic = [];
  navLinks = ['Favorites', 'Preferences', 'Help', 'About'];
  constructor(public dataService: DataService,
              public personalPreference: PersonalPreferencesService,
              private http: Http,
              private router1: Router,
              private dialog: MdDialog ) {}

  ngOnInit() {
    this.getHomePageNews(this.currentTopic);
     this.personalPreference.getUserFavoritesfromStorage();

  }

  getSelectedTopic(topic) {
    this.dataService.getNews(topic).subscribe(
       (data: any[] ) => this.news = data.splice(0, 4),
       (error) => console.log(error)
     );
    }

  getHomePageNews(category: string) {
    this.personalPreference.getHomePageNews(category).subscribe(
       (data: any[]) => this.news = this.news.concat(data),
       (error) => console.log('error getting home page')
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

  navigate(url: string) {
    window.open(url);
  }

}

