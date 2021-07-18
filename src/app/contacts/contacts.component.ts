import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  reports;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
  }


  onSubmit() {

    this.db.list('/report').push({ 
      report: this.reports
    });

    this.reports = '';
  }

}
