import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {COINS} from "../constants/coins";
import { CoinData, CoinInfo } from '../models/coin';
import cloneDeep from 'lodash/cloneDeep';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  private apiUrl = 'https://api.coingecko.com/api/v3/coins/markets';
  private coins: CoinInfo[] = cloneDeep(COINS);
  private currentCurrency = 'usd';

  constructor(private readonly httpClient: HttpClient) {
  }

  public getCryptoData(): Observable<CoinData[]> {
    const coinsString = this.coins.map(x => x.id).join(',');

    return this.httpClient.get<CoinData[]>(`${this.apiUrl}?ids=${coinsString}&vs_currency=${this.currentCurrency}`);
  }
}
