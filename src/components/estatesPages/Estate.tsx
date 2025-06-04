

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
  const [showHighlights, setShowHighlights] = createSignal<boolean>(false);


  const dets= ():{ name: string; icon: string; value: string;}[] =>{
    
    const b = [
      { name: "ID" , icon: "hashtag" , value: estateInfo().id ?? "23-UX" },
      { name: t("estate.purpose") , icon:"shopping-cart" , value: estateInfo()?.purpose ?? t("estate.rent")},
      { name: t("estate.type") , icon:"house" , value: estateInfo()?.purpose ?? t("estate.rent")},
      { name: "status" , icon:estateInfo()?.verfied ? "check-square" : " exclamation-triangle" , value: estateInfo()?.verfied ?? t("estate.rent")},
      { name: t("baths") , icon:"bath" , value: estateInfo()?.purpose ?? t("estate.rent")},
      { name: t("rooms") , icon:"bed" , value: estateInfo()?.purpose ?? t("estate.rent")},
      { name: t("kitchen") +"s", icon:" cutlery" , value: estateInfo()?.purpose ?? t("estate.rent")},
      { name: t("guest")+"s" , icon:"users" , value: estateInfo()?.numOfGuests ?? t("estate.rent")}
    ];

    for(let x of amenities.estate ) {
      b.push({
        name: x[locale()],
        icon: x.icon,
        value: "available"
      });
    }

    return showHighlights() ? b : b.splice(0,8);
  }
 
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
      <i class="text-primary">
        <i class="fa fa-check-circle-o" /> verified
      </i>
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

  const Description = (): JSX.Element => (<aside class="col-lg-8 d-flex flex-column gap-2 p-1">

    <h5 class="text-capitalize fw-bold">Description</h5>

    <p>{estateInfo()?.desc} Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Laudantium facere obcaecati sapiente! Laboriosam harum sit fugiat asperiores, 
      iusto temporibus necessitatibus numquam laudantium reiciendis placeat praesentium nihil totam consectetur sunt ex.
       Lorem ipsum dolor sit amet consectetur adipisicing elit. 
       Ut sed nemo non vel eum reprehenderit voluptate facere fugiat distinctio culpa rerum vero omnis vitae voluptatibus aliquid facilis, pariatur, cum iste!</p>

    <h6 class="text-capitalize">{t('price')}</h6>

    <ul class="nav p-2">
      <li>{t("key.pricePerHour")} : {estateInfo()?.pricePerHour}</li>
      <li>{t("key.pricePerDay")} : {estateInfo()?.pricePerDay}</li>
      <li>{t("key.pricePerMonth")} : {estateInfo()?.pricePerMonth}</li>
    </ul>

    <h6>Properties Details</h6>

    <ul class="row g-3 g-lg-4 p-2 justify-content-between text-capitalize rounded">
      <For each={dets()}>
        { item => <li class="col-6 col-md-4 col-lg-3 d-flex gap-2 align-items-center justify-content-start">
          <i aria-hidden="true" class={`fs-5 fa fa-${item.icon} border rounded p-2 text-secondary`} />
          <div>
            <strong>{item.name}</strong>
            <br/> {item.value}
          </div>
        </li>}
      </For>
      <li>
        <button onClick={()=>setShowHighlights(!showHighlights())} class="btn btn-sm fw-semibold">
          { showHighlights() ?t("see.less") : t("see.more")}
        </button>
      </li>
    </ul>

  </aside>);

  const BuildingAmenities = ():JSX.Element => {
    return (<section class="col-lg-8 ">

      <aside class="accordion" id="accordionAmenities">
  
        <section class="accordion-item border-0">
          
          <button class="nav-link text-start w-100 text-capitalize fw-bold fs-6 border-1 border-bottom" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
            {t("key.amenities")}
          </button>
          
          <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse row row-cols-2 row-cols-xl-3 g-3 p-3">
            <For each={amenities.building}>
              { (item) => <span class={`col ${ false ? "": "text-decoration-line-through" }`}>
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
