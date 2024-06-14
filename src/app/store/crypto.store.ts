import {patchState, signalStore, withComputed, withMethods, withState} from '@ngrx/signals';
import {Coin, CoinData} from '../models/coin.model';
import { Currency } from '../models/currency.model';
import {Time} from "../models/time.model";
import {computed} from "@angular/core";

type MainState = {
  coins: Coin[];
  coinData: CoinData[];
  time: Time;
  currency: Currency;
};

export const CryptoStore = signalStore(
  { providedIn: 'root' },
  withState({
    coins: [Coin.BTC, Coin.ETH, Coin.TON],
    coinData: [],
    time: Time.FiveMinutes,
    currency: Currency.USD
  } as MainState),
  withComputed((store) => ({
    currentCurrency: computed((): Currency => {
      return store.currency()
    }),
    currentTime: computed((): Time => {
      return store.time()
    }),
    currentCoins: computed((): Coin[] => {
      return store.coins()
    }),
  })),
  withMethods((store) => ({
    setCoinData(newCoinData: CoinData[]): void {
      patchState(store, (state) => ({
        coinData: newCoinData
      }))
    },
    setCurrency(newCurrency: Currency): void {
      patchState(store, (state) => ({
        currency: newCurrency
      }))
    },
    setTime(newTime: Time): void {
      patchState(store, (state) => ({
        time: newTime
      }))
    },
    toggleCoin(coin: Coin): void {
      patchState(store, (state) => ({
        coins: state.coins.includes(coin) ? state.coins.filter(x => x !== coin) : [...state.coins, coin]
      }))
    },
    isSelectedCoin(coin: Coin): boolean {
      return store.coins().includes(coin);
    },
    getCurrentCoinData(coinId: Coin): CoinData | undefined {
      return store.coinData().find(x => x.id === coinId)
    }
  })),
);
