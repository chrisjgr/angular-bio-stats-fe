/* eslint-disable class-methods-use-this */
import { Injectable } from "@angular/core";
import { JwtPayloadInterface } from "@core/models/jwtPayload.interface";
import { CookieService } from "ngx-cookie-service";

@Injectable({
    providedIn: "root",
})
export class TokenService {

  constructor(
    private readonly  cookieService: CookieService
  ) {}

    saveToken(token: string): void {
        return this.cookieService.set("token", token);
    }

    getToken(): string {
        return this.cookieService.get("token") ;
    }

    removeToken(): void {
        this.cookieService.delete("token");
    }
}
