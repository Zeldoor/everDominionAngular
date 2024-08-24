import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent 
{
  description: String = "Ever Dominion è un coinvolgente browser game che unisce lo stile medievale con elementi fantasy per creare un semplice ma avvincente autobattler. "+
                        "I giocatori si trovano a far scontrare schieramenti di truppe in battaglie automatiche, cercando di accumulare oro e potenziare la propria squadra. "+
                        "Ambientato in un mondo dall'estetica old school in chiave pixel art, i giocatori affrontano sia altri comandanti come loro,  che schieramenti di goblin e i loro potenti generali in una modalità PvE. /n/n"+

                        "Caratteristiche Principali: /n"+

                        "/nSchieramenti Personalizzati: Costruisci e rafforza la tua squadra reclutando nuove unità come cavalieri e arcieri, ognuna con statistiche di vita e attacco randomizzate, ma controllate da un sistema di tiering e classi per evitare di dare le sorti del giocatore totalmente in pasto all'RNG. /n"+

                        "/nEquipaggiamento del Comandante: Acquista accessori ed equipaggiamento per il tuo comandante nello shop del gioco, con la possibilità di potenziarli in seguito, aumentando il tuo potere e influenzando l\'esito delle battaglie. /n"+

                        "/nLeaderboard Competitiva: Scala le classifiche per dimostrare la tua superiorità strategica (o il troppo tempo libero), monitorando il potere di tutti i giocatori e pianificando la tua ascesa al vertice. /n"+

                        "/n<span class=\"pve\">Modalità PvE:</span> Oltre alle battaglie contro altri giocatori, si possono affrontare le minacce del mondo di Ever Dominion, combattendo contro goblin e i loro generali in sfide PvE, questi scontri sono generalmente più facili di un combattimento in PvP, ed è un ottimo modo per acquisire oro senza rischiare troppo. /n"+

                        "/nScudo protettivo: Per evitare di venire prosciugati di risorse mentre non si è al computer, un comodo scudo a tempo si attiva dopo che si viene attaccati da un altro giocatore. /n"+

                        "/nEconomia di Gioco: Guadagna oro sconfiggendo i tuoi nemici e utilizzalo per potenziare il tuo esercito o migliorare l'equipaggiamento del comandante, trovando il giusto equilibrio tra potenza offensiva e difensiva. /n"+

                        "/nIn Ever Dominion, ogni battaglia è un passo avanti verso la dominazione della leaderboard, dove solo i più astuti e preparati possono emergere vittoriosi. Prepara le tue truppe e diventa una leggenda di questo mondo fantasy-medievale!";

  formattedDescription(): String
  {
    return this.description.replace(/\/n/g, '<br>');
  }                     
}
