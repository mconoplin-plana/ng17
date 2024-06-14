import {ApplicationRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation} from '@angular/core';
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { ConfigComponent } from '../config/config.component';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterLink, RouterLinkActive, MatButtonModule, MatDialogModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
  public links = [
    {name: 'Exchange Rate', link: '/exchange'},
    {name: 'About Us', link: '/about'}
  ];

  constructor(private readonly dialog: MatDialog, private readonly cdr: ChangeDetectorRef, private readonly appRef: ApplicationRef) {}

  public openModal(): void {
    const dialogRef = this.dialog.open(ConfigComponent, {
      width: '60vw'
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(3);
      setTimeout(() => {
        // this.cdr.detectChanges();

        this.appRef.tick();
      });
    });
  }
}
