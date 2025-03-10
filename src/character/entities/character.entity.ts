import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Type } from 'class-transformer';
import { IsIn, IsInt, IsNumber, IsString } from 'class-validator';
@Schema()
export class Character {
  @Prop({ required: true })
  text: string;

  @Prop({ required: true })
  image: string;

  @Prop({ required: true })
  options: string[];

  @Prop({ required: true })
  correct: number;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const CharacterSchema = SchemaFactory.createForClass(Character);
export type CharacterDocument = Character & Document;
