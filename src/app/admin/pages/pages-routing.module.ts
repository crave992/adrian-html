import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarPageComponent } from 'src/app/shared/layouts/sidebar-page/sidebar-page.component';

const routes: Routes = [
  {
    path: '',
    component: SidebarPageComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(x => x.DashboardModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
