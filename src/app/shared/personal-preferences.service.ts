import { News } from './../model/news.model';
import { Injectable } from '@angular/core';

@Injectable()
export class PersonalPreferencesService {

  userFavorites: News[] = [];

  constructor() { }

  getUserTopics() {
    // TODO : Check from cache
    //  return
  }

  saveUserTopics(topics: any[]) {

  }

  getUserFavorites() {
    return this.userFavorites;
  }

  saveUserFavorite(newFavorite: News) {
      this.userFavorites.push(newFavorite);
  }

  removeUserFavorite(oldFavorite: News) {
      const index = this.userFavorites.indexOf(oldFavorite);
      this.userFavorites.splice(index, 1);
  }

}
