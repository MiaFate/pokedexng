import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloController } from './hello/hello.controller';
import { HelloModule } from './hello/hello.module';
import { PokemonsModule } from './pokemons/pokemons.module';

@Module({
  imports: [HelloModule, PokemonsModule],
  controllers: [AppController, HelloController],
  providers: [AppService],
})
export class AppModule { }
