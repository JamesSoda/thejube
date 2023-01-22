import { Observable } from 'rxjs';
import { HostListener, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScreenSizeService {

  private screenWidth: number;

  constructor() {
    this.screenWidth = window.innerWidth;

    window.addEventListener('resize', (event) => {
      this.screenWidth = window.innerWidth
    })
  }

  get width(): number {
    return this.screenWidth;
  }

  get isMobile(): boolean {
    return this.screenWidth < 860
  }
}
