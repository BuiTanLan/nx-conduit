import {enableProdMode, importProvidersFrom} from '@angular/core';
import { environment } from './environments/environment';
import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {RouterModule} from "@angular/router";

if (environment.production) {
    enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(
            RouterModule.forRoot([
                {
                    path: '',
                    loadComponent: () => import('@nx-conduit/conduit/layout/feature').then(m => m.LayoutComponent)
                }
            ])
        )
    ]
}).catch((err) => console.error(err));
