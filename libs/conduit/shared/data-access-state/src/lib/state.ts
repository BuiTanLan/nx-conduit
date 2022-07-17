import {ChangeDetectorRef, inject} from "@angular/core";

export function injectState<TState extends object>(initialState: Partial<TState>): TState {
    const cdr = inject(ChangeDetectorRef);

    return new Proxy(initialState, {
        get(target, p, receiver) {
            return Reflect.get(target,p,receiver);
        },
        set(target, p, value, receiver){
            (target as any)[p] = value;
            cdr.markForCheck();
            return true;
        }
    }) as TState;
}
