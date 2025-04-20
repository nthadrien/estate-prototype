import EstateCard from "@components/cards/EstateCard";
import { type JSX} from "solid-js";


const Home = ():JSX.Element => {
    return ( 
        <main class="container-xxl">
            <h2>Home Page</h2>

            <div class="row row-cols-1 row-cols-lg-3 g-2 justify-content-center">
                {[1,2,3,4,5,6,7,8].map( item => <div style={"max-width: 26rem;"} class="col">
                    <EstateCard />
                </div>)}
            </div>
        </main>
    )
}

export default Home;