import { NgModule } from "@angular/core";
import { MaterialModule } from "../@config/shared/material.module";
import { SharedModule } from "../@config/shared/shared.module";
import { AdminRoutingModule } from "./admin-routing.module";
import { AdminComponent } from './admin.component';
import { LoginComponent } from "./auth/login/login.component";

@NgModule({
  declarations: [
    AdminComponent,
    LoginComponent,
  ],
  imports: [
    AdminRoutingModule,
    SharedModule
  ],
  exports: [
    AdminRoutingModule,
    SharedModule
  ]
})

export class AdminModule {}
