import { Injectable, NestInterceptor, ExecutionContext, CallHandler, HttpException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const request = context.switchToHttp().getRequest();
        const { method, url } = request;

        console.log(`[${method}] ${url} started...`);

        const now = Date.now();
        return next
            .handle()
            .pipe(
                tap(() => console.log(`[${method}] ${url} completed in ${Date.now() - now}ms`)),
                catchError((error) => {
                    console.error(`\x1b[31m`, `[${method}] ${url} completed in ${Date.now() - now}ms error:`, JSON.stringify(error.response), `\x1b[0m`);
                    throw new HttpException(error.response, error.response.statusCode);
                }),
            );
    }
}