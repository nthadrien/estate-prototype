
import { type JSX, For, useContext } from "solid-js";
import InfoBox from "@components/dashboardComponents/InfoBox";
import { $locale } from "src/stores/user.ts";
import { useTranslations } from "src/i18n/utils.ts";
import { useStore } from "@nanostores/solid";
import { useAuthCtx } from "src/context/authContext.tsx";


function HostPage() : JSX.Element {

  const locale = useStore($locale)
  const t = useTranslations(locale());

  const {user} = useAuthCtx();

  return (
    <div class="row g-3">

      <h4 class="text-capitalize">
        Welocome Mr, MMe 
      </h4>

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
