
import { useStore } from "@nanostores/solid";
import { createContext, type JSX , type Resource,createResource, useContext, Match, Switch, createEffect, createMemo, type Accessor, createSignal, Suspense } from "solid-js";
import { getProperties , getAccountDetails, getMessages  } from "src/api/hostRequests.ts";
import { $user, $locale, type UserType, userInit } from "src/stores/user.ts";
import  type { EstateType , BuildingType } from "src/api/dataTypes.ts";


export const USER_INIT = userInit;
const PROPERTIES_INIT:BuildingType[] = [];

const INITIAL_CTX_SETTER = {
  addEstate: () => {},
  addBuilding: () => {}
};

export const AuthContext = createContext({
    user: USER_INIT, 
    properties: PROPERTIES_INIT,

    ...INITIAL_CTX_SETTER
});

interface Props {
    children: JSX.Element;
}






// --------------------- loading animation trial 

const Loading = () : JSX.Element=> {
    return (<div>
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

// --------------------- loading ends here

export function AuthProvider(props:Props) {

    const user = useStore($user);

    createEffect(() => {
        // if ( user().id == "none" && user().id == "n/a" ) window.location.assign("/"+$locale+"/accounts/login");
        console.log(user().username, $user.get().gender , $locale.get() );
        console.error( isError() )
    });

    const [account] = createResource(user().id,getAccountDetails);
    const [propertiesList,{ ...propRest }] = createResource(user().id, getProperties);
    const [notifications,{ ...notifRest }] = createResource( user().id ,getMessages);
    const isFinished = ():boolean => account.state == "ready" && propertiesList.state == "ready" && notifications.state == "ready";
    const isError = () :boolean => account.error && propertiesList.error && notifications.error;
    
    const counter = {
        user: user(),
        properties: propertiesList(),
        addEstate() {},
        addBuilding() {}
    };

    const authorized = ():boolean => user().id !== "none" && user().id !== "n/a";

    // return (<AuthContext.Provider value={counter}>
    //     {props.children}
    // </AuthContext.Provider>);

    return (<Switch>
        <Match when={isError() }>
            <h3 class="text-warning">Please Refrexccccchhh</h3>
        </Match>

        <Match when={!isFinished() }>
            <Loading />
        </Match>

        <Match when={isFinished() }>
            <AuthContext.Provider value={counter}>
                {props.children}
            </AuthContext.Provider>
        </Match>

        </Switch>);
    
}

export function useAuthCtx () {
    const context = useContext(AuthContext);
    console.log( "Auth use")
    if (!context) throw new Error("can't find AuthContext");
    return context;
}