import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private board = new BehaviorSubject<string[]>(Array(9).fill(''));
  private currentPlayer = new BehaviorSubject<string>('X');
  private gameOver = new BehaviorSubject<boolean>(false);
  private winner = new BehaviorSubject<string | null>(null);
  private scores = new BehaviorSubject<{ X: number, O: number, ties: number }>({ X: 0, O: 0, ties: 0 });
  
  board$ = this.board.asObservable();
  currentPlayer$ = this.currentPlayer.asObservable();
  gameOver$ = this.gameOver.asObservable();
  winner$ = this.winner.asObservable();
  scores$ = this.scores.asObservable();

  constructor() { }

  makeMove(index: number): void {
    if (this.gameOver.value || this.board.value[index] !== '') {
      return;
    }

    const newBoard = [...this.board.value];
    newBoard[index] = this.currentPlayer.value;
    this.board.next(newBoard);

    const gameStatus = this.checkGameStatus(newBoard);
    
    if (gameStatus.isOver) {
      this.gameOver.next(true);
      this.winner.next(gameStatus.winner);
      
      const currentScores = this.scores.value;
      if (gameStatus.winner === 'X') {
        currentScores.X += 1;
      } else if (gameStatus.winner === 'O') {
        currentScores.O += 1;
      } else {
        currentScores.ties += 1;
      }
      this.scores.next(currentScores);
    } else {
      this.switchPlayer();
    }
  }

  switchPlayer(): void {
    const nextPlayer = this.currentPlayer.value === 'X' ? 'O' : 'X';
    this.currentPlayer.next(nextPlayer);
  }

  resetGame(): void {
    this.board.next(Array(9).fill(''));
    this.currentPlayer.next('X');
    this.gameOver.next(false);
    this.winner.next(null);
  }

  resetScores(): void {
    this.scores.next({ X: 0, O: 0, ties: 0 });
  }

  private checkGameStatus(board: string[]): { isOver: boolean, winner: string | null } {
    // Check rows
    for (let i = 0; i < 9; i += 3) {
      if (board[i] && board[i] === board[i + 1] && board[i] === board[i + 2]) {
        return { isOver: true, winner: board[i] };
      }
    }
    
    // Check columns
    for (let i = 0; i < 3; i++) {
      if (board[i] && board[i] === board[i + 3] && board[i] === board[i + 6]) {
        return { isOver: true, winner: board[i] };
      }
    }
    
    // Check diagonals
    if (board[0] && board[0] === board[4] && board[0] === board[8]) {
      return { isOver: true, winner: board[0] };
    }
    
    if (board[2] && board[2] === board[4] && board[2] === board[6]) {
      return { isOver: true, winner: board[2] };
    }
    
    // Check for tie
    if (board.every(cell => cell !== '')) {
      return { isOver: true, winner: null };
    }
    
    return { isOver: false, winner: null };
  }
}
