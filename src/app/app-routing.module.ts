import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';


import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';


import { UpdtComponent } from './updt/updt.component';

import { ContactModalComponent } from './contact-modal/contact-modal.component';
const routes: Routes = [
 
  {path: 'add', component: AddContactComponent},
 
  {path: 'contact',
  children:[
   
    // {path: 'list',component: ContactComponent},
  
    {path: 'employee',component: EmployeeComponent},
    {path: 'contact-list',component: EmployeeListComponent},
    {path: 'edit',component: UpdtComponent},
    {path: 'detail',component: ContactModalComponent},
  
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
