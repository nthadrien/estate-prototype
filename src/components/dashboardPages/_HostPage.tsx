
import { type JSX, createMemo, For, useContext, createSignal } from "solid-js";
import InfoBox from "@components/dashboardComponents/InfoBox";
import { $locale } from "src/stores/user.ts";
import { useTranslations } from "src/i18n/utils.ts";
import { useStore } from "@nanostores/solid";
import { useAuthCtx } from "src/context/authContext.tsx";


function HostPage() : JSX.Element {

  const locale = useStore($locale)
  const t = useTranslations(locale());

  const [{ user , properties }] = useAuthCtx();
  const [ dis , setDis ] = createSignal<number>(0);

  const timeLine = [
    t("timeline.weekly"),
    t("timeline.yearly"),
    t("timeline.overall"),
  ];

  const statistics = createMemo(() => {

    const networth:number = 302.99;
    let assets:number = 0;
    let recentlyAdded:number = 0;

    for(let property of properties()) {
      assets += property.estates.length;
    }

    return [
      {
        name: "Buildings",
        description: "number of buildings registered",
        value: [0,2,assets],
        unit: "building(s)",
        icon:"home",
      },
      {
        name: "Recently Added",
        description: "Number of Buildings added",
        value: [recentlyAdded, recentlyAdded, recentlyAdded ],
        unit: "building(s)",
        icon:"cart-plus",
        color:"warning",
      },
      {
        name: "Estates",
        description: "Rooms, Condors, houses and so on",
        value: [recentlyAdded,12,36],
        unit: "estates",
        icon:"money",
        color: "success",
      },
      {
        name: "Total Reservations done",
        description: "Rooms, Condors, houses and so on",
        value:[3,12,networth],
        unit: "$",
        icon:"book",
        color:"danger",
      },
    ]
  });

  return (<section class="row g-3">

      <div class="nav justify-content-between text-capitalize">
        <p class="fs-5">Welcome {user().gender == "F" ? "Mme" : "Mr"} {user().username}</p>
        <p class="fs-6 fw-bold">{t("dashb.name")}</p>
      </div>

      <ul class="nav gap-2 rounded-3">
        <For each={timeLine}>
          {(item, index) => <li class="">
            <button class={`btn btn-sm text-capitalize ${dis() === index() && "btn-secondary"}` }onClick={() => setDis(index())}>
              {item}
            </button>
          </li>}
        </For>
      </ul>

      <For each={statistics()}>
        { item => <div class="col-sm-6 col-md-4 col-lg-3">
          <InfoBox display={dis()}  details={item} />  
        </div>}
      </For>

      <section class="col-12 col-lg-6">
        <h5>Charts</h5>
        <div>
          <canvas id="myChart"></canvas>
        </div>
      </section>

      <section class="col-12 col-lg-6">

        <h5>Recent Activities</h5>

        <ul class="nav flex-column gap-2 mb-3">
          {[1,2,3].map(item => <li class="rounded p-3 border">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            quibusdam officia vel sed iste deleniti voluptatum aut.
          </li>)}
        </ul>

        <h5>Recent transactions</h5>

        <ul class="nav flex-column gap-2 mb-3">
          {[1,2,3].map(item => <li class="rounded p-3 border">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            quibusdam officia vel sed iste deleniti voluptatum aut.
          </li>)}
        </ul>

      </section>
      
  </section>);
}

export default HostPage
