import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfigComponent } from './config.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CURRENCIES } from '../../constants/currencies';
import { COINS } from '../../constants/coins';
import { CryptoStore } from '../../store/crypto.store';

describe('ConfigComponent', () => {
  let component: ConfigComponent;
  let fixture: ComponentFixture<ConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ],
      imports: [
        CommonModule,
        FormsModule,
        MatDialogModule,
        MatRadioModule,
        MatCheckboxModule
      ],
      providers: [
        CryptoStore
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render radio buttons for currencies', () => {
    const radioButtons = fixture.nativeElement.querySelectorAll('mat-radio-button');
    expect(radioButtons.length).toEqual(CURRENCIES.length);
    for (let i = 0; i < CURRENCIES.length; i++) {
      expect(radioButtons[i].textContent.trim()).toEqual(CURRENCIES[i].name);
    }
  });

  it('should render checkboxes for coins', () => {
    const checkboxes = fixture.nativeElement.querySelectorAll('mat-checkbox');
    expect(checkboxes.length).toEqual(COINS.length);
    for (let i = 0; i < COINS.length; i++) {
      expect(checkboxes[i].textContent.trim()).toEqual(COINS[i].name);
    }
  });

  it('should toggle coin selection when checkbox is clicked', () => {
    expect(COINS.every((coin) => {
      const prevStatus = component.store.coins().includes(coin.id);
      const checkbox = fixture.nativeElement.querySelector(`*#config-checkbox-${coin.id} input`);
      checkbox.click();

      return prevStatus !== component.store.coins().includes(coin.id);
    })).toBeTruthy();
  });

  it('should change currency when radio button is clicked', () => {
    const nextRandomCurrency = CURRENCIES[Math.floor(Math.random() * CURRENCIES.length)];
    const radio = fixture.nativeElement.querySelector(`*#config-radio-${nextRandomCurrency.id} input`);
    radio.click();

    expect(component.store.currency()).toEqual(nextRandomCurrency.id);
  });

});
