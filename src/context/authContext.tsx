
import { useStore } from "@nanostores/solid";
import { createContext, type JSX ,createResource, useContext, Match, Switch, createEffect } from "solid-js";
import { getProperties , getAccountDetails, getMessages  } from "src/api/hostRequests.ts";
import { $user } from "src/stores/user.ts";

interface Props {
    children: JSX.Element;
}

const AuthContext = createContext();

export function AuthProvider(props:Props) {

    const user = useStore($user);
    
    //   const [bookings] = createResource();
    //   const [transactions] =createResource();
    //   const [notifications] = createResource();

    createEffect(() => {
        console.clear();
        if ( user().id == "none" && user().id == "n/a" ) window.location.assign("/en/accounts/login");
    });

    const [account] = createResource(user().id,getAccountDetails);
    const [propertiesList] = createResource(user().id, getProperties);
    
    const counter = [
        user,
        { 
            account,
            propertiesList,
        }
    ];

    

    const authorized = ():boolean => user().id !== "none" && user().id !== "n/a";

    return (
        <Switch>
            <Match when={authorized()} >
                <AuthContext.Provider value={counter}>
                    {props.children}
                </AuthContext.Provider>
            </Match>
            <Match when={!authorized()}>
                <h1 class="text-danger">
                    Not Authorized Please Login Again
                </h1>
            </Match>
        </Switch>
    );
}

export const useAuthCtx = () => useContext(AuthContext);