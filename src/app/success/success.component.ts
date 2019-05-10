import { Component, OnInit } from '@angular/core';
import { GameService } from '../service/service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  public selectedGame: string;
  public amount: number;
  public status: string;


  
  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.selectedGame = this.gameService.getSelectedGame();
    this.amount = this.gameService.getAmount();
    this.status = this.gameService.getStatus();
  }
}