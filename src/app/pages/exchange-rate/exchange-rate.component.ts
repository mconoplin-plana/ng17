import {CommonModule} from "@angular/common";
import {ChangeDetectionStrategy, ChangeDetectorRef, Component, effect, inject, signal} from '@angular/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {CoinBlockComponent} from "../../components/coin-block/coin-block.component";
import {CryptoStore} from "../../store/crypto.store";
import {TIMES} from "../../constants/time";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-exchange-rate',
  standalone: true,
  imports: [CommonModule, FormsModule, CoinBlockComponent, MatButtonToggleModule],
  templateUrl: './exchange-rate.component.html',
  styleUrl: './exchange-rate.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExchangeRateComponent{
  public readonly times = TIMES;
  public readonly store = inject(CryptoStore);

  constructor(private readonly cdr: ChangeDetectorRef) {
    effect(() => {
      console.log(1);
    });
  }

}
