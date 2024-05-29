import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CryptoService } from './services/crypto.service';
import { of, throwError } from 'rxjs';

describe('AppComponent', () => {
  let cryptoService: CryptoService;

  beforeEach(async () => {
    cryptoService = jasmine.createSpyObj('CryptoService', ['getCryptoData']);

    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        { provide: CryptoService, useValue: cryptoService }
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should call getCryptoData on init if document is not hidden', () => {
    document.hidden = false;
    cryptoService.getCryptoData.and.returnValue(of({}));

    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    expect(cryptoService.getCryptoData).toHaveBeenCalled();
  });

  it('should not call getCryptoData on init if document is hidden', () => {
    document.hidden = true;
    cryptoService.getCryptoData.and.returnValue(of({}));

    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    expect(cryptoService.getCryptoData).not.toHaveBeenCalled();
  });

  it('should handle error from getCryptoData', () => {
    document.hidden = false;
    cryptoService.getCryptoData.and.returnValue(throwError('Error'));

    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    expect(cryptoService.getCryptoData).toHaveBeenCalled();
  });

  it('should stop calling getCryptoData on destroy', () => {
    document.hidden = false;
    cryptoService.getCryptoData.and.returnValue(of({}));

    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    fixture.destroy();

    expect(cryptoService.getCryptoData).toHaveBeenCalledTimes(1);
  });
});
