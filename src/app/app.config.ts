import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { ApplicationConfig } from "@angular/core";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { provideRouter } from "@angular/router";
import { authInterceptor } from "@core/interceptors/auth.interceptor";
import { TokenService } from "@core/services/token.service";
import { AuthService } from "@authentication/services/auth.service";


import { routes } from "./app.routes";
import { CookieService } from "ngx-cookie-service";

export const appConfig: ApplicationConfig = {
    providers: [
        provideAnimationsAsync(),
        provideRouter(routes),
        provideHttpClient(withInterceptors([authInterceptor])),
        CookieService,
        AuthService,
        TokenService,
    ]
};
