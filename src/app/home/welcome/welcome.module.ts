import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import { SharedModule } from 'src/app/@config/shared/shared.module';
import { WelcomeProductComponent } from './welcome-product/welcome-product.component';
import { WelcomeSectionComponent } from './welcome-section/welcome-section.component';


@NgModule({
  declarations: [
    WelcomeComponent,
    WelcomeProductComponent,
    WelcomeSectionComponent
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    SharedModule
  ]
})
export class WelcomeModule { }
