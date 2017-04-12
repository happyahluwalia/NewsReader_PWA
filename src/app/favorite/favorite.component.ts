import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from './../shared/data.service';
import { News } from './../model/news.model';

@Component({
  selector: 'nw-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  favoriteCategories = [];
  // news: News[];
  @Output() onCategorySelection = new EventEmitter<string>();

  constructor(private dataService: DataService) { }

  ngOnInit() {
     this.favoriteCategories = this.dataService.getFavoriteCategories();

  }
  getSelectedNewsCategory(topic) {
    this.onCategorySelection.emit(topic);
  }
}
