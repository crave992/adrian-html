import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HorizontalComponent } from 'src/app/@config/layouts/horizontal/horizontal.component';
import { ContactComponent } from './contact.component';

const routes: Routes = [
  {
    path: '',
    component: HorizontalComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ContactComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
