export enum Coin {
	BTC = 'bitcoin',
	ETH = 'ethereum',
	LTC = 'litecoin',
	USDT = 'tether',
	DOGE = 'dogecoin',
	TRX = 'tron',
	PEPE = 'pepe',
	NOT = 'notcoin',
	TON = 'the-open-network',
}

export interface CoinInfo {
	name: string;
	id: Coin;
}

export interface CoinData {
	id: Coin;
	symbol: string;
	name: string;
	image: string;
	current_price: number;
	market_cap: number;
	market_cap_rank: number;
	fully_diluted_valuation: number;
	total_volume: number;
	high_24h: number;
	low_24h: number;
	price_change_24h: number;
	price_change_percentage_24h: number;
	market_cap_change_24h: number;
	market_cap_change_percentage_24h: number;
	circulating_supply: number;
	total_supply: number;
	max_supply: number;
	ath: number;
	ath_change_percentage: number;
	ath_date: string;
	atl: number;
	atl_change_percentage: number;
	atl_date: string;
	roi: number;
	last_updated: string;
}