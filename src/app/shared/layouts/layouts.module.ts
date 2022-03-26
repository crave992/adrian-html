import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FullPageComponent } from './full-page/full-page.component';
import { ComponentsModule } from '../components/components.module';
import { SidebarPageComponent } from './sidebar-page/sidebar-page.component';

@NgModule({
  declarations: [
    FullPageComponent,
    SidebarPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    ComponentsModule
  ],
  exports: [
    FullPageComponent,
    SidebarPageComponent,
    RouterModule
  ]
})
export class LayoutsModule { }
