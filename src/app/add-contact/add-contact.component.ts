import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import {  FormGroup, Validators,FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {

  constructor(private servicecontact: ContactService,private formbuilder: FormBuilder, private router: Router) { }
  data:any


  form = new FormGroup({
    name: new FormControl('',[Validators.required]),
    username: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
  })

  ngOnInit(): void {
 

  }
  submit(){
    this.data= this.form.value
    console.log(this.data)
    this.servicecontact.create(this.data).subscribe(data=>{
      console.log(data)
    })
    this.router.navigate(["/contact/contact-list"]);
  }

}
