import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkMode = new BehaviorSubject<boolean>(false);
  darkMode$ = this.darkMode.asObservable();
  private storageKey = 'tic_tac_toe_dark_mode';
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.loadSavedTheme();
  }

  toggleTheme(): void {
    const newValue = !this.darkMode.value;
    this.darkMode.next(newValue);
    this.updateBodyClass(newValue);
    this.saveTheme(newValue);
    
    // Force refresh of styles
    if (this.isBrowser) {
      setTimeout(() => {
        console.log('Forcing style refresh for dark mode:', newValue);
        if (newValue) {
          document.body.style.setProperty('--header-text', '#ffffff');
          document.body.style.setProperty('--symbol-color', '#ffffff');
        } else {
          document.body.style.setProperty('--header-text', 'white');
          document.body.style.setProperty('--symbol-color', 'black');
        }
      }, 10);
    }
  }

  private loadSavedTheme(): void {
    if (!this.isBrowser) {
      // Default to light theme on server
      this.darkMode.next(false);
      return;
    }

    try {
      const savedTheme = localStorage.getItem(this.storageKey);
      const isDarkMode = savedTheme === 'true';
      this.darkMode.next(isDarkMode);
      this.updateBodyClass(isDarkMode);
      
      // Set initial styles
      if (isDarkMode) {
        document.body.style.setProperty('--header-text', '#ffffff');
        document.body.style.setProperty('--symbol-color', '#ffffff');
      }
    } catch (e) {
      // If localStorage is not available, use default light theme
      this.darkMode.next(false);
      this.updateBodyClass(false);
    }
  }

  private saveTheme(isDarkMode: boolean): void {
    if (!this.isBrowser) return;

    try {
      localStorage.setItem(this.storageKey, isDarkMode.toString());
    } catch (e) {
      // Ignore if localStorage is not available
    }
  }

  private updateBodyClass(isDarkMode: boolean): void {
    if (!this.isBrowser) return;
    
    if (isDarkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }
}
