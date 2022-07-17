import {ChangeDetectionStrategy, Component, inject} from "@angular/core";
import {injectApi} from "@nx-conduit/conduit/shared/data-access-api";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'conduit-register',
    template: `
        <div class="auth-page">
            <div class="container page">
                <div class="row">

                    <div class="col-md-6 offset-md-3 col-xs-12">
                        <h1 class="text-xs-center">Sign up</h1>
                        <p class="text-xs-center">
                            <a href="">Have an account?</a>
                        </p>

                        <ul class="error-messages">
                            <li>That email is already taken</li>
                        </ul>

                        <form>
                            <fieldset class="form-group">
                                <input class="form-control form-control-lg" type="text" placeholder="Your Name">
                            </fieldset>
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
                    </div>

                </div>
            </div>
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true
})
export class RegisterComponent{
    private readonly api = injectApi();
    private readonly fb = inject(FormBuilder);
    form: FormGroup<{
        name: FormControl<string>,
        email: FormControl<string>,
        password: FormControl<string>
    }> = this.fb.nonNullable.group({
        name: [''],
        email: ['',[Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]]
    })
}
