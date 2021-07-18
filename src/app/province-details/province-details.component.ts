import { Component, OnInit, Input } from '@angular/core';

import { ProvinceService } from '../services/province.service';
import { Province } from '../province';

@Component({
  selector: 'app-province-details',
  templateUrl: './province-details.component.html',
  styleUrls: ['./province-details.component.css']
})
export class ProvinceDetailsComponent implements OnInit {
  
  @Input() province: Province;

  constructor(private provinceService: ProvinceService) { }

  ngOnInit() {
  }

}
