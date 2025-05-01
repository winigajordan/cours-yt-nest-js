import {
  Body,
  Controller,
  Get,
  HttpCode,
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
import { IdParamDto } from './dto/idParam.dto';
import { ParseIdPipe } from './pipes/parseIdPipes';
import { createPropertySchema, CreatePropertyZodDto } from './dto/createPropertyZod.dto';
import { ZodValidationPipe } from './pipes/zodValidationPipe';

@Controller('property')
export class PropertyController {
  @Get()
  findAll() {
    return 'All Properties';
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
    return body;
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id, @Query('req', ParseBoolPipe) req) {
    console.log(typeof id, typeof req);
    return id;
  }

  @Get(':id/:name')
  getParams(@Param() data) {
    return data;
  }

  //always : true is used when any attribute of the Dto hasn't the required group
  @Patch(':id')
  update(
    @Param('id', ParseIdPipe) id,
    @Body() body: CreatePropertyDto
  ) {
    return body;
  }
}
