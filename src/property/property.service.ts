import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Property } from '../entities/property.entity';
import { CreatePropertyDto } from './dto/createPropertyDto';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdatePropertyDto } from './dto/updateProperty.dto';
import { PaginationDto } from './dto/pagination.dto';
import { DEFAULT_PAGE_SIZE } from '../utils/constants';

@Injectable()
export class PropertyService {


  constructor(
    @InjectRepository(Property)  private propertyRepo : Repository<Property>
  ) {
  }


  async findAll( pagination : PaginationDto ) {
    return await this.propertyRepo.find({
      skip: pagination.skip,
      take : pagination.limit ?? DEFAULT_PAGE_SIZE,
    });
     }

  async findOne(id:number)
  {
      const property = await this.propertyRepo.findOne({
        where: {
          id: Number(id)
        }
      })
    if (!property) throw new NotFoundException(`Property with id ${id} not found`)
    return property;
  }

  async create(dto : CreatePropertyDto)
  {
    return await this.propertyRepo.save(dto);
  }

  async update(id:number, dto: UpdatePropertyDto){
      return await this.propertyRepo.update({ id }, dto);
  }

  async delete(id : number){
    return await this.propertyRepo.delete({ id });
  }


}
