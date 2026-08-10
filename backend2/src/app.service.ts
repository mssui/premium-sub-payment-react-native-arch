import { Get, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  @Get('/')
  getDocs() {
    return { message: 'Documentation endpoint' };
  }
}
