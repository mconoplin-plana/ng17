import { signalStore, withState } from '@ngrx/signals';
import { Book } from './book.model';

type BooksState = {
  cryptos: Book[];
  
  filter: { query: string; order: 'asc' | 'desc' };
};

const initialState: BooksState = {
  cryptos: [],
  filter: { query: '', order: 'asc' },
};

export const BooksStore = signalStore(
  withState(initialState)
);