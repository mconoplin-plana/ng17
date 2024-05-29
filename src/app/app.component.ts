import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {CryptoService} from "./services/crypto.service";
import {filter, interval, startWith, Subject, switchMap, takeUntil} from "rxjs";
import {HeaderComponent} from "./components/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  constructor(private readonly cryptoService: CryptoService) {
  }

  ngOnInit() {
    interval(10000).pipe(
      startWith(0),
      filter(() => !document.hidden),
      switchMap(() => this.cryptoService.getCryptoData()),
      takeUntil(this.destroy$)
    ).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: () => {
        console.error('Error fetching data');
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
  }
}
