import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { FullPageComponent } from "src/app/shared/layouts/full-page/full-page.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  {
    path: '',
    component: FullPageComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
      },
      {
        path: 'login',
        pathMatch: 'full',
        component: LoginComponent,
        data: {
          title: 'Login',
        },
      }
    ]
  },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ],
})
export class AuthRoutingModule { }