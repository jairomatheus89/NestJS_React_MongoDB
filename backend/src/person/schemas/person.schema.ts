import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PersonDocument = Person & Document;

@Schema({timestamps: true})
export class Person {
  @Prop({ required: true })
  username!: string;
  @Prop({required: true})
  password!: string;

}

export const PersonSchema = SchemaFactory.createForClass(Person);
