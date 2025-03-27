import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config'
import { UserModule } from '../user/user.module';
import { Game } from '../game/entities/game.entity';
import { GameModule } from '../game/game.module';
import { PlatformModule } from '../platform/platform.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: process.env.ENV == 'dev' ? true : false, 
    }),
    UserModule,
    GameModule,
    PlatformModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
  
export class AppModule {
  
}