import { Component } from '@angular/core';
import {NxWelcomeComponent} from "./nx-welcome.component";

@Component({
    selector: 'conduit-root',
    template: ` <conduit-nx-welcome></conduit-nx-welcome> `,
    styles: [],
    standalone: true,
    imports: [NxWelcomeComponent]
})
export class AppComponent {
    title = 'conduit';
}
