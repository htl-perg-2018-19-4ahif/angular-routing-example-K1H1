import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


interface IPokemonList {
  count: number;
  results: IPokemon[];
}

interface IPokemon {
  name: string;
  url: string;
}


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  public searchString:string='';
  public pokemonList: IPokemon[];
  public url:string ='https://pokeapi.co/api/v2/pokemon';

  constructor(private httpClient: HttpClient) { }

  async ngOnInit() {
    let count: IPokemonList = await this.httpClient.get<IPokemonList>(this.url).toPromise();
    this.pokemonList = (await this.httpClient.get<IPokemonList>(this.url+'?limit=' + count.count).toPromise()).results;

  }

  public search(event){
    this.searchString=event;
  }



}



