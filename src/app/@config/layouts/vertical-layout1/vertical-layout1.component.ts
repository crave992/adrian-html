import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-vertical-layout1',
  templateUrl: './vertical-layout1.component.html',
  styleUrls: []
})
export class VerticalLayout1Component implements OnInit {
  routerChildLength: number = 0;

  constructor(public router: ActivatedRoute) { }

  ngOnInit(): void {
    this.routerChildLength = this.router.children.length;
    console.log(this.routerChildLength);
  }

}
