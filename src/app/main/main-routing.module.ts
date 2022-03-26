import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FullPageComponent } from "../shared/layouts/full-page/full-page.component";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { 
    path: '',
    component: FullPageComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'about',
        component: AboutComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  // providers: [AuthGuard]
})
export class MainRoutingModule { }