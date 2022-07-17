import {Client} from 'appwrite'
import {inject, InjectFlags, InjectionToken} from "@angular/core";
import {API_CONFIGURATION} from "@nx-conduit/conduit/shared/data-access-api";

let api: Client | null = null;
export function injectApi(): Client{
    const configuration = inject(API_CONFIGURATION, InjectFlags.Optional);
    if(!configuration){
        throw new Error();
    }

    if(!api) {
        api = new Client().setEndpoint(configuration.endpoint).setProject(configuration.project)
    }

    return api
}
export const API = new InjectionToken<Client>('API SDK', {factory: injectApi})
