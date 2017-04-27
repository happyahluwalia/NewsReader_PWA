import { SocialShareComponent } from './../shared/social-share/social-share.component';
import { MdDialog } from '@angular/material';
import { PersonalPreferencesService } from './../shared/personal-preferences.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { News } from './../model/news.model';

@Component({
  selector: 'nw-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  favorites = [];
  // news: News[];
  @Output() onCategorySelection = new EventEmitter<string>();

  constructor(private personalPreference: PersonalPreferencesService,
              private dialog: MdDialog) { }

  ngOnInit() {
     this.personalPreference.getUserFavoritesfromStorage();
     this.favorites = this.personalPreference.getUserFavorites();

  }

  getSelectedNewsCategory(topic) {
    this.onCategorySelection.emit(topic);
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
