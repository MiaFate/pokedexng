import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import * as cors from 'cors';
async function bootstrap() {
  const port = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule);
  app.use(cors());
  await app.listen(port);
}
bootstrap();
