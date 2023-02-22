import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { pokemonsList } from './data';

@Injectable()
export class PokemonsService {


    getPokemonById(id: number) {
        // const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        // return response.data;
        const response = pokemonsList.find((pokemon) => {
            if (pokemon.number === id) {
                return pokemon;
            }
        });
        return response

    }

    getPokemonsList() {
        return pokemonsList
    }


    async getPokemons(limit = 151, offset = 0) {

        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
        const pokemonData = await Promise.all(response.data.results.map(async (pokemon) => {
            const data = await axios.get(`${pokemon.url}`);
            return {
                name: data.data.name,
                number: data.data.id,
                image: data.data.sprites.front_default,
                url: pokemon.url
            };
        }));
        return pokemonData;

    }
}
