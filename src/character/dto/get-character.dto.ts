import { Type } from 'class-transformer';
import { IsInt, IsOptional, Max, Min } from 'class-validator';

export class GetCharacterDto {
    @IsOptional()
  @IsInt()
  @Min(1)
  @Max(20)
  @Type(() => Number)
  quantity?: number;
}
