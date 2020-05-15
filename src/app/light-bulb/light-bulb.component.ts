import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { tap } from 'rxjs/internal/operators/tap';

@Component({
  selector: 'app-light-bulb',
  templateUrl: './light-bulb.component.html',
  styleUrls: ['./light-bulb.component.css']
})
export class LightBulbComponent implements OnInit {

  childWindow: Window;

  state$: Observable<'on' | 'off'> = this.route.params.pipe(
    map((params) => params.state)
  );

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
  }

  togglePopupWindow() {
    if (this.childWindow) {
      this.childWindow.close();
    } else {
      this.state$.pipe(
        take(1),
        tap((state) => this.doOpenPopupWindow(state))
      ).subscribe();
    }
  }

  private doOpenPopupWindow(state: string) {
    this.childWindow = window.open(`http://localhost:4200/(switch:${state})`, '__blank', 'height=100px,width=300px');

    window.addEventListener('message', (event: MessageEvent) => {
      if (event.data && /^(on|off)$/.test(event.data)) {
        this.router.navigate([
          { outlets: { bulb: event.data } }
        ]);
      }
    });

    this.startChildWindowChecks();
  }

  private startChildWindowChecks() {
    const interval = setInterval(() => {
      if (this.childWindow.closed) {
        this.childWindow = null;
        clearInterval(interval);
      }
    }, 500);
  }

}
