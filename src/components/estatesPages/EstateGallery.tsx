
import { type JSX, For } from "solid-js"; 


export default function EstateGallery () :JSX.Element { 
    
    
    return (<section class="d-flex flex-column flex-lg-row">

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

}