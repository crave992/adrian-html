import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styles: [
  ]
})
export class BannerComponent implements OnInit {
  title = '';

  constructor(public _activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.title = this._activeRoute.snapshot.data['title'];
  }

}
