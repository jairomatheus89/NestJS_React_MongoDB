import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonModule } from './person/person.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongo:27017/fullstack'),
    PersonModule,
  ],
})
export class AppModule {}
