

import { createResource, createSignal, For, Match, onMount, Show, Switch, type JSX } from "solid-js";

import { useTranslations } from "src/i18n/utils.ts";
import { lang } from "src/stores/user.ts";

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





const fetchEstate = async (id:string) => {
  return (await fetch(`http://localhost:8000/estates/${id}?_embed=estateReviews`)).json();
}

function Estate():JSX.Element {

  const t = useTranslations(lang.get());

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

  const Header = () :JSX.Element => (<header class="nav gap-2 justify-content-between align-items-start mt-3 p-3">

    <aside class="lh-sm">
      <h4>{estateInfo()?.name}</h4>
      <p>
        {estateInfo()?.type} for {estateInfo()?.numOfGuest} guest(s) 
        
        <button class="btn">
          <i class="fa fa-share-alt"></i>
        </button>

        <button class="btn">
          <i class="fa fa-bookmark-o"></i>
        </button> <br/> 
        <i class="fa fa-map-marker" /> {estateInfo()?.address}
      </p>
    </aside>

    <aside class="d-flex gap-3 align-items-center">
      <span class="btn btn-sm btn-primary fw-bold"> {estateInfo()?.estateReviews[0].generalRate.toString().slice(0,3)} </span>
      <div>
        {estateInfo()?.estateReviews[0].lastReview} <br/>
        <strong class="text-success">Fairly Good</strong>
      </div>
    </aside>

  </header>);


const Gallery = () : JSX.Element => (<section class="d-flex flex-column flex-lg-row">

  <div class="col-lg-8">
    <img style={"min-height:360px"} src="/images/img-2x1.png" class="object-fit-cover rounded w-100" loading="lazy" alt="main-pic" />
  </div>

  <aside style="max-height:360px" class="col-lg-4 d-flex flex-lg-column overflow-hidden">
    <For each={[1,2,3,4,5]}>
      { () => <div class="p-1">
          <img style={"max-height:240px;max-width:360px;"} src="/images/img-2x1.png" class="object-fit-cover rounded" loading="lazy" alt="main-pic" />
        </div>}
    </For>
  </aside>

</section>); 

  return (
    
    <main class="container row mx-auto">

      <Show when={estateInfo.error}>
          <p>Loading: {estateInfo.loading}</p>
          <p>Error: {estateInfo.error}</p>
          <p>State: {estateInfo.state}</p>
      </Show>
      
      <Show when={!estateInfo.loading && !estateInfo.error && estateInfo.state === "ready" }>

        <Gallery />
        <Header />

        <aside class="col-lg-8 p-2">

          <section>
            <h5 class="text-capitalize fw-bold">Description</h5>

            <p>{estateInfo()?.desc} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum deleniti sit, reiciendis nostrum doloremque hic impedit maiores tenetur illum nam suscipit quaerat numquam accusantium perspiciatis delectus ab, exercitationem id voluptates!</p>

            <ul class="row row-cols-2">
              <li class="col">Size: 12x24 sqm</li>
              <li class="col">Number Of Rooms: 2</li>
              <li class="col">Number Of Rooms: 2</li>
              <li class="col">Number Of Rooms: 2</li>
            </ul>

            <h6 class="text-capitalize fw-bold">{t("price")}</h6>

            <ul class="nav justify-content-start gap-3 align-items-start my-3">
              <li>Day : $45</li>
              <li>Night: $60</li>
              <li>Hourly: $32 </li>
            </ul>

            <h6 class="text-capitalize fw-bold">{t("ameni")}</h6>

            <p>{estateInfo()?.amenities.map( (item:string )=> <span class="btn mx-2 btn-sm btn-outline-secondary" title={item}>
                {item}
            </span>)}</p>

            <h6>Building details</h6>


          </section>

          <section>
            <h5 class="text-capitalize fw-bold">Visit & Plan</h5>


            <aside class="row row-cols-1 row-cols-lg-2 g-2">

              <div class="col">
                <small> 2d Plan of the "Estate type"</small>

              </div>

              <div class="col">
                <small>3d visit of "Estate type"</small>

              </div>



            </aside>


          </section>

          <section>
            <h5 class="text-capitalize fw-bold">Reviews</h5>


            <h6>General Stats of 34 reviews</h6>


            <ul class="list-unstyled">

              <li>
                <span>agent</span>
              </li>

              <li>
                <span>enviroment</span>
              </li>

              <li>
                <span>sanitation</span>

                <div class="progress-bar border border-warning">
                  <div class="bar"></div>
                </div>

              </li>

              <li>
                <span>comparism</span>
              </li>

            </ul>


          </section>

        </aside>

        <aside class="col-lg-4 p-2">

          <h6>Locations</h6>

          <p>Police Station : 12km (Police de Mvoma) </p>
          <p>Hospitals : 2 (Police de Mvoma & central) </p>
          <p>Schools : 4  </p>
          <p>!2m from the main route</p>

          <button class="btn btn-primary">
            Book Today
          </button>

        </aside>


      </Show>


     

  </main>);
}

export default Estate
