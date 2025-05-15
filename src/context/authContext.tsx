
import { useStore } from "@nanostores/solid";
import { createContext, type JSX, For, createResource, useContext, Match, Switch, createEffect, createMemo, type Accessor, type Resource, createSignal, Suspense } from "solid-js";
import { getProperties, getAccountDetails, getMessages } from "src/api/hostRequests.ts";
import { $user, $locale, type UserType, userInit } from "src/stores/user.ts";
import type { EstateType, BuildingType } from "src/api/dataTypes.ts";

// export const USER_INIT = userInit;
// const PROPERTIES_INIT:BuildingType[] = [];

// const INITIAL_CTX_SETTER = {
//   addEstate: () => {},
//   addBuilding: () => {}
// };

// export const AuthContext = createContext({
//     user: Accessor<UserType>,
//     properties: () => Resource<any>,
//     ...INITIAL_CTX_SETTER
// });

// interface Props {
//     children: JSX.Element;
// }






// // --------------------- loading animation trial 

const LoadingPlaceholder = () : JSX.Element=> {
    return (<div style={"min-height:max(30vh, 580px)"}>
        <h3>Loading please be patient</h3>
        <p class="card-text placeholder-glow">
        <span class="placeholder col-7"></span>
        <span class="placeholder col-4"></span>
        <span class="placeholder col-4"></span>
        <span class="placeholder col-6"></span>
        <span class="placeholder col-8"></span>
        </p>
    </div>);
}

// export const buildAuthContext = () => {
//     const user = useStore($user);
//     const [properties, { ...restOfPties}] = createResource(() => user().id , getProperties );

//     const isLoading = () => properties.loading;
//     const isError = () => properties.error;

//     return [
//         { user , properties , isLoading , isError  },{}
//     ] as const;
// }

// mine done here : 

export const AuthContext = createContext<any>();

interface ProviderProps {
    children: JSX.Element
}

export function AuthContextProvider (props:ProviderProps) : JSX.Element {

    const user = useStore($user);
    const [properties, { ...restOfPties}] = createResource(() => user().id , getProperties );

    const isLoading = () => properties.loading;
    const isError = () => properties.error;

    const value = [  
        { user , properties , isLoading , isError  },
        {  }
    ] as const;


    return (<AuthContext.Provider value={value}>
        <Switch>
            <Match when={!isLoading() && !isError() }>
                <h2 class="text-success">Doom Should be render now..</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quae, laborum temporibus cupiditate nesciunt modi. Laudantium, praesentium magni! Incidunt suscipit, saepe quod reprehenderit labore officiis minima dolore nemo. Ullam, perspiciatis?</p>
                {props.children}
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