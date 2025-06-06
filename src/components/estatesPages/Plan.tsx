

import { type JSX, onMount, onCleanup, createEffect } from "solid-js";


export default function PlanOVisit (): JSX.Element {

  let viewerRef : HTMLElement ; // Reference to the div where Pannellum will render

  createEffect(() => {
  });

  onCleanup(() => {
    // Optional: If Pannellum provides a destroy method, call it here
    // to clean up resources when the component is unmounted.
    // window.pannellum.destroy(viewerRef); // This is just an example; check Pannellum docs
  });



  return (<section class="col-lg-8">

    <nav class="nav justify-content-between align-items-center">
      <h5 class="text-capitalize fw-bolder">Visit & Plan</h5>  
    </nav>

    <aside class="collapse" id="collapsePlansOVisits">
        <div class="card card-body">
            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
        </div>
    </aside>


    <aside class="row row-cols-1 row-cols-lg-2 g-2 align-items-center justify-content-center">
        
        <div>
          <strong class="col"> 2d Plan of the "Estate type"</strong>
          <p class="col-auto text-secondary">
            image caption : Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Corrupti earum est asperiores, mollitia, esse laboriosam fugit cupiditate ea debitis illo unde quidem, 
            officiis suscipit adipisci qui accusantium odit quibusdam eius?
          </p>
        </div>

        <img class="col-md-6  rounded-3 shadow-sm" src="/images/estates/2d-plan.jpg" alt="alt" />
    </aside>

    <aside>
      <a class="btn btn-sm btn-primary" href="#gallery">view 2d gallery</a>
    </aside>

    <aside class="my-4">
      <h6 class="fw-bold">Virtual tour / 3d tour</h6>

      <div id="panorama"></div>
    </aside>


  </section>);
}