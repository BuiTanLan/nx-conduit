import {ChangeDetectionStrategy, Component, inject} from "@angular/core";
import {injectApi} from "@nx-conduit/conduit/shared/data-access-api";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthLayoutComponent} from "@nx-conduit/conduit/shared/ui-auth-layout";
import {RouterModule} from "@angular/router";
import {Account} from "appwrite";
import {injectState} from "@nx-conduit/conduit/shared/data-access-state";

@Component({
    selector: 'conduit-register',
    template: `
        <conduit-auth-layout>
            <h1 class="text-xs-center">Sign up</h1>
            <p class="text-xs-center">
                <a routerLink="/login">Have an account?</a>
            </p>

            <ul class="error-messages">
                <li>{{state.error}}</li>
            </ul>

            <form [formGroup]="form" (ngSubmit)="submit()">
                <fieldset class="form-group">
                    <input
                        class="form-control form-control-lg"
                        type="text"
                        placeholder="Your Name"
                        formControlName="name"
                    >
                </fieldset>
                <fieldset class="form-group">
                    <input
                        class="form-control form-control-lg"
                        type="text"
                        placeholder="Email"
                        formControlName="email"
                    >
                </fieldset>
                <fieldset class="form-group">
                    <input
                        class="form-control form-control-lg"
                        type="password"
                        placeholder="Password (min 8 chars)"
                        formControlName="password"
                    >
                </fieldset>
                <button class="btn btn-lg btn-primary pull-xs-right">
                    Sign up
                </button>
            </form>
        </conduit-auth-layout>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [AuthLayoutComponent, ReactiveFormsModule, RouterModule]
})
export class RegisterComponent{
    private readonly api = injectApi();
    private readonly fb = inject(FormBuilder);
    readonly state = injectState({error: ''});
    form: FormGroup<{
        name: FormControl<string>,
        email: FormControl<string>,
        password: FormControl<string>
    }> = this.fb.nonNullable.group({
        name: [''],
        email: ['',[Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]]
    })

    async submit() {
        try{
            const {email, name,  password} = this.form.getRawValue();
            const account = await (new Account(this.api))
                .create('unique()', email, password, name)
                .catch(error => Promise.reject({type: 'account', error}))
        } catch (e){
            console.log(e)
            if ((e as Record<string, any>)['type'] === 'account') {
                this.state.error = (e as Record<string, any>)['error']['message'];
            }
        }
    }
}
