export enum Currency {
	USD = 'usd',
	EUR = 'eur',
	GBP = 'gbp',
	UAH = 'uah',
	MDL = 'mdl',
}

export interface CurrencyInfo {
	id: Currency;
	name: string;
	symbol: string;
}