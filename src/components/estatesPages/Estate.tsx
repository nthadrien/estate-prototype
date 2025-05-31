

import { useStore } from "@nanostores/solid";
import { createResource, createSignal, For, Match, onMount, Show, Switch, type JSX } from "solid-js";

import { useTranslations } from "src/i18n/utils.ts";
import { $locale } from "src/stores/user.ts";
import { fetchEstate } from "src/api/getRequests.ts";

import Reviews from "./Reviews.tsx";
import Amenities from "./Amenities.tsx";
import PlanOVisit from "./Plan.tsx";
import Location from "./Locations.tsx";
import EstateGallery from "./EstateGallery.tsx";

interface srch {
  type: string;
  id: string;
  add: string;
  added: string;
  specs: string;
}

const initSrch = {
  type: "",
  id: "",
  add: "",
  added: "",
  specs: "",
}

function Estate():JSX.Element {

  const locale = useStore($locale)
  const t = useTranslations(locale());

  const [estateId, setEstateId ] = createSignal<string>('description');
  const [estateInfo] = createResource(estateId,fetchEstate);
 
  onMount(()=>{
    const obj:any = new Object(initSrch);
    const parms = window.location.search.split("&");
    parms.forEach( pp => {
      const keyp:string = pp.split("=")[0];
      const valp:string = pp.split("=")[1];
      obj[keyp] = valp;
    })
    if ( obj.id ) setEstateId(obj.id);
  });

  const leftPages:string[] = ["description","book","plans"];

  const Header = () :JSX.Element => (<aside class="lh-1 col-lg-8">
    <span class="fw-bold fs-3">{estateInfo()?.name}</span>  <br/>
    {estateInfo()?.type} for {estateInfo()?.numOfGuest} guest(s)
      <button class="btn">
        <i class="fa fa-share-alt"></i>
      </button>
      <button class="btn">
        <i class="fa fa-bookmark-o"></i>
      </button> <br/> 
      <i class="fa fa-map-marker" /> {estateInfo()?.address}
  </aside>);

  const Header2 = ():JSX.Element => ( <aside class="col-lg-4 d-flex gap-3 align-items-center">
    <span class="btn btn-sm btn-primary fw-bold"> {estateInfo()?.estateReviews[0].generalRate.toString().slice(0,3)} </span>
    <div>
      {estateInfo()?.estateReviews[0].lastReview} <br/>
      <strong class="text-success">Fairly Good</strong>
    </div>

  </aside>);




  const Description = (): JSX.Element => (<aside class="col-lg-8 p-2">

    <section>
      <h5 class="text-capitalize fw-bolder">Description</h5>

      <p>{estateInfo()?.desc} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum deleniti sit, reiciendis nostrum doloremque hic impedit maiores tenetur illum nam suscipit quaerat numquam accusantium perspiciatis delectus ab, exercitationem id voluptates!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nesciunt possimus quae reprehenderit labore necessitatibus harum iusto, ut veniam, autem aliquam earum fugit perspiciatis in cum, sit voluptatem delectus! Sed.
      </p>

      <ul class="row row-cols-2">
        <li class="col">Size: 12x24 sqm</li>
        <li class="col">Number Of Rooms: 2</li>
        <li class="col">Number Of Rooms: 2</li>
        <li class="col">Number Of Rooms: 2</li>
      </ul>

      <h6 class="text-capitalize fw-bold">{t("price")}</h6>

      <ul class="">
        <li>Day : $45</li>
        <li>Night: $60</li>
        <li>Hourly: $32 </li>
      </ul>
    </section>

  </aside>);



  return (<main class="container row g-3 mx-auto">

    <Show when={estateInfo.error}>
        <p>Loading: {estateInfo.loading}</p>
        <p>Error: {estateInfo.error}</p>
        <p>State: {estateInfo.state}</p>
    </Show>
      
    <Show when={!estateInfo.loading && !estateInfo.error && estateInfo.state === "ready" }>

      <EstateGallery />
      <Header />
      <Header2 />
      <Description />
      <Location />
      <Amenities />
      <PlanOVisit />
      <Reviews />

    </Show>
  </main>);
}

export default Estate
