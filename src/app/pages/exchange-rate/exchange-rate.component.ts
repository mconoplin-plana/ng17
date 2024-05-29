import {CommonModule} from "@angular/common";
import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {COINS} from "../../constants/coins";
import {CoinBlockComponent} from "../../components/coin-block/coin-block.component";

@Component({
  selector: 'app-exchange-rate',
  standalone: true,
  imports: [CommonModule, CoinBlockComponent],
  templateUrl: './exchange-rate.component.html',
  styleUrl: './exchange-rate.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExchangeRateComponent{
  public coins = signal(COINS);

  constructor() {
  }

}
