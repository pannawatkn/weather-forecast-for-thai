import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';
import { StudentService } from '../services/student.service';
import { map, elementAt } from 'rxjs/operators';
import { Student } from '../student';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  students: any;
  student: Student;
  found: boolean;

  constructor(private studentService:StudentService ) { }

  ngOnInit() {
    this.getStudentList();
    this.found = false;
  }

  searchID(id: number){
    this.students.forEach(element => {
      if(element.id == id){
        this.found = true;
        return this.student = element;
      }
      else{
        this.found = false;
        return;
      }
    });
  }
  
  getStudentList() {
    this.studentService.getStudentList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(students => {
      this.students = students;
    });
  }

  foundID(){
    return this.found;
  }

}
