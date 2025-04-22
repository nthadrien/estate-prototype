
import { CustomRouterSwitch, type RouterProps } from "src/js/router.tsx";
import  {type JSX, Switch, Match, createSignal, onMount, lazy } from "solid-js";


const Home = lazy( ()=> import("@components/estatesPages/Home"));
const Estate = lazy( () => import("@components/estatesPages/Estate") );


const About = ():JSX.Element  => {
    return ( 
        <main>
            <h2>About Page</h2>
        </main>
    )
}


export default function SearchApp ( ) {

    return Home();
}
