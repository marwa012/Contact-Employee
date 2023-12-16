import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { ContactService } from "./contact.service";
import { Observable, of } from "rxjs";
import { Contact } from "./model/contact";
import { inject } from "@angular/core";


export const EmployeeResolver:ResolveFn<any>=
(route:ActivatedRouteSnapshot,state:RouterStateSnapshot,
    servicecontact:ContactService=inject(ContactService)):Observable<Contact>=>{
        const id=route.paramMap.get("id");
        if(id){
return servicecontact.getEmployee(Number(id));
        }else{
const employee:Contact={
    id:0,
    name:'',
    username:'',
    email:'',
    password:''

  }
  return of(employee);
        }

    }