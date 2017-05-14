import { FavoriteModule } from './favorite/favorite.module';
import { SharedModule } from './shared/shared.module';
import { SettingsModule } from './settings/settings.module';
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
import { HomeComponent } from './home/home.component';
import { PersonalPreferencesService } from './shared/personal-preferences.service';
import { HelpComponent } from './static/help/help.component';
import { AboutComponent } from './static/about/about.component';

import { LocalStorageModule } from 'angular-2-local-storage';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewspaneComponent,
    HomeComponent,
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
    FavoriteModule,
    SettingsModule,
    SharedModule,
    ReactiveFormsModule,
    LocalStorageModule.withConfig({
            prefix: 'new',
            storageType: 'localStorage'
        })
  ],
  providers: [DataService, Title, PersonalPreferencesService],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }

// TODO : Newspane component to be encapsulated in module
// TODO : On selecting a favorite topic the news panel should scroll to the top
// TODO : Fixup UI when no http connection

