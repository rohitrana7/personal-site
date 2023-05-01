import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpandRowDirective } from 'src/app/directives/expand-row.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ExpandRowDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
