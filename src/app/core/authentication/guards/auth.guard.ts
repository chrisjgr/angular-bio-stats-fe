import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { TokenService } from "@core/services/token.service";
import { CookieService } from "ngx-cookie-service";

export const authGuard: CanActivateFn = () => {
    const router = new Router();
    const cookieService = inject(CookieService);
    const tokenService = new TokenService(cookieService);

    if (!tokenService.getToken()) {
        router.navigate(["/login"]);
        return false;
    }

    return true;
};
