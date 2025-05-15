import {
  Body,
  Controller, Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post, Query,
  ValidationPipe,
} from '@nestjs/common';
import { CreatePropertyDto } from './dto/createPropertyDto';
import { ParseIdPipe } from './pipes/parseIdPipes';
import { HeadersDto } from './dto/headers.dto';
import { RequestHeader } from './pipes/request-header';
import { PropertyService } from './property.service';
import { UpdatePropertyDto } from './dto/updateProperty.dto';
import { PaginationDto } from './dto/pagination.dto';

@Controller('property')
export class PropertyController {



  constructor(private propertyService: PropertyService  ) {

  }


  @Get()
  findAll(@Query()pagindationDto : PaginationDto) {
   return this.propertyService.findAll(pagindationDto);
  }

  // whitelist is to remove extra fields
  // forbidNonWhitelisted is to disable extra fields
  // groups is for validations when it has been set up on the Dto attribute

  @Post()

  create(
    @Body() body: CreatePropertyDto,
  ) {

    return this.propertyService.create(body)
    //return body;
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id) {
    return this.propertyService.findOne(id)
  }

  @Get(':id/:name')
  getParams(@Param() data) {
    return data;
  }


  @Patch(':id')
  update(
    @Param('id', ParseIdPipe) id,
    @Body() body: UpdatePropertyDto,
   @RequestHeader(new ValidationPipe({whitelist: true, validateCustomDecorators : true})) headers : HeadersDto,

  ) {
   // return headers;
    return this.propertyService.update(id, body)
  }

  @Delete(':id')
  delete(@Param('id', ParseIdPipe) id) {
    return this.propertyService.delete(id)
  }
}
