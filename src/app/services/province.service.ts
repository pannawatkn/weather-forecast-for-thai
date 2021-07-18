import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Province } from '../province';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {

  private dbPath = '/province';
 
  provinceRef: AngularFireList<Province> = null;

  constructor(private db: AngularFireDatabase) { 
    this.provinceRef = db.list(this.dbPath);
  }

  getProvinceList(): AngularFireList<Province> {
    return this.provinceRef;
  }
}
