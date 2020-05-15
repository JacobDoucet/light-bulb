import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-light-bulb-ui',
  templateUrl: './light-bulb-ui.component.html',
  styleUrls: ['./light-bulb-ui.component.css']
})
export class LightBulbUiComponent implements OnInit {

  @Input() state: 'on' | 'off';

  constructor() { }

  ngOnInit(): void {
  }

}
