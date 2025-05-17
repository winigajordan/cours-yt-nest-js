import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private config : ConfigService) {}

  @Get()
  getHello(): string {
    return this.config.get("dbconfig.dev.type")!;
    //return this.appService.getHello();
  }
}
