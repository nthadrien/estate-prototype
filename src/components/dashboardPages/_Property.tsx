import { useAuthCtx } from "src/context/authContext.tsx";
import { onCleanup, onMount, For, type JSX, type Accessor, createSignal , Show} from "solid-js"
import { useTranslations } from "src/i18n/utils.ts";
import { AddrInput } from "@components/reactiveInputs/locations.tsx";

import Amenities from "src/api/amenities.json";

function EstatePage () {
    return (<>

        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Launch demo modal
        </button>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            
            <div class="modal-dialog">

                <div class="modal-content">

                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" class="btn btn-danger btn-sm me-0" data-bs-dismiss="modal" aria-label="Close"> x </button>
                </div>
                
                <div class="modal-body">
                    ...
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
                </div>

            </div>
        </div>
    </>);
}

interface CardProps {
    optClicked: (a:number) => {}
}

const EstateEditCard = (props:CardProps):JSX.Element => {

    const [ estatePage , setEstatePage] = createSignal<string|null>(null);

    const [{ locale }] = useAuthCtx();
    const t = useTranslations(locale());

    const optns = [
        { name : t("table.optns.det"), icon:"info"},
        { name: t("table.optns.del") , icon: "trash" }
    ];

    const handleClick = (a:number) =>  props.optClicked(a)
    

    return (<aside class="p-1 position-relative">

        <strong style="top:1rem;left:1rem;" class="text-light position-absolute text-shadow">
            # ID or Unique name here
        </strong>

        <img style="height:12rem; width:100%;" class="rounded" src="/images/estates/garden-2.jpg" alt="img" />

        <ul style="width:min(76%,280px);bottom:2rem;"  class="nav justify-content-between gap-2 align-items-start rounded-2 position-absolute bg-body start-50 translate-middle-x p-2 p-xl-3">
            <li> 
                <i class="fa fa-bed me-1" aria-hidden="true" /> 
                2
            </li>
            <li>
                <i class="fa fa-bath me-1" aria-hidden="true" />
                1
            </li>
            <li>
                <i class="fa fa-square me-1" aria-hidden="true" /> 
                <span class="text-lowercase">4 m² </span>
            </li>
        </ul>

        <div class="d-flex justify-content-between p-2">
            <For each={optns}>
                {(opt,i) => <button class="dropdown-item" onClick={_=>handleClick(i())}>
                    <i class={`fa fa-${opt.icon} me-2`} /> {opt.name} 
                </button>}
            </For>
        </div>
    </aside>);
}


interface Props {}

export default function Property(props:Props) {

    const [{locale},{ properties }] = useAuthCtx();
    const t = useTranslations(locale());


    onMount( () =>{
        console.log( 
            "search : " +window.location.search ,
            "hash : " + window.location.hash , 
            "rf : " + window.location.href
        );
    })


    onCleanup(()=>{

    });

    const estateAction = ( indx:number, act:number )  => {
        console.log( indx , act );
    }

    return (<section class="w-100">

        <header class="nav gap-2 align-items-center justify-content-between mb-3">

            <p class="fs-5 mb-3 text-capitalize">{t("dashb.prop")} # : <small>id hrer</small></p>

            <div class="dropdown">
                <button class="btn p-0 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <small>options</small>
                </button>
                <ul class="dropdown-menu dropdown-menu-end txt-small">
                    <li>
                        <a href={`#properties`} class="dropdown-item">
                            <i aria-hidden="true" class="fa fa-long-arrow-left me-1" />
                            {t("back")}
                        </a>
                    </li>
                    <li>
                        <button class="dropdown-item">
                            <i aria-hidden="true" class="fa fa-pencil-square-o me-2" />
                            {t("edit")}
                        </button>   
                    </li>
                </ul>
            </div>

        </header>

        <form class="row g-3 mb-3">

            <label class="form-floating col-md-4">
                <input type="text" class="form-control" placeholder=" " name="name" required/>
                <span class="label">{t("name")}</span>
            </label>

            <label class="form-floating col-md-4">
                <input type="text" class="form-control" placeholder=" " name="name" required/>
                <span class="label">Contructed in</span>
            </label>

            <label class="form-floating col-md-4">
                <input type="text" class="form-control" placeholder=" " name="name" required/>
                <span class="label">Last Rennovations</span>
            </label>

            <label class="col-12 form-floating">
                <textarea class="form-control" rows={2} placeholder=" " name="description"></textarea>
                <span class="label">{t("desc")}</span>
            </label>

            <AddrInput />

            <section class="py-4">

                <h6 class="text-capitalize mb-4">{t("dashb.prop")} {t("ameni")}</h6>

                <div class="row row-cols-2 row-cols-lg-3 g-2">
                    <For each={Amenities.building}>
                    { (item, i)  => <label class="col text-truncate">
                        <input type="checkbox" class="btn-check" id={`buildingAmenities.${i()}`} autocomplete="off"  />
                        <label class="btn btn-sm txt-small text-truncate" for={`buildingAmenities.${i()}`}  >
                            <i class={`fa fa-${item.icon} mx-2`} aria-hidden="true" />
                            { locale() == "en" ? item.en : locale() == "fr" ? item.fr : "n/a"}
                        </label>
                    </label>}
                    </For>
                </div>

            </section>

            <section class="row g-3">

                <h6 class="text-capitalize mt-3">{t("table.optns.det")}</h6>
                <b class="mb-3 col-12">Distances from:</b>

                <label class="form-floating col-md-6">
                    <input type="text" class="form-control" placeholder=" " name="name" required/>
                    <span class="label">Nearest hostpital</span>
                </label>

                <label class="form-floating col-md-6">
                    <input type="text" class="form-control" placeholder=" " name="name" required/>
                    <span class="label">Hospital name</span>
                </label>

                <label class="form-floating col-md-6">
                    <input type="text" class="form-control" placeholder=" " name="name" required/>
                    <span class="label">Nearest School</span>
                </label>

                <label class="form-floating col-md-6">
                    <input type="text" class="form-control" placeholder=" " name="name" required/>
                    <span class="label">School name</span>
                </label>

                <label class="form-floating col-md-6">
                    <input type="text" class="form-control" placeholder=" " name="name" required/>
                    <span class="label">Store</span>
                </label>

                <label class="form-floating col-md-6">
                    <input type="text" class="form-control" placeholder=" " name="name" required/>
                    <span class="label">Store name</span>
                </label>

                <label class="form-floating col-md-6">
                    <input type="text" class="form-control" placeholder=" " name="name" required/>
                    <span class="label">Nearest Road</span>
                </label>

                <label class="form-floating col-md-6">
                    <input type="text" class="form-control" placeholder=" " name="name" required/>
                    <span class="label">Road name</span>
                </label>

            </section>

            <div>
                <button type="submit" class="btn btn-primary">
                    Save
                </button>
            </div>

        </form>


        <aside>
            <h6>Estates List  (12) </h6>



            <div class="row row-cols-2 row-cols-lg-3 row-cols-xxl-4">

                <For each={[0,1,2,3,4,5,6,7,8]}>
                    { (item) => <div class="col">
                        <EstateEditCard optClicked={ async (a) => estateAction(item, a)} />
                    </div>}
                </For>

            </div>
        </aside>

{/* 
        <Show when={estatePage()}>

        </Show> */}

        <EstatePage />


        
    </section>);
}
