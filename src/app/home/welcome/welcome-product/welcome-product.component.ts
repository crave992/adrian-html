import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-product',
  templateUrl: './welcome-product.component.html',
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WelcomeProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
