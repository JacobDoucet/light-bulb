import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fromEvent, Observable, Subject } from 'rxjs';
import { map, take, takeUntil } from 'rxjs/operators';
import { tap } from 'rxjs/internal/operators/tap';

@Component({
  selector: 'app-light-bulb',
  templateUrl: './light-bulb.component.html',
  styleUrls: ['./light-bulb.component.css']
})
export class LightBulbComponent implements OnInit {

  private popupClosed: Subject<void> = new Subject();

  popupWindow: Window;

  state$: Observable<'on' | 'off'> = this.route.params.pipe(
    map((params) => params.state)
  );

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
  }

  togglePopupWindow() {
    if (!this.popupWindow) {
      this.state$.pipe(
        take(1),
        tap((state) => this.openPopupWindow(state))
      ).subscribe();
    } else {
      this.popupWindow.close();
    }
  }

  private openPopupWindow(state: string) {
    this.popupWindow = window.open(`http://localhost:4200/(switch:${state})`, '__blank', 'height=100px,width=300px');
    this.startCheckingPopupWindow();
    fromEvent(window, 'message').pipe(
      takeUntil(this.popupClosed),
      tap((event: MessageEvent) => {
        if (event.data && /^(on|off)$/.test(event.data)) {
          this.router.navigate([
            { outlets: { bulb: event.data } }
          ]);
        }
      })
    ).subscribe();
  }

  private startCheckingPopupWindow() {
    const interval = setInterval(() => {
      if (this.popupWindow.closed) {
        this.popupClosed.next();
        this.popupWindow = null;
        clearInterval(interval);
      }
    }, 500);
  }

}
