import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-board.component.html',
  styleUrl: './game-board.component.scss'
})
export class GameBoardComponent implements OnInit {
  board: string[] = [];
  currentPlayer: string = 'X';
  gameOver: boolean = false;
  winner: string | null = null;

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.board$.subscribe(board => {
      this.board = board;
    });

    this.gameService.currentPlayer$.subscribe(player => {
      this.currentPlayer = player;
    });

    this.gameService.gameOver$.subscribe(gameOver => {
      this.gameOver = gameOver;
    });

    this.gameService.winner$.subscribe(winner => {
      this.winner = winner;
    });
  }

  makeMove(index: number): void {
    this.gameService.makeMove(index);
  }

  resetGame(): void {
    this.gameService.resetGame();
  }

  getDisplayValue(index: number): string {
    return this.board[index];
  }
}
