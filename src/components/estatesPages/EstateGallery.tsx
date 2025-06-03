
import { type JSX, For } from "solid-js"; 

interface Props {}


export default function EstateGallery (props:Props) :JSX.Element { 

  let mainImg : HTMLImageElement | undefined ;

  const swapMainImg = (a:number) => {
    console.log("swaping");
    if (!mainImg) return;
    return;
  }
        
  return (<section class="container-lg row g-1 mx-auto">

    <div class="col-lg-8">
      <img ref={mainImg} style={"min-height:360px"} src="/images/img-2x1.png" class="object-fit-cover rounded w-100" loading="lazy" alt="main-pic" />
    </div>

    <aside style="max-height:360px" class="col-lg-4 d-flex flex-row flex-lg-column gap-1 overflow-auto">
      <For each={[1,2,3,4,5,6,7,8]}>
        {(_,index) => <button onClick={() => swapMainImg( index() )} class="col  btn p-0">
            <img width={"100%"} style="min-width:120px;" src="/images/img-2x1.png" class="object-fit-contain flex-shrink-0 rounded" loading="lazy" alt="main-pic" />
        </button>}
      </For>
    </aside>

  </section>); 
}