import EstateCard from "@components/cards/EstateCard";
import { type JSX} from "solid-js";


const Home = ():JSX.Element => {
    return ( 
    <>

        <nav class="container mx-auto" style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Library</li>
            </ol>
        </nav>

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
                        {[1,2,3,4,5].map( item =>  
                            <label class="form-check-label d-block p-2">
                                <input class="form-check-input me-3" type="checkbox" value="" id="checkDefault"></input>
                                Default checkbox
                            </label>
                        )}
                    </div>
                </div>

            </section>

            <section class="col-lg-9 row row-cols-1 row-cols-lg-2 row-cols-xl-3 g-3">
                {[1,2,3,4,5,6,7,8].map( item => <div style={"max-width: 26rem;"} class="col">
                    <EstateCard />
                </div>)}
            </section>

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