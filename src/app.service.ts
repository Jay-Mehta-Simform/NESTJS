import { HttpException, Injectable, UseFilters } from '@nestjs/common';
import { Catch } from './decorators/error-handling.decorator';
import { Logger } from '@nestjs/common';

@Injectable()
export class AppService {
    private readonly logger = new Logger(AppService.name);
    @Catch()
    //@UseFilters(HttpException)
    getHello(): string {
        throw new Error('Service');
        return 'Hello World!';
    }
}
