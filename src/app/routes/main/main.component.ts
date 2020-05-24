import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fromEvent, Observable, Subject } from 'rxjs';
import { map, take, takeUntil } from 'rxjs/operators';
import { tap } from 'rxjs/internal/operators/tap';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  private popupClosed: Subject<void> = new Subject();

  popupWindow: Window;

  state$: Observable<'on' | 'off'> = this.route.params.pipe(
    map((params) => params.state)
  );

  constructor(private route: ActivatedRoute, private router: Router, private cd: ChangeDetectorRef) {
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

    this.popupWindow.onbeforeunload = () => {
      this.popupClosed.next();
      this.popupWindow = null;
      this.cd.detectChanges();
    };

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

}
