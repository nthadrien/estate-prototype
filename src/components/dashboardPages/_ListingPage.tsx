import { type JSX, For } from "solid-js";

export default function ListingPage(): JSX.Element {
  return (
    <section class="row g-3 g-lg-4 row-cols-2 row-cols-lg-3 row-cols-xl-4">
      <For each={[...Array.from(Array(4).keys())]}>

        {item => <div class="col border">

          <div style="height: 20rem;" class="img-fluid img-thumbnail rounded-4">
            <img src="" alt="estate" />
          </div>

          <div class="">
            <span class="">Guest house </span> 
            <span class="-end"> XAF 200 </span>
            <br /> 
            <i class="bi bi-geo-alt"></i> Yaounde

            <p class="col-12 d-flex justify-content-between align-items-center">
              <span>rooms: 3 </span>
              <span>parlor: 3 </span>
              <span>baths: 2 </span>
              <span>size: {item + 12} sqm</span>
            </p>

          </div>

        </div>}

      </For>

    </section>
  )
}
