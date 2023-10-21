import { Injectable, Logger, PipeTransform } from '@nestjs/common';

@Injectable()
export class FreezePipe implements PipeTransform {
  private readonly logger = new Logger(FreezePipe.name);

  transform(value: any) {
    this.logger.log(`Freeze pipe ${FreezePipe.name} is running ...`);
    Object.freeze(value);
    return value;
  }
}
