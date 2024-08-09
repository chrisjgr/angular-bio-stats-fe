import { Routes } from '@angular/router';
import { authGuard } from '@core/authentication/guards/auth.guard';
import { privateGuardGuard } from '@core/authentication/guards/private.guard';

export const routes: Routes = [
  {
      path: "",
      redirectTo: "/login",
      pathMatch: "full",
  },
  {
      path: "login",
      canActivate: [privateGuardGuard],
      loadComponent: () => import("@authentication/pages/login/login.component").then((m) => m.LoginComponent)

  },
  {
    path: "dashboard",
    canActivate: [authGuard],
    children: [
      {
        path: "",
        loadComponent: () => import("@features/dashboard/dashboard.component").then((m) => m.DashboardComponent)
      }
    ]

}
];
