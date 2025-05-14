
import { type JSX, createMemo, For, useContext } from "solid-js";
import InfoBox from "@components/dashboardComponents/InfoBox";
import { $locale } from "src/stores/user.ts";
import { useTranslations } from "src/i18n/utils.ts";
import { useStore } from "@nanostores/solid";
import { useAuthCtx } from "src/context/authContext.tsx";


function HostPage() : JSX.Element {

  return (<h1>
    Host Pagie
  </h1>)

  const locale = useStore($locale)
  const t = useTranslations(locale());

  const {user, properties } = useAuthCtx();

  const statistics = createMemo(() => {

    const networth:number = 302.99;
    let assets:number = 0;
    let recentlyAdded = 0;

    for(let property of properties) {
      assets += property.estates.length;
    }

    // return {
    //   assets,
    //   recentlyAdded,
    //   networth,
    //   properties: properties.length,
    // }

    return [
      {
        name: "",
        description: "",
        value: "",
        unit: ""
      },
    ]
  });

  return (
    <div class="row g-3">

      <div class="nav justify-content-between text-capitalize">
        <p class="fs-5">Welcome {user.gender == "F" ? "Mme" : "Mr"} {user.username}</p>
        <p class="fs-6 fw-bold">{t("dashb.name")}</p>
      </div>

      <For each={statistics()}>
        { item => <div class="col col-lg-6">
          <InfoBox />  
        </div>}
      </For>

      <h4>Month Overview</h4>
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
