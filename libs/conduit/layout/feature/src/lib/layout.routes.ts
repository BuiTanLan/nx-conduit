import {Routes} from "@angular/router";

export const layoutRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('@nx-conduit/conduit/home/feature').then(m => m.HomeComponent)
    },
    {
        path: 'login',
        loadComponent: () => import('@nx-conduit/conduit/login/feature').then(m => m.LoginComponent)
    },
    {
        path: 'register',
        loadComponent: () => import('@nx-conduit/conduit/register/feature').then(m => m.RegisterComponent)
    }
]
