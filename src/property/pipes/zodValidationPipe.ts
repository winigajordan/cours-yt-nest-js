import { ArgumentMetadata, BadRequestException, PipeTransform } from '@nestjs/common';
import { ZodSchema } from 'zod';

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}

  transform(value: any, metadata: ArgumentMetadata) {

    /*
    try {
    const parsedValue = this.schema.parse(value);
    return parsedValue;
  } catch (error) {
    throw new BadRequestException("Validation Failed");
  }

     */


    //this way is used to have the error and the status of the reequest
    const parsedValue = this.schema.safeParse(value);
    if (parsedValue.success) return parsedValue;

    throw new BadRequestException(parsedValue.error.format());


  }
}