import { generateAllData, output } from "src/api/generateDataFxn";
import { createResource, createSignal, onMount, Show, type JSX } from "solid-js";


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
  return (await fetch("http://localhost:8000/estates/"+id)).json();
}

function Estate():JSX.Element {

  const [estateId, setEstateId ] = createSignal<string>('');
  const [estateInfo] = createResource(estateId,fetchEstate);
 
  onMount(()=>{
    output();
    const obj:any = new Object(initSrch);
    const parms = window.location.search.split("&");
    parms.forEach( pp => {
      const keyp:string = pp.split("=")[0];
      const valp:string = pp.split("=")[1];
      obj[keyp] = valp;
    })
    if ( obj.id ) setEstateId(obj.id);
  });

  return (
    
    <main class="container-xl">

      <Show when={estateInfo.error}>
          <p>Loading: {estateInfo.loading}</p>
          <p>Error: {estateInfo.error}</p>
          <p>State: {estateInfo.state}</p>
      </Show>
      
      <Show when={!estateInfo.loading && !estateInfo.error && estateInfo.state === "ready" }>

        <header class="nav gap-2 justify-content-between align-items-start">

          <div>
            <h3>{estateInfo()?.name}</h3>
            <p>{estateInfo()?.type} for {estateInfo()?.numOfGuest} guest(s)</p>
          </div>

          <div class="d-flex gap-3 align-items-center">

            <span class="btn btn-sm btn-primary">
              4.2
            </span>

            <div>
              Best Room in Yaounde <br/>
              <strong class="text-success">Fairly Good</strong>
            </div>

          </div>

        </header>


        <section style={"max-height: max(50vh,480px);"} class="row g-1">

          <div class="col-lg-8 position-relative h-100">

            <img class="object-fit-cover w-100 ratio ratio-16x9" src="/images/estates/tropical-2.jpg" alt="showcase" />

            <div class="position-absolute bottom-0 end-0 bg-dark rounded-2 btn-group">
                <button class="btn btn-dark">
                  <i class="fa fa-arrow-left"></i>
                </button>
                <button class="btn btn-dark">
                  <i class="fa fa-arrow-right"></i>
                </button>
            </div>

          </div>

          <div class="col-lg-4 d-flex gap-1 flex-lg-column overflow-auto">
            <img class="object-fit-cover flex-shrink-0 w-100 ratio ratio-16x9" src="/images/estates/tropical-3.jpg" alt="showcase" />
            <img class="object-fit-cover flex-shrink-0 w-100 ratio ratio-16x9" src="/images/estates/tropical-2.jpg" alt="showcase" />
            <img class="object-fit-cover flex-shrink-0 w-100 ratio ratio-16x9" src="/images/estates/garden-1.jpg" alt="showcase" />
            <img class="object-fit-cover flex-shrink-0 w-100 ratio ratio-16x9" src="/images/estates/tropical.jpg" alt="showcase" />
          </div>

        </section>


        <nav>

        </nav>


        <section>

        </section>


        <section>

        </section>


      </Show>


     

  </main>);
}

export default Estate
