
import { useStore } from "@nanostores/solid";
import { createContext, type JSX, For, createResource, useContext, Match, Switch, createEffect, createMemo, type Accessor, type Resource, createSignal, Suspense, onMount } from "solid-js";
import { getProperties, getAccountDetails, getMessages, delProperties } from "src/api/hostRequests.ts";
import { $user, $locale, type LocationSetType, setLocation, isAuthorize } from "src/stores/user.ts";

// // --------------------- loading animation trial 

const LoadingPlaceholder = () : JSX.Element=> {
    return (<aside class="container row g-3 opacity-25 p-3 mx-auto position-relative" >

        <div  class="col-12 placeholder-glow">
            <div style="min-height: max(200px,30vh);" class="placeholder w-100 rounded-3">
            </div>
        </div>

        <div class="position-absolute">
            A little more please...
        </div>
    
        {[1,2,3,4,5].map( i => <div class="col-6 col-lg-4 placeholder-wave"> 
            <img height="240px" class="placeholder w-100 rounded-3 mb-3" src="" alt="pholder" />
            <p class="placeholder placeholder-lg bg-light col-7"></p>
            <p class="placeholder col-12 mb-3"></p>
            <p class="placeholder col-12 mb-3"></p>
            <small class="placeholder col-4"></small>
        </div>)}
    
    </aside>)
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
    if (!context) throw new Error("can't find AuthContext");
    return context;
}