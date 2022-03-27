import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HorizontalComponent } from 'src/app/@config/layouts/horizontal/horizontal.component';
import { AboutComponent } from './about.component';

const routes: Routes = [
  {
    path: '',
    component: HorizontalComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: AboutComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
