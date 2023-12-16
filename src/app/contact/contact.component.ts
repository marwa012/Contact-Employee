import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../model/contact';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  //dataSource = new MatTableDataSource();
 
 // contacts:Contact[];
 contacts:any; 
 dataSource = new MatTableDataSource();
 
  constructor(private servicecontact: ContactService, private formbuilder: FormBuilder,private router: Router) { }

  ngOnInit(): void {
   
  //  this.servicecontact.getALL().subscribe(data=>{
  //    this.contacts = data;
  //  })
 // this.servicecontact.getALL().subscribe(data=>{
  //  this.contacts = data;

  
  //})


}






}

