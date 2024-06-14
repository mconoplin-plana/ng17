import { Coin, CoinInfo } from "../models/coin.model";

export const COINS: CoinInfo[] = [
	{ name: 'Bitcoin', id: Coin.BTC },
	{ name: 'Ethereum', id: Coin.ETH },
	{ name: 'Litecoin', id: Coin.LTC },
	{ name: 'Tether', id: Coin.USDT },
	{ name: 'Dogecoin', id: Coin.DOGE },
	{ name: 'Tron', id: Coin.TRX },
	{ name: 'Pepe', id: Coin.PEPE },
	{ name: 'Notcoin', id: Coin.NOT },
	{ name: 'The Open Network', id: Coin.TON },
];
