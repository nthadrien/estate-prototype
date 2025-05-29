import EstateCard from "@components/cards/EstateCard";
import { $locale } from "src/stores/user.ts";
import { useTranslations } from "src/i18n/utils.ts";
import { useStore } from "@nanostores/solid";
import { createSignal, createResource, For, type JSX, Suspense, Show, onMount} from "solid-js";
// import { output } from "src/api/generateDataFxn";


import PriceRangeSlider from "@components/reactiveInputs/priceRangeSlider";
import { PageLoadingPlaceholder } from "@components/placeholders/loadingPlaceholders";


const fetchData = async(id:string) => {
    return (await fetch("http://localhost:8000/estates?_embed=estateReviews")).json();
}

const Home = ():JSX.Element => {

    const locale = useStore($locale);
    const t = useTranslations(locale());

    // const data = estates;
    const [query , setQuery ] = createSignal<string>("");
    const [data] = createResource(query, fetchData);

    onMount(()=>{
        // output()
    })

    return ( 
    <>
        <main class="container-xl nav flex-column gap-2 justify-content-center mx-auto mb-3">

            <Show when={data.error}>
                <p class="text-danger">Search QUery Error</p>
            </Show>

            <Suspense fallback={<PageLoadingPlaceholder/>}>
                <section class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3 justify-content-center justify-content-lg-evenly align-items-center p-2">
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