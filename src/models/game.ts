export class Game {
    public players: string[]= [];
    public stack: string[]= [];
    public playerCard: string[]= [];
    public currentPlayer: number = 0;

    constructor(){

        for(let i=1; i<=13; i++) {
            this.stack.push('spade_'+ i);
            this.stack.push('hearts_'+ i);
            this.stack.push('clubs_'+ i);
            this.stack.push('diamonds_'+ i);
            this.stack = shuffleArray(this.stack);
        }
    }
}

function shuffleArray(array: string[]): string[] {
    const shuffledArray = [...array]; // make a copy of the array
  
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
  
    return shuffledArray;
  }