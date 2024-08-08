import { Routes } from '@angular/router';

export const routes: Routes = [
  {
      path: "",
      redirectTo: "/login",
      pathMatch: "full",
  },
  {
      path: "login",
      loadComponent: () => import("@authentication/pages/login/login.component").then((m) => m.LoginComponent)

  },
  {
    path: "dashboard",
    children: [
      {
        path: "",
        loadComponent: () => import("@features/dashboard/dashboard.component").then((m) => m.DashboardComponent)
      }
    ]

}
];
