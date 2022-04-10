import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { PrismaService } from './modules/app/prisma.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);
  await app.listen(3000);
}
bootstrap();
