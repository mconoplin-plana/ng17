// import { TestBed, ComponentFixture, tick } from '@angular/core/testing';
// import { AppComponent } from './app.component';
// import { CryptoService } from './services/crypto.service';
// import { CryptoStore } from './store/crypto.store';
// import { of } from 'rxjs';
// import { ActivatedRoute } from '@angular/router';
//
// describe('AppComponent', () => {
//   let component: AppComponent;
//   let fixture: ComponentFixture<AppComponent>;
//   let cryptoServiceSpy: jasmine.SpyObj<CryptoService>;
//
//   beforeEach(async () => {
//     cryptoServiceSpy = jasmine.createSpyObj('CryptoService', ['getCryptoData']);
//
//     await TestBed.configureTestingModule({
//       providers: [
//         { provide: CryptoService, useValue: cryptoServiceSpy },
//         CryptoStore,
//         {
//           provide: ActivatedRoute,
//           useValue: { snapshot: { paramMap: new Map() } }
//         }
//       ],
//       imports: [] // Убедитесь, что AppComponent не объявлен в этом массиве
//     }).compileComponents();
//   });
//
//   beforeEach(() => {
//     fixture = TestBed.createComponent(AppComponent);
//     component = fixture.componentInstance;
//   });
//
//   afterEach(() => {
//     component.ngOnDestroy();
//   });
//
//   it('should create the app', () => {
//     expect(component).toBeTruthy();
//   });
//
//   it('should call ngOnInit and ngOnDestroy', () => {
//     spyOn(component, 'ngOnInit');
//     spyOn(component, 'ngOnDestroy');
//
//     fixture.detectChanges();
//
//     expect(component.ngOnInit).toHaveBeenCalled();
//     expect(component.ngOnDestroy).not.toHaveBeenCalled();
//
//     component.ngOnDestroy();
//     expect(component.ngOnDestroy).toHaveBeenCalled();
//   });
//
//   it('should fetch crypto data and update store', () => {
//     const testData: any = [];
//     cryptoServiceSpy.getCryptoData.and.returnValue(of(testData));
//
//     fixture.detectChanges();
//     tick(10000);
//
//     expect(component['store'].setCoinData).toHaveBeenCalledWith(testData);
//   });
//
//   it('should handle error when fetching crypto data', () => {
//     cryptoServiceSpy.getCryptoData.and.throwError('Test error');
//
//     spyOn(console, 'error');
//
//     fixture.detectChanges();
//     tick(10000);
//
//     expect(console.error).toHaveBeenCalledWith('Error fetching data');
//   });
//
//   it('should tick ApplicationRef to update all components', () => {
//     spyOn(component['appRef'], 'tick');
//
//     fixture.detectChanges();
//     tick(10000);
//
//     expect(component['appRef'].tick).toHaveBeenCalled();
//   });
// });
