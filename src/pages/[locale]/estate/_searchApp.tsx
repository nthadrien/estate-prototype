
import { Router, Route } from "@solidjs/router";
import  {type JSX, createSignal } from "solid-js";

const Home = ():JSX.Element => {
    return ( 
        <main>
            <h2>Home Page</h2>
        </main>
    )
}

const About = ():JSX.Element  => {
    return ( 
        <main>
            <h2>About Page</h2>
        </main>
    )
}



export default function SearchApp ( ) {
    console.log("Search app launched!!")
    return (<Router>

        <Route path={"/en/estate"}>
            <Route path="/" component={Home} />
            <Route path="#/hello-world" component={() => <h1>Hello World!</h1>} />
            <Route path="/about" component={About} />
        </Route>
        
    </Router>);
}
