import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ExpandRowDirective } from 'src/app/directives/expand-row.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator'
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    ExpandRowDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatSortModule, 
    MatPaginatorModule,
    MatCheckboxModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatSortModule, 
    MatPaginatorModule,
    MatCheckboxModule
  ]
})
export class SharedModule { }
