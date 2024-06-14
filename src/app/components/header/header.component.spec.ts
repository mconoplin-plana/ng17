import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { MatDialog } from '@angular/material/dialog';
import { ConfigComponent } from '../config/config.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChangeDetectorRef, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let matDialog: MatDialog;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        BrowserAnimationsModule,
        RouterTestingModule
      ],
      providers: [
        ChangeDetectorRef,
        ApplicationRef,
        { provide: MatDialog, useClass: MatDialog } // Предоставляем реальный MatDialog
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // Получаем MatDialog из инжектора
    matDialog = TestBed.inject(MatDialog);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open modal dialog when openModal() is called', () => {
    spyOn(matDialog, 'open').and.callThrough(); // Мокируем метод open

    component.openModal(); // Попытка вызова метода openModal

    expect(matDialog.open).toHaveBeenCalledWith(ConfigComponent, {
      width: '60vw'
    });
  });
});
