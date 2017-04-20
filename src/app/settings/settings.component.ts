import { DataService } from './../shared/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nw-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  private newsCategories: any[];
  private newsSources: any[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    // TODO: Get these values from cache if not then get the global values
      this.newsCategories = this.dataService.getNewsCategories();
      this.newsSources = this.dataService.getNewsSources();
  }

  onSaveSettings(newsCategory, newsSource, numberofArticles) {
    console.log(newsCategory);
    console.log(newsSource);
    console.log(numberofArticles);

  }
}
