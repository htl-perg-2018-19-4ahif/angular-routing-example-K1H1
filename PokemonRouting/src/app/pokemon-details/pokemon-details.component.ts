import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap } from '@angular/router';


interface IAbility {
  ability: string;
}

interface IDetails {
  abilities: IAbility[];
  name: string;
}

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {

  public pokemon: IDetails = { abilities: [], name: '' };
  public pokeId: number;
  //public url:'https://pokeapi.co/api/v2/pokemon/';


  constructor(private httpClient: HttpClient, private acRoute: ActivatedRoute) { }

  async ngOnInit() {
    this.acRoute.paramMap.subscribe((params: ParamMap) => {
      this.pokeId = parseInt(params.get('pokemonId'));
    });

    this.pokemon = await this.httpClient.get<IDetails>('https://pokeapi.co/api/v2/pokemon/' + this.pokeId).toPromise();
  }

}
