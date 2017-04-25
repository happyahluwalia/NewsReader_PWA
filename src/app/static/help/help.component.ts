import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nw-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  items: string[] = ['Make a footer for home page with a filter pipe on categories',
                      'home page should get a news based on categories / preferences',
                      'store preferences',
                      'save favorites',
                      '',
                      'google analytics?'
                    ]
  constructor() { }

  ngOnInit() {
  }

}
