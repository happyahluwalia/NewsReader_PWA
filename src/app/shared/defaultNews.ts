import { NewsPref } from './NewsPref';
export class DefaultNews  {

   public static defaultNews: NewsPref[]= [{
                  category : 'Home',
                  source : [{ name: 'ABC News', url: 'abc-news-au', subscribed: true},
                            { name: 'Associated Press', url: 'associated-press', subscribed: false},
                            { name: 'BBC News', url: 'bbc-news', subscribed: false},
                            { name: 'CNN', url: 'cnn', subscribed: true},
                            { name: 'Focus', url: 'focus', subscribed: false}
                        ],
                  NoOfArticles : 3
                },
                {
                  category : 'Technology',
                  source : [{ name: 'Ars Technica', url: 'ars-technica', subscribed: false},
                            { name: 'Engadget', url: 'engadget', subscribed: false},
                            { name: 'Hacker News', url: 'hacker-news', subscribed: false},
                            { name: 'Recode', url: 'recode', subscribed: false},
                            { name: 'T3n', url: 't3n', subscribed: false}
                        ],
                  NoOfArticles : 4
                },
                {
                  category : 'Sports',
                  source : [{ name: 'ESPN', url: 'espn', subscribed: false},
                            { name: 'BBC Sport', url: 'bbc-sport', subscribed: false},
                            { name: 'Four Four Two', url: 'four-four-two', subscribed: false},
                            { name: 'NFL', url: 'nfl-news', subscribed: false},
                            { name: 'Talksport', url: 'talksport', subscribed: false}
                        ],
                  NoOfArticles : 5
                }
                ];

   public static getNewsCategories() {
     const category: string[] = [];
     DefaultNews.defaultNews.forEach(element => {
         category.push(element.category);
     });
     return category;
   }

  /* constructor() {
       const GeneralNews: NewsPref = {
                  category : 'General',
                  source : [{ name: 'ABC News', url: 'abc-news-au', subscribed: false},
                            { name: 'Associated Press', url: 'associated-press', subscribed: false},
                            { name: 'BBC News', url: 'bbc-news', subscribed: false},
                            { name: 'CNN', url: 'cnn', subscribed: false},
                            { name: 'Focus', url: 'focus', subscribed: false}
                        ],
                  NoOfArticles : 4
                };

       this.defaultNews.push(GeneralNews);

       const technologyNews: NewsPref = {
                  category : 'Technology',
                  source : [{ name: 'Ars Technica', url: 'ars-technica', subscribed: false},
                            { name: 'Engadget', url: 'engadget', subscribed: false},
                            { name: 'Hacker News', url: 'hacker-news', subscribed: false},
                            { name: 'Recode', url: 'recode', subscribed: false},
                            { name: 'T3n', url: 't3n', subscribed: false}
                        ],
                  NoOfArticles : 4
                };
       this.defaultNews.push(technologyNews);

       const sportsNews: NewsPref = {
                  category : 'Sports',
                  source : [{ name: 'ESPN', url: 'espn', subscribed: false},
                            { name: 'BBC Sport', url: 'bbc-sport', subscribed: false},
                            { name: 'Four Four Two', url: 'four-four-two', subscribed: false},
                            { name: 'NFL', url: 'nfl-news', subscribed: false},
                            { name: 'Talksport', url: 'talksport', subscribed: false}
                        ],
                  NoOfArticles : 4
                };

       this.defaultNews.push(sportsNews);
   }

   getdefaultNews() {
     return this.defaultNews;
   }
*/
}
