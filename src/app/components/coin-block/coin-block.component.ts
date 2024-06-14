import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { BaseChartDirective } from 'ng2-charts';
import { CoinData } from '../../models/coin.model';
import { ChartConfiguration, ChartOptions } from 'chart.js/dist/types/index';

@Component({
  selector: 'app-coin-block',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, BaseChartDirective],
  templateUrl: './coin-block.component.html',
  styleUrl: './coin-block.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class CoinBlockComponent {
  @Input() coinData: CoinData | undefined;

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July'
    ],
    datasets: [
      {
        data: [ 65, 59, 80, 81, 56, 55, 40 ],
        label: 'Series A',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)'
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true
  };
  public lineChartLegend = true;

  constructor() {}
}
