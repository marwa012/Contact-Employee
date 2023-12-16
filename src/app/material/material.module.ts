import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';


const MaterialComponents=[
  MatButtonModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatPaginatorModule,
 MatSortModule,
 MatDialogModule,
 MatToolbarModule
];

@NgModule({
  
  imports: [MaterialComponents
  
  ],
  exports:[MaterialComponents]
})
export class MaterialModule { }
