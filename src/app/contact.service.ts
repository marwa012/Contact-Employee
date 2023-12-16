import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { Contact } from './model/contact';
import { MatTableDataSource } from '@angular/material/table';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  base_path = 'http://localhost:9000/';

  constructor(private http: HttpClient) { }
  private refreshData = new Subject<void>();
  get refreshNedeed() {
    return this.refreshData;
  }
  dataSource = new MatTableDataSource();
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  getALL():Observable<any>{
    return this.http.get<any>(this.base_path+`contact/getall`)
      }
      create(contact:Contact){
        return this.http.post<Contact>(`${this.base_path}contact/save/`,contact)
      }
      public saveEmployee(employee:Contact):Observable<Contact>{
    return this.http.post<Contact>(`${this.base_path}contact/save`,employee)
    
      }
public getEmployees():Observable<Contact[]>{
return this.http.get<Contact[]>(`${this.base_path}contact/getall`)
}
public deleteEmployee(id:number){
  return this.http.delete(`${this.base_path}contact/delete/${id}`)


}


    //  delete(id:Contact):Observable<void>{
    //   return this.http.delete<void>(`${this.base_path}contact/delete/${id}`)
    //  }
     update(contact:Contact):Observable<Contact>{
      return this.http.put<Contact>(`${this.base_path}contact/update/`,contact)
    }
   viewUser(id:string){
    return this.http.get(this.base_path+'contact/'+id)
   }
   listUsers(){
   return this.http.get(this.base_path+'contact/getall')
   }
   public getEmployee(id:number){

    return this.http.get<Contact>(`${this.base_path}contact/getone/${id}`)
   }
   public updateEmployee(contact: Contact){
    return this.http.put<Contact>(`${this.base_path}contact/updatecontact/`,contact)

   }
   public updateEmpl(contact: Contact){
    return this.http.put<Contact>(`${this.base_path}contact/updateconta/`,contact)
   }
  
   getById(id:number){
    return this.http.get(`${this.base_path}contact/getshow/${id}`)
   }
   updateData(id:number,data:any){
    return this.http.put(`${this.base_path}contact/update/${id}`,data)
   }

  show(id:number){
    return this.http.get(`${this.base_path}contact/getshow/${id}`)
  }
 


}
