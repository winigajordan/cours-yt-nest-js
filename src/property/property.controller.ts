import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  ParseBoolPipe,
  ParseIntPipe, Patch,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreatePropertyDto } from './dto/createPropertyDto';

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
  @UsePipes(
    new ValidationPipe({
      whitelist: true ,
      forbidNonWhitelisted: true,
      groups : ['create'],
    })
  )
  @HttpCode(200)
  create(@Body() body: CreatePropertyDto) {
    return body;
  }

  @Get(':id')
  findOne(
    @Param('id', ParseIntPipe) id,
    @Query('req', ParseBoolPipe) req,

  ) {
    console.log(typeof id, typeof req);
    return id;
  }

  @Get(':id/:name')
  getParams(@Param() data) {
    return data;
  }

  //always : true is used when any attribute of the Dto hasn't the required group
  @Patch(':id')
  @UsePipes(
    new ValidationPipe({
      whitelist: true ,
      forbidNonWhitelisted: true,
      groups : ['update'],
      always : true
    })
  )

  update(@Body() body: CreatePropertyDto) {
    return body;
  }
}
