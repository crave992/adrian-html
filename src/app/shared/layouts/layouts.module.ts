import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FullPageComponent } from './full-page/full-page.component';

@NgModule({
  declarations: [
    FullPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
  ],
  exports: [
    FullPageComponent,
    RouterModule
  ]
})
export class LayoutsModule { }
