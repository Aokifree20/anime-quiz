import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as dotenv from 'dotenv';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { CharacterModule } from './character/character.module';
dotenv.config();
@Module({
  imports: [ MongooseModule.forRoot('mongodb://127.0.0.1:27017/mongodb'), CharacterModule,
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
