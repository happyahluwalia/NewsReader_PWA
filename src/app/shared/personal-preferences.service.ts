import { Observable } from 'rxjs/Observable';
import { DataService } from './data.service';
import { NewsPref } from './NewsPref';
import { News } from './../model/news.model';
import { Injectable } from '@angular/core';

import { LocalStorageService } from 'angular-2-local-storage';

@Injectable()
export class PersonalPreferencesService {
    http: any;

  userFavorites: News[] = [];
  storedNewsPrefSettings: NewsPref[] = [];

  constructor(private persistenceService: LocalStorageService,
              private dataService: DataService) { }

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

  getHomePageNews(category: string) {
      let bgetDefaultHomePage = true;
      const source: Observable<any>[] = [];
      // Get users preferences
      const storedSettings = this.persistenceService.get('settings');
//       console.log(storedSettings);

      if (storedSettings) {
         Object.keys(storedSettings).map(key => {
                                 const myPref: NewsPref = storedSettings[key];
                                 // Find the home page urls he has subscribed too..
                                 if (myPref.category === category) {
                                      myPref.source.map(element => {
                                           if (element.subscribed) {
                                               const myObservable = this.dataService.getNewswithURL(element.url);
                                               source.push(myObservable.map(function test(data, index) {
                                                                                           return data.splice(0, myPref.NoOfArticles);
                                                                                       }));
                                               // source.push(this.dataService.getNewswithURL(element.url));
                                              }
                                        });
                                    }
                              });
          // Just in case user has subscribed to none of the home page urls then we show the default.
          if (source.length !== 0) {
            bgetDefaultHomePage = false;
          }

          return Observable.merge(...source);
          /*const source1 = this.dataService.getNews('Technology');
          const source2 = this.dataService.getNews('Sports');
          const tmp: Observable<any>[] = [source1, source2];
          return Observable.merge(...tmp);*/
        }
        if (bgetDefaultHomePage) {
            return this.dataService.getDefaultNews();
        }


  }
}
