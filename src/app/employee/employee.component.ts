import { Component, OnInit } from '@angular/core';
import { Contact } from '../model/contact';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
 
  
  employee:Contact={
    id:0,
    name:'',
    username:'',
    email:'',
    password:''

  }
  
 // employee:any

  constructor(private servicecontact: ContactService,
    private router:Router,private activatedRoute:ActivatedRoute,private formbuilder: FormBuilder) { }

  ngOnInit(): void {
 

  
  }
  saveEmployee(employeeForm:NgForm):void{
   
 
      this.servicecontact.saveEmployee(this.employee).subscribe(
        (res:Contact)=>{
          console.log(res);
          employeeForm.reset();
         this.router.navigate(["/contact/contact-list"]);
        },
     
    
      );
   //   this.router.navigate(["/contact/contact-list"]); 


  }
 

}
