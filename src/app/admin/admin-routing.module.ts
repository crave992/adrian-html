import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { VerticalLayout1Component } from "../@config/layouts/vertical-layout1/vertical-layout1.component";
import { LoginComponent } from "./auth/login/login.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: VerticalLayout1Component,
    pathMatch: 'full',
    children: [
      {
        path: '',
        component: LoginComponent
      }
    ]
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AdminRoutingModule { }
