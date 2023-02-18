import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../hello/types';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent {
  constructor(private http: HttpClient, private route: ActivatedRoute) { }
  name: string | null = "";
  pokemon: Pokemon = {
    name: "",
    number: 0,
    image: "",
    url: ""
  };
  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get("name");
    console.log(typeof (this.route.snapshot.paramMap.get("name")));

    this.http.get(`http://localhost:3000/pokemons/${this.name}`).subscribe((data: any) => {
      this.pokemon = data;
    });
  }
}
