import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import {MdIconRegistry} from '@angular/material';
import {MdTooltipModule} from '@angular/material';

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
  constructor(public dataService: DataService, private http: Http) {}

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
       (data: any[] ) => this.news = data,
       (error) => console.log(error)
     );
    }


}

