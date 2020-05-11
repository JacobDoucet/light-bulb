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

  state$: Observable<string> = this.route.params.pipe(
    map((params) => params.state)
  );

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.state$.pipe(
      take(1),
      tap((state) => this.openPopupWindow(state))
    ).subscribe();
  }

  private openPopupWindow(state: string) {
    window.open(`http://localhost:4200/(switch:${state})`, '__blank', 'height=100px,width=300px');
    window.addEventListener('message', (event: MessageEvent) => {
      if (event.data && /^(on|off)$/.test(event.data)) {
        this.router.navigate([
          { outlets: { bulb: event.data }}
        ]);
      }
    });
  }

}
