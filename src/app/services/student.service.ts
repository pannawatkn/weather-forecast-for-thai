import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Student } from '../Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private dbPath = '/student';
 
  studentRef: AngularFireList<Student> = null;

  constructor(private db: AngularFireDatabase) { 
    this.studentRef = db.list(this.dbPath);
  }

  // createStudent(std: Student): void {
  //   this.StudentRef.push(std);
  // }
 
  // updateStudent(key: string, value: any): Promise<void> {
  //   return this.StudentRef.update(key, value);
  // }
 
  // deleteStudent(key: string): Promise<void> {
  //   return this.StudentRef.remove(key);
  // }
 
  getStudentList(): AngularFireList<Student> {
    return this.studentRef;
  }
 
  // deleteAll(): Promise<void> {
  //   return this.StudentRef.remove();
  // }

}