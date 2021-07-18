import { Component, OnInit } from '@angular/core';
import { SET_LOCATION } from '../location-reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  
  loc: string;
  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch({ type: SET_LOCATION, payload: "Bangkok" });
  }


}
