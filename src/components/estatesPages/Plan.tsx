

import { type JSX } from "solid-js";

export default function PlanOVisit (): JSX.Element {
  return (<section class="col-lg-8">

    <nav class="nav justify-content-between align-items-center">

        <h5 class="text-capitalize fw-bolder">Visit & Plan</h5>


        <button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePlansOVisits" aria-expanded="false" aria-controls="collapsePlansOVisits">
            Visit
        </button>
        
    </nav>

    <aside class="collapse" id="collapsePlansOVisits">
        <div class="card card-body">
            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
        </div>
    </aside>


    <aside class="row row-cols-1 row-cols-lg-2 g-2">

      <div class="col">
        <small> 2d Plan of the "Estate type"</small>
      </div>

      <div class="col">
        <small>3d visit of "Estate type"</small>
      </div>

    </aside>


  </section>);
}