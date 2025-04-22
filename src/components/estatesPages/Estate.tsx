import { onMount } from "solid-js";

function Estate() {

  return (
    <main class="container-xl">

        <header class="nav gap-2 justify-content-between align-items-start">

          <div>
            <h3>The Modest Lovely Suite</h3>
            <p>Room | Appartment | Suite | Studio ... of 2 people</p>
          </div>

          <div class="d-flex gap-3 align-items-center">

            <span class="btn btn-sm btn-primary">
              4.2
            </span>

            <div>
              Best Room in Yaounde <br/>
              <strong class="text-success">Fairly Good</strong>
            </div>

          </div>

        </header>


        <section style={"max-height: max(50vh,480px);"} class="row g-1">

          <div class="col-lg-8 position-relative h-100">

            <img class="object-fit-cover w-100 ratio ratio-16x9" src="/images/estates/tropical-2.jpg" alt="showcase" />

            <div class="position-absolute bottom-0 end-0 bg-dark rounded-2 btn-group">
                <button class="btn btn-dark">
                  <i class="fa fa-arrow-left"></i>
                </button>
                <button class="btn btn-dark">
                  <i class="fa fa-arrow-right"></i>
                </button>
            </div>

          </div>

          <div class="col-lg-4 d-flex gap-1 flex-lg-column overflow-auto">
            <img class="object-fit-cover flex-shrink-0 w-100 ratio ratio-16x9" src="/images/estates/tropical-3.jpg" alt="showcase" />
            <img class="object-fit-cover flex-shrink-0 w-100 ratio ratio-16x9" src="/images/estates/tropical-2.jpg" alt="showcase" />
            <img class="object-fit-cover flex-shrink-0 w-100 ratio ratio-16x9" src="/images/estates/garden-1.jpg" alt="showcase" />
            <img class="object-fit-cover flex-shrink-0 w-100 ratio ratio-16x9" src="/images/estates/tropical.jpg" alt="showcase" />
          </div>

        </section>


        <nav>

        </nav>


        <section>

        </section>


        <section>

        </section>
      
    </main>
  )
}

export default Estate
