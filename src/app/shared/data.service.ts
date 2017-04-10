import { Injectable } from '@angular/core';
import {Http, Response } from '@angular/http';

import {Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { News } from '../model/news.model';

@Injectable()
export class DataService {
  private newsSource = ['the-next-web', 'bbc-news',
                        'bloomberg', 'cnn', 'cnbc', 'engadget', 'hacker-news'
                     ];
  constructor(private http: Http) { }


getNews() {
  const apiKey = '22c53888f1e84cee94131f5837cbfeda';


  return this.http.get('https://newsapi.org/v1/articles?source=' + this.newsSource[6] + '&apiKey=' + apiKey)
        .map(
          (response: Response) => {
                  const data = response.json().articles;
                  return data;
                }
        )
        .catch(
            (error: Response) => {
              //console.log(error);
              console.log('Application : DataService - Error in DataService=>getNews()');
              return Observable.throw('Http Error');
            }
        );
  }

}
