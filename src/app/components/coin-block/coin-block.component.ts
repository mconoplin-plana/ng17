import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CoinData } from '../../models/coin';

@Component({
  selector: 'app-coin-block',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './coin-block.component.html',
  styleUrl: './coin-block.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoinBlockComponent {
  @Input() coin: CoinData;

  constructor() {}
}
