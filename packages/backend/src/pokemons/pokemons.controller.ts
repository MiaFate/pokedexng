import { Controller, Get, Param } from '@nestjs/common';
import { PokemonsService } from './pokemons.service';

@Controller('pokemons')
export class PokemonsController {
    constructor(private readonly pokemonsService: PokemonsService) { }
    //
    @Get()
    async getPokemons() {
        return this.pokemonsService.getPokemonsList();
    }

    @Get(':id')
    async getPokemonById(@Param('id') id: number) {
        return this.pokemonsService.getPokemonById(Number(id));
    }
}
