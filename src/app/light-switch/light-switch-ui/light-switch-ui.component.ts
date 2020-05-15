import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-light-switch-ui',
  templateUrl: './light-switch-ui.component.html',
  styleUrls: ['./light-switch-ui.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LightSwitchUiComponent implements OnInit {

  @Input() state: 'on' | 'off';
  @Output() flipSwitch: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

}
