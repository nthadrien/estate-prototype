import { useStore } from "@nanostores/solid";
import { onCleanup, onMount,Switch, Match, For, type JSX,  } from "solid-js";
import  { $urlParameters, $urlHashing }  from "src/stores/routerStates";

export type RouterProps = {
    routes: {
        href:string;
        component: JSX.Element
    }[];
    fallback: JSX.Element,
}

export function CustomRouterSwitch(props:RouterProps) : JSX.Element {


    const searchParams = useStore($urlParameters);
    const currentPage = useStore($urlHashing);

    // const { $urlHashing , $urlParameters }  = routeFunc;


    const hashchanged = (e:HashChangeEvent) => {
        // const srch = window.location.search;
        const prms = window.location.hash;
        $urlHashing.set(prms);
        // changeEstateParameters(s);
        console.warn(" newurl: "+ prms )
    }

    onMount(()=>{
        window.addEventListener('hashchange', (e) => hashchanged(e));
        onCleanup(()=>{
            window.removeEventListener('hashchange', (e) => hashchanged(e));
        });
    });

    return (
        <Switch fallback={props.fallback}>
            <For each={props.routes}>
                { item => <Match when={ currentPage() == item.href}>{item.component}</Match>}
            </For>
        </Switch>
    );
}