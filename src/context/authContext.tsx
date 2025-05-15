
import { useStore } from "@nanostores/solid";
import { createContext, type JSX, For, createResource, useContext, Match, Switch, createEffect, createMemo, type Accessor, type Resource, createSignal, Suspense, onMount } from "solid-js";
import { getProperties, getAccountDetails, getMessages } from "src/api/hostRequests.ts";
import { $user, $locale } from "src/stores/user.ts";

// // --------------------- loading animation trial 

const LoadingPlaceholder = () : JSX.Element=> {
    return (<div style={"min-height:max(30vh, 580px)"} class="d-flex flex-column justify-content-center align-items-center gap-3">
        <h4> (!-_- )... <small>loading</small></h4>
        <i class="fs-3 fa fa-circle-o-notch fa-spin text-primary"></i>
    </div>);
}

export const AuthContext = createContext<any>();

interface ProviderProps {
    children: JSX.Element
}

export function AuthContextProvider (props:ProviderProps) : JSX.Element {

    const locale = useStore($locale)
    const user = useStore($user);
    const [properties, { ...restOfPties}] = createResource(() => user().id , getProperties );

    const isLoading = () => properties.loading;
    const isError = () => properties.error;

    onMount(()=>{
        if( !user() || user().role == "n/a" || user().id == "n/a" ) window.location.assign(`/${locale}/accounts/login`);
    });

    const value = [  
        { locale, user , properties , isLoading , isError  },
        {  }
    ] as const;


    return (<AuthContext.Provider value={value}>
        <Switch>
            <Match when={isLoading()}>
                <LoadingPlaceholder />
            </Match>
            <Match when={!isLoading() && !isError() }>
                <Suspense fallback={<LoadingPlaceholder />}>
                    {props.children}
                </Suspense>
            </Match>
            <Match when={!isLoading() && isError()}>
                <h1 class="text-danger">Error detected</h1>
                <p>{isError()?.status} {isError()?.message}</p>
            </Match>
        </Switch>
    </AuthContext.Provider>);
}

export function useAuthCtx() {
    const context = useContext(AuthContext);
    console.log("Auth use")
    if (!context) throw new Error("can't find AuthContext");
    return context;
}