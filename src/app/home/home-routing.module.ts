import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';;

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Home',
    },
    loadChildren: () => import('./welcome/welcome.module').then(x => x.WelcomeModule),
  },
  {
    path: 'about',
    data: {
      title: 'About',
    },
    loadChildren: () => import('./about/about.module').then(x => x.AboutModule),
  },
  {
    path: 'portfolio',
    data: {
      title: 'Portfolio',
    },
    loadChildren: () => import('./portfolio/portfolio.module').then(x => x.PortfolioModule),
  },
  {
    path: 'contact',
    data: {
      title: 'Contact Us',
    },
    loadChildren: () => import('./contact/contact.module').then(x => x.ContactModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }
