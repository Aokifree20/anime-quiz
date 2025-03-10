import { Type } from 'class-transformer';
import { IsArray, IsIn, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateCharacterDto {
  @IsString()
  @IsNotEmpty()
  text: string;

  //@IsURL()
  @IsString()
  @IsNotEmpty()
  image: string;

  @IsArray()
  @IsNotEmpty()
  options: string[];

  @IsInt()
  @IsIn([0, 1, 2, 3])
  @Type(() => Number)
  correct: number;
}
