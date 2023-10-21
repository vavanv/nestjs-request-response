import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('error')
  throwError() {
    throw new Error('Error');
  }

  // @Post()
  // examplePost(@Body(new FreezePipe()) body: any) {
  //   //body.test = 321;
  //   // return body;
  // }
}
