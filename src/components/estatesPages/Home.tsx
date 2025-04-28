import EstateCard from "@components/cards/EstateCard";
import { createSignal, createResource, For, type JSX, Suspense, Show, onMount} from "solid-js";
// import { output } from "src/api/generateDataFxn";


const fetchData = async(id:string) => {
    return (await fetch("http://localhost:8000/estates?_embed=estateReviews")).json();
}

const Home = ():JSX.Element => {

    // const data = estates;
    const [query , setQuery ] = createSignal<string>("");
    const [data] = createResource(query, fetchData);

    onMount(()=>{
        // output()
    })



    return ( 
    <>

        

        <header style={"background: url('/images/estates/tropical.jpg no-repeat');min-height:30vh;"} class="">

        </header>

        <form class="container d-flex align-items-center gap-2 mx-auto rounded-3">

            <label class="form-float rounded-4 text-secondary">
                <i class="fa fa-globe fa-2x"></i>
                <div>
                    Country /city
                    <input type="email" class="" id="floatingInput" placeholder="yaounde" />
                </div>
            </label>

            <label class="form-float rounded-4 text-secondary">
                <i class="fa fa-calendar-o fa-2x"></i>
                <div>
                    Dates
                    <input type="email" class="" id="lenght" placeholder="21 May - 26 Sept" />
                </div>
            </label>

            <label class="form-float rounded-4 text-secondary">
                <i class="fa fa-globe fa-2x"></i>
                <div>
                    Email address
                    <input type="email" class="" id="floatingInput" placeholder="name@example.com" />
                </div>
            </label>


            <button class="btn btn-sm btn-primary rounded-pill">
                <i class="fa fa-search"></i>
            </button>

        </form>

        <nav class="container p-3">
            <ul class="nav nav-underline">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Active</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                </li>
            </ul>
        </nav>



        <main class="container-xxl nav gap-2 justify-content-center mx-auto my-4">

            {/* <section class="col-lg-3 p-2 border rounded-3"> */}

            <section class="col-12 col-lg-3 p-2 accordion border" id="accordionPanelsStayOpenExample">
             
                <h5 class="p-3">
                    Filter by
                </h5>
                
                <div class="">
                    <button class="btn border-bottom text-start w-100" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        Accordion Item #1
                    </button>
                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse">
                        <For each={[1,2,3,4]}>
                            { (item) => 
                                <label class="form-check-label d-block p-2">
                                    <input class="form-check-input me-3" type="checkbox" value="" id="checkDefault"></input>
                                    Default checkbox
                                </label>
                            }
                        </For>  
                    </div>
                </div>

            </section>

            <Show when={data.error}>
                <p class="text-danger">Search QUery Error</p>
            </Show>

            <Suspense fallback="LoAdInG.....">
                <section class="col-lg-9 row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 g-3">
                    <For each={data()}>
                        { (item) => <div style={"max-width: 26rem;"} class="col">
                            <EstateCard data={item} />
                        </div>}
                    </For>
                </section>
            </Suspense>

        </main>

        <div class="container-sm ">
            {[1,2,3,4].map( it => <button class={`btn btn-sm ${it === 2 ? "btn-primary":""}`}>
                {it}
            </button>)}
        </div>

        </>
    )
}

export default Home;