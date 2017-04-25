export interface NewsPref {
   category: string;
   source: {  name: string,  // Name of news source
              url: string,  // url of the news source
              subscribed: boolean  // has user subscribed to this
          }[];
   NoOfArticles: number;
 }
 // https://css-tricks.com/snippets/css/a-guide-to-flexbox/
