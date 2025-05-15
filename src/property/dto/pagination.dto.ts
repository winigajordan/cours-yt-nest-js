import { IsNumber, IsOptional, IsPositive } from 'class-validator';
import { Type } from 'class-transformer';

export class PaginationDto{
  @IsNumber()
  @IsPositive()
  @IsOptional()
  @Type(() => Number) //TO convert string to number
  skip : number;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @Type(() => Number)
  limit : number;
}