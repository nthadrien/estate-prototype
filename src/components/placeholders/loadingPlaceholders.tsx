import { type JSX } from "solid-js"


export const PageLoadingPlaceholder = () : JSX.Element=> {
    return (<aside class="container row g-3 opacity-25 p-3 mx-auto position-relative" >

        <div  class="col-12 placeholder-glow">
            <div style="min-height: max(200px,30vh);" class="placeholder w-100 rounded-3">
            </div>
        </div>

        <h1 class="position-absolute top-50 start-50 translate-middle fw-bold display-2">
            A little more please...
        </h1>
    
        {[1,2,3,4,5].map( i => <div class="col-6 col-lg-4 placeholder-wave"> 
            <img height="240px" class="placeholder w-100 rounded-3 mb-3" src="" alt="pholder" />
            <p class="placeholder placeholder-lg bg-light col-7"></p>
            <p class="placeholder col-12 mb-3"></p>
            <p class="placeholder col-12 mb-3"></p>
            <small class="placeholder col-4"></small>
        </div>)}
    
    </aside>)
}


export const SectionLoadingPlaceholder = () : JSX.Element=> { 
    return (<section  class="col-12 placeholder-wave">
        <div style="min-height: max(200px,20vh);" class="placeholder w-100 rounded-3">
        </div>
    </section>);
}