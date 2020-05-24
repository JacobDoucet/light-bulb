import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-light-bulb',
  templateUrl: './light-bulb.component.html',
  styleUrls: ['./light-bulb.component.css']
})
export class LightBulbComponent implements OnInit {

  @Input() state: 'on' | 'off' = 'off';

  constructor() { }

  ngOnInit(): void {
  }

}
