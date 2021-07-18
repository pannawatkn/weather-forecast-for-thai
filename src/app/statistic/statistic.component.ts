import { Component, OnInit } from '@angular/core';

import { ProvinceService } from '../services/province.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {

  provinces: any;

  constructor(private provinceService: ProvinceService) { }

  ngOnInit() {
    this.getStudentList();
  }

  getStudentList() {
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
