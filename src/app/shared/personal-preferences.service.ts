import { NewsPref } from './NewsPref';
import { News } from './../model/news.model';
import { Injectable } from '@angular/core';

import { LocalStorageService } from 'angular-2-local-storage';

@Injectable()
export class PersonalPreferencesService {

  userFavorites: News[] = [];
  storedNewsPrefSettings: NewsPref[] = [];

  constructor(private persistenceService: LocalStorageService) { }

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
      this.persistenceService.set('favorite', this.userFavorites);
  }

  removeUserFavorite(oldFavorite: News) {
      const index = this.userFavorites.indexOf(oldFavorite);
      this.userFavorites.splice(index, 1);
      this.persistenceService.set('favorite', this.userFavorites);
  }

  getUserFavoritesfromStorage() {
    const storedFavorite = this.persistenceService.get('favorite');
    if (storedFavorite) {
        this.userFavorites = Object.keys(storedFavorite).map(key => storedFavorite[key]);
    }
  }

  setUserFavoritesinStorage() {
     this.persistenceService.set('favorite', this.userFavorites);
  }

  getUserSettings() {
    const storedSettings = this.persistenceService.get('settings');
    if (storedSettings) {
        this.storedNewsPrefSettings = Object.keys(storedSettings).map(key => storedSettings[key]);
    }
    return this.storedNewsPrefSettings;
  }

   saveUserSettings(userSettings: NewsPref[]) {
      this.persistenceService.set('settings', userSettings);
   }
}
