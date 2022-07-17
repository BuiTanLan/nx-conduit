import {ChangeDetectionStrategy, Component} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AuthLayoutComponent} from "@nx-conduit/conduit/shared/ui-auth-layout";

@Component({
    selector: 'conduit-login',
    template: `
        <conduit-auth-layout>
            <h1 class="text-xs-center">Sign in</h1>
            <p class="text-xs-center">
                <a routerLink="/register">Need an account?</a>
            </p>

            <ul class="error-messages">
                <li>That email is already taken</li>
            </ul>

            <form>
                <fieldset class="form-group">
                    <input class="form-control form-control-lg" type="text" placeholder="Email">
                </fieldset>
                <fieldset class="form-group">
                    <input class="form-control form-control-lg" type="password" placeholder="Password">
                </fieldset>
                <button class="btn btn-lg btn-primary pull-xs-right">
                    Sign up
                </button>
            </form>
        </conduit-auth-layout>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [RouterModule,AuthLayoutComponent]
})
export class LoginComponent{

}
