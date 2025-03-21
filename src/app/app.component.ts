import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameBoardComponent } from './components/game-board/game-board.component';
import { ScoreBoardComponent } from './components/score-board/score-board.component';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, GameBoardComponent, ScoreBoardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Tic-Tac-Toe';
  currentYear = new Date().getFullYear();
  isDarkMode = false;
  
  constructor(private themeService: ThemeService) {
    this.themeService.darkMode$.subscribe(isDark => {
      this.isDarkMode = isDark;
    });
  }
  
  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
