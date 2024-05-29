import { Component, signal } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import { CURRENCIES } from '../../constants/currencies';
import { Currency } from '../../models/currency';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { COINS } from '../../constants/coins';

@Component({
  selector: 'app-config',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule, MatDialogModule, MatRadioModule, MatCheckboxModule],
  templateUrl: './config.component.html',
  styleUrl: './config.component.scss'
})
export class ConfigComponent {
  public currencies = signal(CURRENCIES);
  public coins = signal(COINS);
  public selectedCurrency: Currency = Currency.USD;
}
