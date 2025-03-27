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
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [User, Belong, Follow, Game, Genre, Own, Platform, Play, Run, Tag],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
