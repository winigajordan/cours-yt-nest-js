import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

// To use the pipe out of the current module
@Injectable()
export class ParseIdPipe implements PipeTransform<string, number> {


  transform(value: string, metadata: ArgumentMetadata): number {
   const val = parseInt(value, 10)
    if (isNaN(val))  throw  new BadRequestException("id must be a number")
    if (val <= 0 ) throw  new BadRequestException("id must be a positive number")
    return val
  }


}