import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-light-switch',
  templateUrl: './light-switch.component.html',
  styleUrls: ['./light-switch.component.css']
})
export class LightSwitchComponent implements OnInit {

  @Input() state: 'on' | 'off' = 'off';
  @Output() stateChange: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
