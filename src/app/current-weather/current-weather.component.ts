import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { WeatherService } from '../services/weather.service';

import { AngularFireDatabase } from '@angular/fire/database';
import { map, elementAt } from 'rxjs/operators';
import { ProvinceService } from '../services/province.service';
import { Province } from '../province';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {

  loc$: Observable<string>;
  @Input() loc: string;
  currentWeather: any = <any>{};
  msg: string;

  @Input() provinces;
  province: Province;

  constructor(
    private store: Store<any>,
    private weatherService: WeatherService,
    private db: AngularFireDatabase,
    private provinceService:ProvinceService
  ) {
    this.loc$ = store.pipe(select('loc'));
    this.loc$.subscribe(loc => {
      this.loc = loc;
      this.searchWeather(loc); 
      this.getProvinceList();    
    })
  }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    this.getProvinceList();
    this.searchWeather(this.loc);
  }
  
  searchWeather(loc: string) {
    this.msg = '';
    this.currentWeather = {};
    this.weatherService.getCurrentWeather(loc)
      .subscribe(res => {
        this.currentWeather = res;
      // }, err => {
      //   if (err.error && err.error.message) {
      //     alert(err.error.message);
      //     this.msg = err.error.message;
      //     return;
      //   }
      //   alert('Failed to get weather.');
      }, () => {
    })
  }

  resultFound() {
    return Object.keys(this.currentWeather).length > 0;
  }


  getProvinceList(){

    if(this.provinces != null){
      this.provinces.forEach(element => {
        if(element.name == this.loc){
          this.province = element;
        }
      });
    }
    
  }
}