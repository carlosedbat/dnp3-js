import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  // coment for commit only develop
  ping(): string {
    return this.appService.ping();
  }
}
