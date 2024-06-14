import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {CoinData} from '../models/coin.model';
import { Observable } from 'rxjs';
import {Currency} from "../models/currency.model";
import {COINS} from "../constants/coins";
import cloneDeep from 'lodash/cloneDeep';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  private apiUrl = 'https://api.coingecko.com/api/v3/coins/markets';

  constructor(private readonly httpClient: HttpClient) {}

  public getCryptoData(currency: Currency): Observable<CoinData[]> {
    let params = new HttpParams();
    params = params.set('ids', cloneDeep(COINS).map(x => x.id).join(','));
    params = params.set('vs_currency', currency);

    return this.httpClient.get<CoinData[]>(this.apiUrl, {params});
  }
}
