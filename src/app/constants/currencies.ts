import { Currency, CurrencyInfo } from "../models/currency";

export const CURRENCIES: CurrencyInfo[] = [
	{ id: Currency.USD, name: 'US Dollar', symbol: '$' },
	{ id: Currency.EUR, name: 'Euro', symbol: '€' },
	{ id: Currency.GBP, name: 'British Pound', symbol: '£' },
	{ id: Currency.UAH, name: 'Ukrainian Hryvnia', symbol: '₴' },
	{ id: Currency.MDL, name: 'Moldovan Leu', symbol: 'L' },
];