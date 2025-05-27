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
        <main class="container-xxl nav flex-column gap-2 justify-content-center mx-auto my-4">

            {/* <section class="col-lg-3 p-2 border rounded-3"> */}

            <section class="p-2 accordion border shadow-sm rounded" id="accordionPanelsStayOpenExample">
             
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
                <section class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3">
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