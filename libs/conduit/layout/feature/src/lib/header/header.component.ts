import {ChangeDetectionStrategy, Component} from "@angular/core";
import {RouterModule} from "@angular/router";

@Component({
    selector: 'conduit-header',
    template: `
        <nav class="navbar navbar-light">
            <div class="container">
                <a class="navbar-brand" href="index.html">conduit</a>
                <ul class="nav navbar-nav pull-xs-right">
                    <li class="nav-item">
                        <!-- Add "active" class when you're on that page" -->
                        <a class="nav-link "
                           routerLinkActive="active"
                           [routerLinkActiveOptions]="{exact: true}"
                           routerLink="/home">Home
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="">
                            <i class="ion-compose"></i>&nbsp;New Article
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="">
                            <i class="ion-gear-a"></i>&nbsp;Settings
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"
                           routerLinkActive="active"
                           [routerLinkActiveOptions]="{exact: true}"
                           routerLink="/login">Sign in
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"
                           routerLinkActive="active"
                           [routerLinkActiveOptions]="{exact: true}"
                           routerLink="/register">Sign up
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [RouterModule]
})
export class HeaderComponent{

}
