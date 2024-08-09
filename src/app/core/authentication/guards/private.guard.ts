import { inject, Inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { TokenService } from "@core/services/token.service";
import { CookieService } from "ngx-cookie-service";

export const privateGuardGuard: CanActivateFn = () => {
    const router = new Router();
    const cookieService = inject(CookieService);
    const tokenService = new TokenService(cookieService);

    if (tokenService.getToken()) {
        router.navigate(["/dashboard"]);
        return false;
    }
    return true;
};
