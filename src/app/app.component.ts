import { Component, OnInit } from '@angular/core';
import {Http, Response } from '@angular/http';

import {MdTabsModule} from '@angular/material';

import { DataService } from './shared/data.service';
import { News } from './model/news.model';

@Component({
  selector: 'body',
 // template: '<h1>{{title}}</h1>'
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'News';
  public news: News[];
  navLinks = ['Favorites', 'Preferences', 'Help', 'About'];
  Topics = [{title: '  Technology'}, {title: 'General News'}, {title: 'Sports'}, ];
  favoriteTopic = [];
  constructor(public dataService: DataService, private http: Http) {}

  ngOnInit() {
    /* this.dataService.getNews(topic.title).subscribe(
       (data: any[] ) => this.news = data,
       (error) => console.log(error)
     )*/
     this.getSelectedTopic({title: 'default'});
     this.favoriteTopic = this.dataService.getFavoriteTopic();

  }
  getSelectedTopic(topic) {
    this.dataService.getNews(topic).subscribe(
       (data: any[] ) => this.news = data,
       (error) => console.log(error)
     );
    }

  openMenuDialog() {
   // menu.show();
  }


}
//"{"status":"ok","source":"techcrunch","sortBy":"top","articles":[{"author":"Darrell Etherington","title":"Tesla shows off a new Panasonic-made low-profile residential solar panel","description":"Tesla is still hoping to begin installations of its solar roof tile product later this year, but that's not really a great option unless you're building new..","url":"https://techcrunch.com/2017/04/10/tesla-shows-off-a-new-panasonic-made-low-profile-residential-solar-panel/","urlToImage":"https://tctechcrunch2011.files.wordpress.com/2017/04/section-hero2x.jpg?w=764&h=400&crop=1","publishedAt":"2017-04-10T14:52:22Z"},{"author":"Sarah Perez","title":"Netflix reaches 75% of U.S. streaming service viewers, but YouTube is catching up","description":"According to new data from comScore released this morning, over half (53%) of Wi-Fi households in the U.S. are now using at least one over-the-top streaming..","url":"https://techcrunch.com/2017/04/10/netflix-reaches-75-of-u-s-streaming-service-viewers-but-youtube-is-catching-up/","urlToImage":"https://tctechcrunch2011.files.wordpress.com/2017/04/netflix-tv-mockup.jpg?w=764&h=400&crop=1","publishedAt":"2017-04-10T14:25:59Z"},{"author":"Mike Butcher","title":"Tributes pour in for Spotify’s Chris Bevington, victim of Stockholm terror attack","description":"Spotify CEO and cofounder Daniel Ek has paid a moving tribute to Chris Bevington, 41, who was among the four people killed in the Stockholm truck attack on..","url":"https://techcrunch.com/2017/04/10/tributes-pour-in-for-spotifys-chris-bevington-victim-of-stockholm-terror-attack/","urlToImage":"https://tctechcrunch2011.files.wordpress.com/2017/04/bevington.jpg?w=615&h=400&crop=1","publishedAt":"2017-04-10T12:31:01Z"},{"author":"Jon Russell","title":"Flipkart raises $1.4 billion from eBay, Microsoft and Tencent at an $11.6 billion valuation","description":"Following months of rumors, Indian e-commerce giant Flipkart has confirmed that it has raised $1.4 billion in new funding at a post-money valuation of $11.6..","url":"https://techcrunch.com/2017/04/10/flipkart-1-4-billion/","urlToImage":"https://tctechcrunch2011.files.wordpress.com/2014/12/flipkart-package1.jpg?w=764&h=400&crop=1","publishedAt":"2017-04-10T09:50:46Z"}]}"
