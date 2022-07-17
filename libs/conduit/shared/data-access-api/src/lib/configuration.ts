import {InjectionToken, Provider} from "@angular/core";

export interface ApiConfiguration {
    project: string;
    endpoint: string;
}
export  const API_CONFIGURATION = new InjectionToken<ApiConfiguration>('Api configuration');

export function provideApiConfiguration(configuration: ApiConfiguration): Provider{
    return {
        provide: API_CONFIGURATION,
        useValue: configuration
    }
}

