import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  headers: HttpHeaders;
  constructor(
    public http: HttpClient
  ) {
    this.headers = new HttpHeaders();
    this.headers.append("Accept", 'application/json');
    this.headers.append("Content-Type", 'application/json');
    this.headers.append("Access-Control-Allow-Origin", '*');


   }

  

  

  getClassInfo(){
    return this.http.get('https://btihs-portal-backend.herokuapp.com/getClassInfo.php');

  }
  getAccount(){
    return this.http.get('https://btihs-portal-backend.herokuapp.com/getaccounts.php');
  }
  // students page
  getStudents(){
    return this.http.get('https://btihs-portal-backend.herokuapp.com/getStudents.php');
  }
  addStudent(data:any){
    return this.http.post('https://btihs-portal-backend.herokuapp.com/addStudent.php',data);
  }
  deleteStudent(id:any){
    return this.http.get('https://btihs-portal-backend.herokuapp.com/deleteStudent.php?id='+id);
  }
  searchStudent(id:any){
    return this.http.get('https://btihs-portal-backend.herokuapp.com/searchStudent.php?id='+id);
  }
  editStudent(id:any,data:any){
    return this.http.post('https://btihs-portal-backend.herokuapp.com/editStudent.php?id='+id,data);
  }




  // 
  //subjectpage
  getSingleSubject(id:any){
    return this.http.get('https://btihs-portal-backend.herokuapp.com/getSingleSubject.php?id='+id);
  }
  updateSubject(id:any,data:any){
    return this.http.post('https://btihs-portal-backend.herokuapp.com/updateSubject.php?id='+id,data);

  }
  searchSubject(id:any){
    return this.http.get('https://btihs-portal-backend.herokuapp.com/searchSubject.php?id='+id);
  }

  //

  searchClass(id:any){
    return this.http.get('https://btihs-portal-backend.herokuapp.com/searchClass.php?id='+id);
  }
  getSubjects(){
    return this.http.get('https://btihs-portal-backend.herokuapp.com/getSubjects.php');
  }

  // teacher page

  getTeachersData(){
    return this.http.get('https://btihs-portal-backend.herokuapp.com/getTeachersData.php');
  }
  searchTeacher(id:any){
    return this.http.get('https://btihs-portal-backend.herokuapp.com/searchTeacher.php?id='+id);
  }
  updateTeacher(id:any,data:any){
    return this.http.post('https://btihs-portal-backend.herokuapp.com/updateTeacher.php?id='+id,data);
  }

// 

  getUsers(){
    return this.http.get('https://btihs-portal-backend.herokuapp.com/getUsers.php');
  }

  deleteUser(id:any){
    return this.http.get('https://btihs-portal-backend.herokuapp.com/deleteUser.php?id='+id);
  }

  addSubject(data:any){
    return this.http.post('https://btihs-portal-backend.herokuapp.com/addSubject.php',data);
  }
  deleteSubject(id:any){
    return this.http.get('https://btihs-portal-backend.herokuapp.com/deleteSubject.php?id='+id);
  }
  getIndividualTeacher(id:any){
    return this.http.get('https://btihs-portal-backend.herokuapp.com/getIndividualTeacher.php?id='+id);
  }
  getIndividualStudent(id:any){
    return this.http.get('https://btihs-portal-backend.herokuapp.com/getIndividualStudent.php?id='+id);
  }

  getEnrolledStudents(id:any){
    return this.http.get('https://btihs-portal-backend.herokuapp.com/getEnrolledStudents.php?id='+id);
  }

  enrollToClass(data:any){
    return this.http.post('https://btihs-portal-backend.herokuapp.com/enrollToClass.php',data);
  }
  deleteEnrolledStudent(id:any){
    return this.http.get('https://btihs-portal-backend.herokuapp.com/deleteEnrolledStudent.php?id='+id);
  }

  






  getUserPassword(id:any){
    return this.http.get('https://btihs-portal-backend.herokuapp.com/getUserPassword.php?id='+id);
  }
  updateUserPassword(id:any,data:any){
    return this.http.post('https://btihs-portal-backend.herokuapp.com/updatePassword.php?id='+id,data);
  }
  searchUser(id:any){
    return this.http.get('https://btihs-portal-backend.herokuapp.com/searchUser.php?id='+id);
  }
  getStrand(){
    return this.http.get('https://btihs-portal-backend.herokuapp.com/getStrands.php');
  }
  getSY(){
    return this.http.get('https://btihs-portal-backend.herokuapp.com/getSY.php');
  }
  getLevel(){
    return this.http.get('https://btihs-portal-backend.herokuapp.com/getLevel.php');
  }
  addClass(data:any){
    return this.http.post('https://btihs-portal-backend.herokuapp.com/addClass.php',data);
  }
  deleteClass(id:any){
    return this.http.get('https://btihs-portal-backend.herokuapp.com/deleteClass.php?id='+id);
  }
  assignTeacher(data:any,id:any){
    return this.http.post('https://btihs-portal-backend.herokuapp.com/assignTeacher.php?id='+id,data);
  }

  // Teacher
  addTeacher(data:any){
    return this.http.post('https://btihs-portal-backend.herokuapp.com/addTeacher.php',data);
  }
  deleteTeacher(id:any){
    return this.http.get('https://btihs-portal-backend.herokuapp.com/deleteTeacher.php?id='+id);
  }
  addUserData(data:any){
    return this.http.post('https://btihs-portal-backend.herokuapp.com/addUserData.php',data);
  }



  // facultyDash

  getTeacherInfo(id:any){
    return this.http.get('https://btihs-portal-backend.herokuapp.com/getTeacherInfo.php?id='+id);
  }
  getClass(id:any){
    return this.http.get('https://btihs-portal-backend.herokuapp.com/getClass.php?id='+id);
  }
  getTeacherStudents  (id:any){
    return this.http.get('https://btihs-portal-backend.herokuapp.com/getTeacherStudents.php?id='+id);
  }


  // student page

  getClassesStudents(id:any){
    return this.http.get('https://btihs-portal-backend.herokuapp.com/getClassesStudents.php?id='+id);
  }
  updateGrades(data:any,id:any){
    return this.http.post('https://btihs-portal-backend.herokuapp.com/updateGrades.php?id='+id,data);
  }




  getAdvisories(){
    return this.http.get('https://btihs-portal-backend.herokuapp.com/getAdvisories.php');
  }
  addAdvisories(data:any){
    return this.http.post('https://btihs-portal-backend.herokuapp.com/addAdvisories.php',data);
  }
  deleteAdvisories(id:any){
    return this.http.get('https://btihs-portal-backend.herokuapp.com/deleteAdvisories.php?id='+id);
  }





  addSY(data:any){
    return this.http.post('https://btihs-portal-backend.herokuapp.com/addSY.php',data);
  }
  setActiveSY(id:any,data:any){
    return this.http.post('https://btihs-portal-backend.herokuapp.com/setActiveSY.php?id='+id,data);
  }
  
}
