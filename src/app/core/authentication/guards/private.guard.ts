import { Inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { TokenService } from "@core/services/token.service";
import { CookieService } from "node_modules/ngx-cookie-service/lib/cookie.service";

export const privateGuardGuard: CanActivateFn = () => {
    const router = new Router();
    const cookieService = Inject(CookieService);
    const tokenService = new TokenService(cookieService);

    if (tokenService.getToken()) {
        router.navigate(["/dashboard"]);
        return false;
    }
    return true;
};
