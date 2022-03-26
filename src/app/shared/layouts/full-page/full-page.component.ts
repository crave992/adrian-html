import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-page',
  templateUrl: './full-page.component.html',
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FullPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
