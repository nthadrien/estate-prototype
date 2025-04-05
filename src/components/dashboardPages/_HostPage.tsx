
import { type JSX, For } from "solid-js";
import InfoBox from "@components/dashboardComponents/InfoBox";



function HostPage() : JSX.Element {
  return (
    <div class="row g-3">

      <h4>WelcomeMr /Mme User </h4>

      <For each={[3,4]}>
        { item => <div class="col col-lg-6">
          <InfoBox />  
        </div>}
      </For>

      <h4>Month Overview</h4>

      <For each={[1,2,3,4]}>
        { item => <div class="col col-md-6 col-lg-3">
          <InfoBox />  
        </div>}
      </For>

      <section class="col-12 col-lg-6">

        <nav class="nav gap-2 align-items-center justify-content-between mb-2">
          <h5 style={"width:fit-content;"}>Properties Overview</h5>

          <select style={"max-width: 128px"} class="form-select border-0" name="toggle">
            <option disabled>This Month</option>
            <option value="last">Last Month</option>
            <option value="year">This Year</option>
          </select>
        </nav>


        <div class="border rounded-3">
          <h5>Charts with chart js</h5>
        </div>

      </section>


      
      <section class="col-12 col-lg-6">
        <h5>Notifications</h5>
      </section>



      
      
      
    </div>
  )
}

export default HostPage
