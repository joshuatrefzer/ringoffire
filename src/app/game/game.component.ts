import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})

export class GameComponent implements OnInit {
  pickCardAnimation = false;
  currentCard: string = '';
  game?: Game;


  newGame() {
    this.game = new Game;
    console.log(this.game);
  }

  ngOnInit(): void {
    this.newGame();
  }

  takeCard() {
    if (!this.pickCardAnimation) {
      this.currentCard = this.game?.stack.pop() ?? '';
      console.log(this.currentCard);
      this.pickCardAnimation = true;
      console.log('new card:', this.currentCard);
      console.log(this.game);



      setTimeout(() => {
        this.game?.playerCard.push(this.currentCard);
        this.pickCardAnimation = false;
      }, 1000);
    }

  }






}
