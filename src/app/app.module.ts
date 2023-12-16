import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ContactComponent } from './contact/contact.component';
import {HttpClientModule} from '@angular/common/http';
import { AddContactComponent } from './add-contact/add-contact.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {ActivatedRoute, RouterModule} from '@angular/router';



import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdtComponent } from './updt/updt.component';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';
import { ContactModalComponent } from './contact-modal/contact-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AddContactComponent,

    
    EmployeeComponent,
    EmployeeListComponent,
    
    UpdtComponent,
   
    MatConfirmDialogComponent,
    ContactModalComponent,
    

  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    Ng2OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
