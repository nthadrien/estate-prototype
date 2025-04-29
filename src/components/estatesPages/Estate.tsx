
import { createResource, createSignal, For, onMount, Show, type JSX } from "solid-js";


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

  const [estateId, setEstateId ] = createSignal<string>('');
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


  const Header = () :JSX.Element => (<header class="nav gap-2 justify-content-between align-items-start py-3">

    <aside class="lh-1">
      <h3>{estateInfo()?.name}</h3>
      <p>{estateInfo()?.type} for {estateInfo()?.numOfGuest} guest(s)</p>
    </aside>

    <aside class="d-flex gap-3 align-items-center">
      <span class="btn btn-sm btn-primary fw-bold"> {estateInfo()?.estateReviews[0].generalRate.toString().slice(0,3)} </span>
      <div>
        {estateInfo()?.estateReviews[0].lastReview} <br/>
        <strong class="text-success">Fairly Good</strong>
      </div>
    </aside>

  </header>);


const Gallery = () : JSX.Element => (<section class="d-flex flex-column flex-lg-row py-3">

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

  const Navigation = () :JSX.Element => (<ul class="nav nav-underline" id="myTab" role="tablist">
    <li class="nav-item" role="presentation">
      <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Home</button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Profile</button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Contact</button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false" disabled>Disabled</button>
    </li>

    <li class="nav-item ms-auto">
      <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">
        all reviews
      </button>
    </li>
  </ul>);



  return (
    
    <main class="container">

      <Show when={estateInfo.error}>
          <p>Loading: {estateInfo.loading}</p>
          <p>Error: {estateInfo.error}</p>
          <p>State: {estateInfo.state}</p>
      </Show>
      
      <Show when={!estateInfo.loading && !estateInfo.error && estateInfo.state === "ready" }>

        <Gallery />

        <Header />

        <Navigation />
        
        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">...</div>
          <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">...</div>
          <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">...</div>
          <div class="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">...</div>
        </div>

        <section></section>

        <section></section>


      </Show>


     

  </main>);
}

export default Estate
