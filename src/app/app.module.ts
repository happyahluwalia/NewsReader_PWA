import { ShareButtonModule } from './sharebutton/share-button.module';
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './shared/data.service';
import { HeaderComponent } from './header/header.component';
import { NewspaneComponent } from './newspane/newspane.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { SocialShareComponent } from './shared/social-share/social-share.component';
import { SocialDirective } from './shared/social-share/social.directive';
import { PersonalPreferencesService } from './shared/personal-preferences.service';
import { HelpComponent } from './static/help/help.component';
import { AboutComponent } from './static/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewspaneComponent,
    FavoriteComponent,
    HomeComponent,
    SettingsComponent,
    SocialShareComponent,
    SocialDirective,
    HelpComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    ShareButtonModule,
    ReactiveFormsModule
  ],
  providers: [DataService, Title, PersonalPreferencesService],
  bootstrap: [AppComponent],
  entryComponents: [SocialShareComponent]
})
export class AppModule { }

// TODO : Menu not working
// TODO : Newspane component to be encapsulated in module
// TODO : Rename news pane to content pane, this will show either news or preference or favorite ... based on who is calling it
// TODO : Need to have the favorite topic section remain fixed while the news scrolls
// TODO : On selecting a favorite topic the news panel should scroll to the top
// TODO : Fixup UI when no http connection
// TODO : Fix the social share component into a different module such that it does not get loaded with app module,
//        Refer to notes on AOT compilation - https://material.angular.io/components/component/dialog

