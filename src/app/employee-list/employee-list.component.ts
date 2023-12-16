import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactService } from '../contact.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Contact } from '../model/contact';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ContactModalComponent } from '../contact-modal/contact-modal.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  contacts:any;
  lessons: Contact[];
  dataSource!:MatTableDataSource<any>
  
  displayedColumns: string[] = ['id', 'name', 'username', 'email','password','edit','delete','open'];
  @ViewChild(MatSort) matsort! : MatSort;
  constructor(private servicecontact: ContactService,private router:Router, 
    private matdialog:MatDialog, private modalService: NgbModal) {
   }

  ngOnInit(): void {
    this.getEmployeeList();
  }
  updateEmpl(id:number):void{
this.router.navigate(["/contact/edit",{id:id}]);
  }
  // show(id:number):void{
  //   this.router.navigate(["/contact/detail",{id:id}]);
  // }
  deleteEmployee(id:number):void{
    
//console.log(id);
Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.value) {
    this.servicecontact.deleteEmployee(id).subscribe(res => {
      console.log(res);
      this.getEmployeeList();
    });
    Swal.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )
  }
})
  }

// this.servicecontact.deleteEmployee(id).subscribe(
//   {next:(res)=>{
//     console.log(res);
//     this.getEmployeeList();
    
//   },

// }
// );
  
  getEmployeeList():void{
    this.servicecontact.getEmployees().subscribe((res:Contact[])=>{
        console.log(res);
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort=this.matsort
    //      this.contacts=new MatTableDataSource(res)
  //  this.dataSource.sort=this.matsort;
        
      },
    )

  
  }
  filterData($event:any){
    this.dataSource.filter=$event.target.value;

  }

open(lesson: Contact) {
    const modalRef = this.modalService.open(ContactModalComponent);
    modalRef.componentInstance.lesson = lesson;
  }
}
