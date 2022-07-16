import {ChangeDetectionStrategy, Component} from "@angular/core";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {RouterModule} from "@angular/router";

@Component({
    selector: 'conduit-layout',
    template: `
        <conduit-header></conduit-header>
        <router-outlet></router-outlet>
        <conduit-footer></conduit-footer>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [HeaderComponent, FooterComponent, RouterModule]
})
export class LayoutComponent{

}
