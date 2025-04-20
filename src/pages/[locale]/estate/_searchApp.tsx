
import { CustomRouterSwitch, type RouterProps } from "src/js/router.tsx";
import  {type JSX, Switch, Match, createSignal, onMount, lazy } from "solid-js";


const Home = lazy( ()=> import("@components/estates/Home"));


const About = ():JSX.Element  => {
    return ( 
        <main>
            <h2>About Page</h2>
        </main>
    )
}


export default function SearchApp ( ) {

    const routes : RouterProps['routes'] = [
        {
            href: "#",
            component : Home()
            
        },
        {
            href: "#search",
            component : Home()
            
        },
        {
            href: "#about",
            component : About()
        },
        {
            href: "#hello",
            component : <h2>Welcome Page Here</h2>
        }
    ]

    return (<>
        <CustomRouterSwitch routes={routes} fallback={<h3>Opps fallback Error</h3>} />
    </>);
}
