import {enableProdMode, importProvidersFrom} from '@angular/core';
import { environment } from './environments/environment';
import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {RouterModule} from "@angular/router";
import { provideApiConfiguration} from "@nx-conduit/conduit/shared/data-access-api";

if (environment.production) {
    enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        provideApiConfiguration(environment.appwrite),
        importProvidersFrom(
            RouterModule.forRoot([
                {
                    path: '',
                    loadComponent: () => import('@nx-conduit/conduit/layout/feature').then(m => m.LayoutComponent),
                    loadChildren: () => import('@nx-conduit/conduit/layout/feature').then(m => m.layoutRoutes)
                }
            ])
        )
    ]
}).catch((err) => console.error(err));
