import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Belong } from './entity/belong.entity';
import { Follow } from './entity/follow.entity';
import { Game } from './entity/game.entity';
import { Genre } from './entity/genre.entity';
import { Own } from './entity/own.entity';
import { Platform } from './entity/platform.entity';
import { Play } from './entity/play.entity';
import { Run } from './entity/run.entity';
import { Tag } from './entity/tag.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true, // Désactiver en prod
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
