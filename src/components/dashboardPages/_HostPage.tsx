
import { type JSX, For } from "solid-js";
import InfoBox from "@components/dashboardComponents/InfoBox";



function HostPage() : JSX.Element {
  return (
    <div class="row g-3 ">

      <h4>WelcomeMr /Mme User </h4>

      <div class="list-unstyled row row-cols-1 row-cols-lg-2 g-2 g-lg-4">
        <For each={[3,4]}>
          { item => <div class="col">
            <InfoBox />  
          </div>}
        </For>
      </div>

      <h4>Month Overview</h4>

      <div class="list-unstyled row row-cols-2 row-cols-lg-4 g-2 g-lg-4">
        <For each={[1,2,3,4]}>
          { item => <div class="col">
            <InfoBox />  
          </div>}
        </For>
      </div>

      <section class="col-12 col-lg-6">

        <nav class="nav gap-2 align-items-center justify-content-between mb-2">

          <h4 style={"width:fit-content;"}>Properties Overview</h4>

          <select style={"max-width: 180px"} class="form-select" name="toggle">
            <option disabled>This Month</option>
            <option value="last">Last Month</option>
            <option value="year">This Year</option>
          </select>
        </nav>


        <div class="border rounded-3">
          <h1>Charts with chart js</h1>

        </div>

      </section>


      
      <section class="col-12 col-lg-6">
        <h5>Notifications</h5>
      </section>



      
      
      
    </div>
  )
}

export default HostPage
