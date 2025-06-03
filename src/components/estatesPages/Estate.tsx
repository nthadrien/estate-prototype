

import { useStore } from "@nanostores/solid";
import { createEffect, createResource, createSignal, For, Match, onMount, Show, Suspense, Switch, type JSX } from "solid-js";

import { useTranslations } from "src/i18n/utils.ts";
import { $locale } from "src/stores/user.ts";
import { fetchEstate } from "src/api/getRequests.ts";

import Reviews from "./Reviews.tsx";
import PlanOVisit from "./Plan.tsx";
import Location from "./Locations.tsx";
import EstateGallery from "./EstateGallery.tsx";
import { PageLoadingPlaceholder } from "@components/placeholders/loadingPlaceholders.tsx";
import amenities from "src/api/amenities.json";
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

  createEffect(()=>{
    if (estateInfo.state == "ready" ) console.log( estateInfo() )
  })

  const leftPages:string[] = ["description","book","plans"];

  const Header = () :JSX.Element => (<aside class="col-lg-8 nav justify-content-between align-items-center">

    <span class="fw-bold fs-3">{estateInfo()?.name}</span>  

    <div>
      <button class="btn">
        <i class="fa fa-share-alt"></i>
      </button>
      <button class="btn">
        <i class="fa fa-bookmark-o"></i>
      </button> 
    </div>

  </aside>);

  const ReviewHeader = ():JSX.Element => ( <aside class="col-lg-4 d-flex gap-3 align-items-center">
    <span class="btn btn-sm btn-primary fw-bold"> {estateInfo()?.estateReviews[0].generalRate.toString().slice(0,3)} </span>
    <div>
      {estateInfo()?.estateReviews[0].lastReview} <br/>
      <strong class="text-success">Fairly Good</strong>
    </div>

  </aside>);

  const Description = (): JSX.Element => (<aside class="col-lg-8 d-flex flex-column p-1">

    
    <h5 class="text-capitalize fw-bolder mb-3">Description</h5>

    <p>{estateInfo()?.desc} Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sed nemo non vel eum reprehenderit voluptate facere fugiat distinctio culpa rerum vero omnis vitae voluptatibus aliquid facilis, pariatur, cum iste!</p>

    <ul class="nav gap-3 justify-content-between text-capitalize mt-3">

      <li class="nav gap-2 align-items-center justify-content-start">
        <i aria-hidden="true" class="fs-5 fa fa-hashtag border rounded p-2 text-secondary" />
        <div>
          Property ID <br/>
          <i>#{estateInfo().id}</i>
        </div>
      </li>

      <li class="nav gap-2 align-items-center justify-content-start">
        <i aria-hidden="true" class="fs-5 fa fa-hashtag border rounded p-2 text-secondary" />
        <div>
          Property ID <br/>
          <i>#{estateInfo().id}</i>
        </div>
      </li>

      <li class="nav gap-2 align-items-center justify-content-start">
        <i aria-hidden="true" class="fs-5 fa fa-hashtag border rounded p-2 text-secondary" />
        <div>
          Property ID <br/>
          <i>#{estateInfo().id}</i>
        </div>
      </li>

      <li class="nav gap-2 align-items-center justify-content-start">
        <i aria-hidden="true" class="fs-5 fa fa-hashtag border rounded p-2 text-secondary" />
        <div>
          Property ID <br/>
          <i>#{estateInfo().id}</i>
        </div>
      </li>

      <li class="nav gap-2 align-items-center justify-content-start">
        <i aria-hidden="true" class="fs-5 fa fa-hashtag border rounded p-2 text-secondary" />
        <div>
          Property ID <br/>
          <i>#{estateInfo().id}</i>
        </div>
      </li>

      <li class="nav gap-2 align-items-center justify-content-start">
        <i aria-hidden="true" class="fs-4 fa fa-home border rounded p-2" />
        <div>
          Purpose <br/>
          rent
        </div>
      </li>

      <li title={t("key.numOfGuest")} class="col-auto ">
          <span>{t("guest")}s</span> <br/>
          <i class="fa fa-users me-2" aria-hidden="true"></i>
          {estateInfo()?.numOfGuest}
      </li>

      <li title={t("key.numOfRooms")}  class="col-auto">
          <span>{t("rooms")}</span> <br/>
          <i class="fa fa-bed me-2" aria-hidden="true"></i> 
          {estateInfo()?.numOfRooms}
      </li>

      <li title={t("key.numOfBaths")}  class="col-auto ">
          <span>{t('baths')}</span> <br/>
          <i class="fa fa-bath me-2" aria-hidden="true"></i>
          {estateInfo()?.numOfBaths}
      </li>

      <li title={`${estateInfo()?.type} dimensions`} class="col-auto ">
          <span>{t("size")}</span> <br/>
          <i class="fa fa-clone mx-1" aria-hidden="true"></i>
          <span class="text-lowercase">{estateInfo()?.size} m² </span>
      </li>
    </ul>

    <h6 class="text-capitalize mt-3">{t('price')}</h6>

    <ul class="nav p-2">
      <li>{t("key.pricePerHour")} : {estateInfo()?.pricePerHour}</li>
      <li>{t("key.pricePerDay")} : {estateInfo()?.pricePerDay}</li>
      <li>{t("key.pricePerMonth")} : {estateInfo()?.pricePerMonth}</li>
    </ul>

  </aside>);

  const BuildingAmenities = ():JSX.Element => {
    return (<section class="col-lg-8 ">

      <aside class="accordion" id="accordionAmenities">
  
        <section class="accordion-item border-0">
          
          <button class="accordion-button text-capitalize fw-bold fs-6 border-1 border-bottom" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
            {t("key.amenities")}
          </button>
          
          <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse row row-cols-2 row-cols-xl-3 g-3 p-3">
            <For each={amenities.building}>
              { (item) => <span class={`col ${ true ? "": "text-decoration-line-through" }`}>
                {/* <input class="form-check-input me-1" type="checkbox" name={item?.icon} checked={true}/> */}
                <i class={`fa fa-${item?.icon} text-primary me-2`}></i>
                {item[locale()]}
              </span> }
            </For>
          </div>
  
        </section>
  
      </aside>
  
  </section>);
  }

  return (<main class="container-xl row g-3 mx-auto py-3">

    <Show when={estateInfo.state == "errored"}>
        <meta http-equiv="refresh" content={`0;url=/404`} />
    </Show>
      
    <Show when={estateInfo.state == "ready" && !estateInfo.loading } fallback={<PageLoadingPlaceholder/>}>
      <EstateGallery />
      <Header />
      <ReviewHeader />
      <Description />
      <BuildingAmenities />
      <Location />
      <PlanOVisit />
      <Reviews />
    </Show>
  </main>);
}

export default Estate
