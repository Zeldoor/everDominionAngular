import { Component, inject, Injector, Input, OnInit } from '@angular/core';
import { Player } from '../model/Player';
import { MatGridListModule } from '@angular/material/grid-list';
import { Gear } from '../model/Gear';
import { Router } from '@angular/router';
import { PlayerService } from '../services/player.service';
import { StompService } from '../services/stomp.service';

@Component({
  selector: 'app-profile-card-stat',
  standalone: true,
  imports: [MatGridListModule],
  templateUrl: './profile-card-stat.component.html',
  styleUrl: './profile-card-stat.component.css'
})
export class ProfileCardStatComponent implements OnInit
{
  router: Router = inject(Router)

  @Input() other!: boolean;
  @Input() targetPlayer!: Player;
  @Input() player!: Player;

  // stomp: StompService;
  friendBoolean: boolean = true;
  
  constructor(private playerServ: PlayerService, private injector: Injector)
  {
    // this.playerServ.getOne(parseInt(localStorage.getItem("id")!)).subscribe(data => this.player = data);
    
    // this.stomp = this.injector.get(StompService);

    // this.stomp.subscribe("/topic/players", message => 
    //   {
    //     let playersData = JSON.parse(message) as Player[];
    //     this.player = playersData.filter(f => f.id == this.player.id).at(0)!;
    //   })
  }

  ngOnInit()
  {
    this.checkIfFriend();
  }

  checkGear(name: String): Gear | null
  {
    let gear = null;

    for(let g of this.player.activeGears)
      if(g.name.toLowerCase() == name.toLowerCase())
        gear = g;
    
    return gear;
  }

  interact()
  {
    if(this.targetPlayer.id == parseInt(localStorage.getItem("id")!))
      this.router.navigate(["player"])
    else
      this.router.navigate(["fight", this.targetPlayer.id])
  }


  checkIfFriend(): void
  {
    for(let friend of this.player.friends)
      if(friend.id == this.targetPlayer.id)
        this.friendBoolean = true;
      
    this.friendBoolean = false;
  }

  addFriend()
  {
    this.playerServ.addFriend(this.player.id, parseInt(localStorage.getItem("id")!)).subscribe(
      {
        next: data =>
        {
          this.friendBoolean=false;
        },
        error: err =>
        { 
          let backendError = err.error;
          alert (backendError) 
        }
      }
    );
  }

  removeFriend()
  {
    this.playerServ.removeFriend(this.player.id, parseInt(localStorage.getItem("id")!)).subscribe(
      {
        next: data =>
        {
          console.log("Rimosso id: "+this.player.id);
          this.friendBoolean = true;
        },
        error: err =>
        {
          let backendError = err.error;
          alert (backendError)
        }
      }
    ) 
  }










}
