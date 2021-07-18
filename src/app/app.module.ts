import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatToolbarModule,
  MatInputModule,
  MatTabsModule,
  MatCardModule,
  MatDividerModule,
  MatListModule
} from '@angular/material';

import { StoreModule } from '@ngrx/store';


import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactsComponent } from './contacts/contacts.component';
import { RegisterComponent } from './register/register.component';
import { WeatherComponent } from './weather/weather.component';
import { HelpComponent } from './help/help.component';
import { SearchComponent } from './search/search.component';
import { HowtoComponent } from './howto/howto.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentListComponent } from './student-list/student-list.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { locationReducer } from './location-reducer';
import { StatisticComponent } from './statistic/statistic.component';
import { ProvinceDetailsComponent } from './province-details/province-details.component';

@NgModule({
  declarations: [
    AppComponent, 
    HomepageComponent,
    ContactsComponent,
    RegisterComponent,
    WeatherComponent,
    HelpComponent,
    SearchComponent,
    HowtoComponent,
    StudentDetailsComponent,
    StudentListComponent,
    CurrentWeatherComponent,
    StatisticComponent,
    ProvinceDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    HttpClientModule,
    StoreModule.forRoot({
      loc: locationReducer
    }),
    MatInputModule,
    MatTabsModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatToolbarModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
