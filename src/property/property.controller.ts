import {
  Body,
  Controller,
  Get,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UsePipes,
 ValidationPipe,
} from '@nestjs/common';
import { CreatePropertyDto } from './dto/createPropertyDto';
import { ParseIdPipe } from './pipes/parseIdPipes';
import { createPropertySchema, CreatePropertyZodDto } from './dto/createPropertyZod.dto';
import { ZodValidationPipe } from './pipes/zodValidationPipe';
import { HeadersDto } from './dto/headers.dto';
import { RequestHeader } from './pipes/request-header';
import { PropertyService } from './property.service';

@Controller('property')
export class PropertyController {



  constructor(private propertyService: PropertyService  ) {

  }


  @Get()
  findAll() {
   return this.propertyService.findAll();
  }

  // whitelist is to remove extra fields
  // forbidNonWhitelisted is to disable extra fields
  // groups is for validations when it has been set up on the Dto attribute

  @Post()
  /*@UsePipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      groups: ['create'],
    }),
  )*/
  //@HttpCode(200)
  @UsePipes(new ZodValidationPipe(createPropertySchema))
  create(
    @Body(
      /*
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        groups: ['create'],
      }),

       */

    )
    body: CreatePropertyZodDto,
  ) {

    return this.propertyService.create()
    //return body;
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id, @Query('req', ParseBoolPipe) req) {
    //console.log(typeof id, typeof req);
    return this.propertyService.findOne()
  }

  @Get(':id/:name')
  getParams(@Param() data) {
    return data;
  }

  //always : true is used when any attribute of the Dto hasn't the required group
  // @Headers() is to have all header's attribute
  @Patch(':id')
  update(
    @Param('id', ParseIdPipe) id,
    @Body() body: CreatePropertyDto,
   @RequestHeader(new ValidationPipe({whitelist: true, validateCustomDecorators : true})) headers : HeadersDto,
    //@Headers() headers,

  ) {
   // return headers;
    return this.propertyService.update()
  }
}
