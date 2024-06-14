import {Component, effect, inject, signal} from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { MatRadioModule} from '@angular/material/radio';
import { CURRENCIES } from '../../constants/currencies';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { COINS } from '../../constants/coins';
import {CryptoStore} from "../../store/crypto.store";

@Component({
  selector: 'app-config',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule, MatDialogModule, MatRadioModule, MatCheckboxModule],
  templateUrl: './config.component.html',
  styleUrl: './config.component.scss'
})
export class ConfigComponent {
  public currencies = CURRENCIES;
  public coins = COINS;

  public readonly store = inject(CryptoStore);

  constructor() {
    effect(() => {
      console.log(2);
    });
  }
}
