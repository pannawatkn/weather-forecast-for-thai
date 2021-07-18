import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  studentID: string;
  studentName: string;
  studentProvince: string;

  data;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    
}

  onSubmit() {

    this.db.list('/student').push({ 
      id: this.studentID,
      name: this.studentName,
      province: this.studentProvince
    });

    this.studentID = '';
    this.studentName = '';
    this.studentProvince = '';

  }

}
