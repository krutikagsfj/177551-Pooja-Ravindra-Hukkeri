import { Component, OnInit } from '@angular/core';
import { GameService } from '../service/service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
  public playList: any;
  private amount: number;
  //gameservice and router
  constructor(private gameService: GameService,
    private router: Router) { }

  ngOnInit() {
    this.gameService.getGamesList().subscribe(data => {
      this.playList = data;
      console.log('this.plaoylist', this.playList);
    });
    this.amount = this.gameService.getAmount();

  }

  playGame(game) {

    // setting methods of game list
    if (game.price < this.amount) {
      this.gameService.setAmount(this.amount - Number(game.price));
      this.gameService.setSelectedGame(game.name);
      this.gameService.setStatus('1');
    } else {
      this.gameService.setSelectedGame(game.name);
      this.gameService.setStatus('2');
    }
    this.router.navigate(['success']);
  }

}
