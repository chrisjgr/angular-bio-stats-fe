import { HttpInterceptorFn } from "@angular/common/http";
import { Inject } from "@angular/core";
import { TokenService } from "@core/services/token.service";
import { environment } from "@environments/environment";
import { CookieService } from "ngx-cookie-service";

// TODO: TEST
export const authInterceptor: HttpInterceptorFn = (req, next) => {
    const cookieService = Inject(CookieService);
    const tokenService = new TokenService(cookieService);
    const token: string = tokenService.getToken();

    const header = {
      "api-secret": environment.apiSecret,
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    }

    const servicesToIntercept = [
        "app/api/plants",
        "app/api/plants/*",
    ];

    const shouldIntercept = servicesToIntercept.some((url) => req.url.includes(url));

    if (shouldIntercept && token) {
        const request = req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`,
                ...header
            }
        });

        return next(request);
    }

    const requestWithoutAuthToken = req.clone({
      setHeaders: {
          ...header
      }
  });

    return next(requestWithoutAuthToken);
};
