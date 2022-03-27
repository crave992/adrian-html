import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizontalComponent } from './horizontal/horizontal.component';
import { RouterModule } from '@angular/router';
import { HomeHeaderComponent } from './templates/home-header/home-header.component';
import { FooterComponent } from './templates/footer/footer.component';

@NgModule({
  declarations: [
    HorizontalComponent,
    HomeHeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutsModule { }
