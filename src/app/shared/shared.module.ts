import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsModule } from './layouts/layouts.module';
import { ComponentsModule } from './components/components.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutsModule,
    ComponentsModule
  ],
  exports: [
    LayoutsModule,
    ComponentsModule
  ]
})
export class SharedModule { }
