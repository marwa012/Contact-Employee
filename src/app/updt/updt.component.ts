import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updt',
  templateUrl: './updt.component.html',
  styleUrls: ['./updt.component.scss']
})
export class UpdtComponent implements OnInit {
  
  constructor(private servicecontact: ContactService,private router:ActivatedRoute,
    private route:Router) { }
  editStudent=new FormGroup({
    name:new FormControl(''),
    username:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),
  })
  
  message:boolean=false;

  ngOnInit(): void {
    console.log(this.router.snapshot.params['id']);
    this.servicecontact.getById(this.router.snapshot.params['id']).subscribe((result:any)=>{
     // console.log(result);
     this.editStudent=new FormGroup({
        name:new FormControl(result['name']),
        username:new FormControl(result['username']),
        email:new FormControl(result['email']),
        password:new FormControl(result['password']),
      })
    });
  }
  updateData(){
   // this.servicecontact.
   console.log(this.editStudent.value)
   this.servicecontact. updateData(this.router.snapshot.params['id'],this.editStudent.value)
   .subscribe((result)=>{
    console.log(result);
    this.route.navigate(["/contact/contact-list"]);
   })
  
  }
}
