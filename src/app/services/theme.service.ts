import { Injectable, Renderer2, RendererFactory2, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkMode = new BehaviorSubject<boolean>(false);
  darkMode$ = this.darkMode.asObservable();
  private renderer: Renderer2;
  private storageKey = 'tic_tac_toe_dark_mode';
  private isBrowser: boolean;

  constructor(
    rendererFactory: RendererFactory2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.loadSavedTheme();
  }

  toggleTheme(): void {
    const newValue = !this.darkMode.value;
    this.darkMode.next(newValue);
    this.updateBodyClass(newValue);
    this.saveTheme(newValue);
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
      this.renderer.addClass(document.body, 'dark-theme');
    } else {
      this.renderer.removeClass(document.body, 'dark-theme');
    }
  }
}
