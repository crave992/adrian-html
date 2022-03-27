import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styles: [
  ]
})
export class HomeHeaderComponent implements OnInit {
  routes: any[] = [];
  constructor(
    private _router: Router,
  ) { }

  ngOnInit(): void {
    this.printpath('', this._router.config);
  }
  printpath(parent: String, config: Route[]) {
    for (let i = 0; i < config.length; i++) {
      const route = config[i];
      this.routes.push({ path: parent + '/' + route.path, data:route.data });
      if (route.children) {
        const currentPath = route.path ? parent + '/' + route.path : parent;
        this.printpath(currentPath, route.children);
      }
    }
  }
}
