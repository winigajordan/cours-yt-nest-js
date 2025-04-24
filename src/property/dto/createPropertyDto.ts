import { IsInt, IsString, Length } from 'class-validator';

export class CreatePropertyDto {

  @IsString()
  @Length(4, 6, {groups :  ['create']})
  @Length(1, 10, { groups :  ['update'], message: 'Check the lenth of the name' })
  name : string;


  @IsString({groups :  ['create', 'update']})
  description : string;

  @IsInt({groups :  ['update', 'create']})
  area : number;
}