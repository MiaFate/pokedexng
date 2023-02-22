import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from "./types";

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent {


  pokemons: Pokemon[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.http.get('https://ngbackdex.onrender.com/pokemons').subscribe((data: any) => {
      this.pokemons = data;
      console.log(this.pokemons);
    });
  }
}
