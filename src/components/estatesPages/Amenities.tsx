import {type JSX } from "solid-js";

export default function Amenities ():JSX.Element {

    return (<section class="col-lg-8 ">

    <h5 class="fw-bolder">Amenities</h5>
  
    <div class="g-3 row row-cols-1 row-cols-lg-2">

      <aside class="col border border-secondary-subtle rounded">
        <h6>Room Amenities</h6>
      </aside>

      <aside class="col border border-secondary-subtle rounded">
        <h6>Building Amenities</h6>
      </aside>

    </div>

</section>);

}