import { NewsPref } from './../shared/NewsPref';
import { PersonalPreferencesService } from './../shared/personal-preferences.service';
import { DefaultNews } from './../shared/defaultNews';
import { DataService } from './../shared/data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, AbstractControl } from '@angular/forms';

import { MdSnackBar, MdSnackBarConfig } from '@angular/material';

@Component({
  selector: 'nw-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  private newsList: NewsPref[];

  @ViewChild('f') settingsForm: NgForm;

  constructor(private dataService: DataService,
              private personalPreferencesService: PersonalPreferencesService,
              private snackBar: MdSnackBar) { }

  ngOnInit() {
    // TODO: Get these values from cache if not then get the global values
    // These would be observables that on return would set the settingsForm values
      this.newsList = this.personalPreferencesService.getUserSettings();
      // If no usersettings saved then get the default
      if (this.newsList.length === 0) {
            this.newsList = DefaultNews.defaultNews;
      }

      // this.settingsForm.valueChanges.subscribe(value =>  console.log('value changed ' + value));
        // console.log(this.settingsForm.controls);
  }

  onSubmit(f: NgForm) {
     // Check if form is dirty
      if (f.dirty) {
            const myControls = f.controls;
            let i = 0;
            // Update the user preferences based on what he selected on the ui
            this.newsList.forEach(element => {
               // Check if the news category is dirty - i.e. each Tab on the UI
                if ((myControls[element.category]).dirty) {
                   // check if news websites were touched i.e. if any checkbox from the group is updated
                   if ((myControls[element.category].get('news')).dirty) {
                      let newsSubscription;
                      let index = 0;
                      // Read thru each news source and set it from the ui
                      element.source.forEach(newsSource => {
                             newsSubscription = (myControls[element.category].get('news')).get(element.category + '_' + index);
                             newsSource.subscribed = newsSubscription.value;
                             index = index + 1;
                      });

                   }
                   // check if the number of articles was touched - i.e. if slider was moved
                   if ((myControls[element.category].get('numberofArticles_' + i)).dirty) {
                     element.NoOfArticles = (myControls[element.category].get('numberofArticles_' + i)).value;
                   }

                   i = i + 1;
                }
            });
      }
     this.personalPreferencesService.saveUserSettings(this.newsList);
     const config = new MdSnackBarConfig();
     config.duration = 1000;
     this.snackBar.open('Settings saved', '', config);
  }

}
