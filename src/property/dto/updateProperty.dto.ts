import { PartialType } from '@nestjs/mapped-types';
import { CreatePropertyDto } from './createPropertyDto';

//it has all fields of CreatePropertyDto but fields are optionnal
export class UpdatePropertyDto extends PartialType(CreatePropertyDto) {}
