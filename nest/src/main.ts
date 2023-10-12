import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const { NEST_PORT } = process.env;

async function bootstrap() {
     const app = await NestFactory.create(AppModule);
  await app.listen(NEST_PORT);
}
bootstrap();
