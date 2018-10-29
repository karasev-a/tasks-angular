import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

    constructor(private injector: Injector) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const authService = this.injector.get(AuthService);
        // req.headers['Authorization'] = `Bearer ${authService.token}`;
        // req.headers.append('Authorization', `Bearer ${authService.token}`);
        // const reqHead: any = req.headers;
        // const authRequest = req.clone({
        //     headers: reqHead,
        // });

        const authRequest = req.clone({
            headers: req.headers.set('Authorization', `${authService.token}`),
        });

        return next.handle(authRequest);
    }
}
