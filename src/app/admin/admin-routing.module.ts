import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { VerticalLayout1Component } from "../@config/layouts/vertical-layout1/vertical-layout1.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";

const routes: Routes = [
  {
    path: '',
    component: VerticalLayout1Component,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ]
  },
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
