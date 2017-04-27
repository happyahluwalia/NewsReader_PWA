import { NewsPref } from './NewsPref';
import { DefaultNews } from './defaultNews';
import { Injectable } from '@angular/core';
import {Http, Response } from '@angular/http';

import {Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { News } from '../model/news.model';

@Injectable()
export class DataService {
 /* private newsSource = ['the-next-web', 'bbc-news',
                        'bloomberg', 'cnn', 'cnbc', 'engadget', 'hacker-news'
                     ];*/
  private technologySource = ['the-next-web', 'hacker-news'];
  private newsSource = ['bbc-news', 'cnn'];
  private sportsSource = ['bbc-sport', 'football-italia'];
  private newsCategories = ['General', 'Technology', 'Sports', 'Nature', 'Science'];

  private apiKey = '22c53888f1e84cee94131f5837cbfeda';
  constructor(private http: Http) { }


getNews(newsTopic: string) {
  const source = this.getSource(newsTopic);
  return this.http.get('https://newsapi.org/v1/articles?source=' + source + '&apiKey=' + this.apiKey)
        .map(
          (response: Response) => {
                  const data = response.json().articles;
                  return data;
                }
        )
        .catch(
            (error: Response) => {
              console.log('Application : DataService - Error in DataService=>getNews()');
              return Observable.throw('Http Error');
            }
        );
  }

  getNewswithURL(url: string) {
     return this.http.get('https://newsapi.org/v1/articles?source=' + url + '&apiKey=' + this.apiKey)
        .map(
          (response: Response) => {
                  const data = response.json().articles;
                  return data;
                }
        )
        .catch(
            (error: Response) => {
              console.log('Application : DataService - Error in DataService=>getNews()');
              return Observable.throw('Http Error');
            }
        );
  }
  getDefaultNews() {
    return this.getNews('General');
  }

 getFavoriteCategories() {
   return Observable.create(function(observer){
     observer.next(['Technology', 'General News', 'Sports']);
   });
 }
 private getSource(newsTopic: string){
     switch (newsTopic) {
        case 'Technology':
              return this.technologySource[0];
        case 'General News': return this.newsSource[0];
        case 'Sports' : return this.sportsSource[0];
        default: return this.newsSource[1];
     }
 }

  getNewsCategories() {
     const categoryArray: string[] = [];
     const news = DefaultNews.defaultNews;
     news.forEach(element => {
       categoryArray.push(element.category);
     });

    return categoryArray;
    //return this.newsCategories;
  }

  getNewsSources() {
     return Array.prototype.concat(this.newsSource, this.sportsSource, this.technologySource);
  }

}
