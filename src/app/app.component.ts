import { Component, OnInit } from '@angular/core';
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
export class AppComponent implements OnInit {
  title = 'Tic-Tac-Toe';
  currentYear = new Date().getFullYear();
  isDarkMode = false;
  
  constructor(private themeService: ThemeService) {}
  
  ngOnInit(): void {
    this.themeService.darkMode$.subscribe(isDark => {
      this.isDarkMode = isDark;
      console.log('Dark mode is now:', isDark);
    });
  }
  
  toggleTheme(): void {
    console.log('Toggling theme');
    this.themeService.toggleTheme();
  }
}
