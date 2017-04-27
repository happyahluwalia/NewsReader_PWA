import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nw-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  items: string[] = ['Read news in various categories',
                      'Mark favorite certain news item for reading later',
                      'Share the news on Facebook, twitter or Whatsapp',
                      'Using settings option - you can select the news source in each category',
                      'Got to Favorite screen and read thru all your favorites and unfavorite them when done.'
                    ];
  constructor() { }

  ngOnInit() {
  }

}
