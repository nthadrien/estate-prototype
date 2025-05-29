
import { useStore } from "@nanostores/solid";
import { createContext, type JSX, For, createResource, useContext, Match, Switch, createEffect, createMemo, type Accessor, type Resource, createSignal, Suspense, onMount } from "solid-js";
import { getProperties, getAccountDetails, getMessages, delProperties } from "src/api/hostRequests.ts";
import { $user, $locale, type LocationSetType, setLocation, isAuthorize } from "src/stores/user.ts";
import { PageLoadingPlaceholder } from "@components/placeholders/loadingPlaceholders";
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
        if( !isAuthorize() ) window.location.assign(`/${locale}/accounts/login`);
    });

    const deteleProperty = async (id:string) => {
        const b = confirm("sure??");
        if ( b ) {

        }
    }

    const updateProperty = async (id:string, a:any) => {}

    const value = [  
        { locale, user , properties , isLoading , isError  },
        { delProperties  }
    ] as const;


    return (<AuthContext.Provider value={value}>
        <Switch>
            <Match when={isLoading()}>
                <PageLoadingPlaceholder />
            </Match>
            <Match when={!isLoading() && !isError() }>
                <Suspense fallback={<PageLoadingPlaceholder />}>
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
    if (!context) throw new Error("can't find AuthContext");
    return context;
}