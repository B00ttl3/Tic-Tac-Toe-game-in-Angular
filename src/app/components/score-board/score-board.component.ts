import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-score-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './score-board.component.html',
  styleUrl: './score-board.component.scss'
})
export class ScoreBoardComponent implements OnInit {
  scores = { X: 0, O: 0, ties: 0 };

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.scores$.subscribe(scores => {
      this.scores = scores;
    });
  }

  resetScores(): void {
    this.gameService.resetScores();
  }
}
