import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { SET_LOCATION } from '../location-reducer';
import { NgForm } from '@angular/forms';

import { AngularFireDatabase } from '@angular/fire/database';
import { map, elementAt } from 'rxjs/operators';
import { ProvinceService } from '../services/province.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  loc: string;
  provinces;
  counts: number;

  constructor(
    private store: Store<any>,
    private db: AngularFireDatabase,
    private provinceService:ProvinceService
  ) { }

  ngOnInit() {
    this.store.dispatch({ type: SET_LOCATION, payload: "Bangkok" });
    this.getProvinceList();
  }

  search(searchForm: NgForm) {
    if (searchForm.invalid) {
      return;
    }
    this.store.dispatch({ type: SET_LOCATION, payload: this.loc });

    this.provinces.forEach(element => {
      if(element.name == this.loc){
        this.counts = element.count;
        this.counts += 1;
        this.db.list('/province').update(this.loc, {count: this.counts});
      }
    });
  }

  

  getProvinceList(){
    this.provinceService.getProvinceList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(provinces => {
      this.provinces = provinces;
    });
  }

}
