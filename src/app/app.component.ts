import {
  ApplicationRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  OnDestroy,
  OnInit
} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {CryptoService} from "./services/crypto.service";
import {catchError, filter, interval, of, startWith, Subject, switchMap, takeUntil} from "rxjs";
import {HeaderComponent} from "./components/header/header.component";
import {CryptoStore} from "./store/crypto.store";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  providers: [CryptoStore],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  private readonly store = inject(CryptoStore);

  constructor(private readonly cryptoService: CryptoService, private readonly cdr: ChangeDetectorRef, private readonly  appRef: ApplicationRef) {
  }

  ngOnInit() {
    interval(10000).pipe(
      startWith(0),
      filter(() => !document.hidden),
      switchMap(() => this.cryptoService.getCryptoData(this.store.currency())),
      catchError(() => {
        console.error('Error fetching data');

        return of(null);
      }),
      takeUntil(this.destroy$)
    ).subscribe({
      next: (data) => {
        if (data) {
          this.store.setCoinData(data);
        }

        setTimeout(() => {
          // this.cdr.detectChanges();

            this.appRef.tick();
        });
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
