import { Component } from '@angular/core';
import { CricketPlayer } from "app/cricket-player";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular App';
  roles: string[] = ["Batsman", "Bowler", "Keeper", "All Rounder"];

  players: CricketPlayer[] = [
    { name: 'Virat Kohli', role: 'Batsman', age: 32 },
    { name: 'Ravindra Jadeja', role: 'Bowler', age: 30 },
    { name: 'Ravi Ashwin', role: 'Bowler', age: 30 },
    { name: 'Mhahendra Dhoni', role: 'Keeper', age: 37 }
  ];

  addPlayer(name: string, role: string, age: number): void {
    if (name && age ) {
      let player: CricketPlayer = { name:name, role:role, age:age };
      this.players.push(player);
    }
  }
}
