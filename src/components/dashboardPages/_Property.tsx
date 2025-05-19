import { useAuthCtx } from "src/context/authContext.tsx";
import { onCleanup, onMount, For, type JSX, type Accessor } from "solid-js"
import { useTranslations } from "src/i18n/utils.ts";
import { AddrInput } from "@components/reactiveInputs/locations";

import Amenities from "src/api/amenities.json";


interface CardProps {
    lang: "en" | "fr"
}

const EstateEditCard = (props:CardProps):JSX.Element => {

    const t = useTranslations(props.lang);

    const optns = [
        { name : t("table.optns.det"), icon:"info"},
        { name: t("table.optns.del") , icon: "trash" }
    ];

    const handleClick = (a:number) => {
        console.log("clicked options");
    }

    return (<aside class="p-2 position-relative">

        <div style="top:1rem;right:1rem;" class="dropdown position-absolute">
            <button class="btn btn-sm btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fa fa"></i>
            </button>
            <ul class="dropdown-menu dropdown-menu-end txt-small">
                <For each={optns}>
                    {(opt,i) => <button onClick={_=>handleClick(i())}>
                        {opt.name} <i class={`fa fa-${opt.icon} ms-2`} />
                    </button>}
                </For>
            </ul>
        </div>

        <img style="height:12rem; width:100%;" class="rounded" src="/images/estates/garden-2.jpg" alt="img" />

        <ul style="width:min(70%,400px);bottom:1.5rem;"  class="nav justify-content-between align-items-start rounded-2 position-absolute bg-body start-50 translate-middle-x p-3">
            <li> 
                <i class="fa fa-bed me-1" aria-hidden="true" /> 
                2
            </li>
            <li>
                <i class="fa fa-bath me-1" aria-hidden="true" />
                1
            </li>
            <li>
                <i class="fa fa-object-ungroup me-1" aria-hidden="true" /> 
                <span class="text-lowercase">4 m² </span>
            </li>
        </ul>
    </aside>);
}


interface Props {
    data: { fid: string; uid: string; },
    changeSearchParams : (a:{ fid: string; uid:string }) => {}
}

export default function Property(props:Props) {

    const [{locale},{ properties }] = useAuthCtx();
    const t = useTranslations(locale());


    onMount( () =>{
        console.log(props.data);
    })


    onCleanup(()=>{

    });



    return (<section class="w-100">

        <header class="nav gap-2 align-items-center justify-content-between mb-3">

            <p class="fs-5 mb-3 text-capitalize">{t("estate")} # : <small>id hrer</small></p>

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

            <section>

                <h6 class="text-capitalize my-3">{t("dashb.prop")} {t("ameni")}</h6>

                <div class="row row-cols-2 row-cols-lg-3 g-2">
                <For each={Amenities.building}>
                    { (item, i)  => <label class="col text-truncate">
                        <input type="checkbox" class="form-check-input" name={`buildingAmenities.${i()}`} />
                        <i class={`fa fa-${item.icon} mx-2`} aria-hidden="true" />
                        {item.name}
                    </label>}
                </For>
                </div>

            </section>

            <section class="row g-3">

                <h6 class="text-capitalizemt-3">{t("table.optns.det")}</h6>
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

        </form>


            <aside>
                <h6>Estates List  (12) </h6>



                <div class="row row-cols-2 row-cols-lg-3">

                    <For each={[0,1,2,3,4,5,6,7,8]}>
                        { (item) => <div class="col">
                            <EstateEditCard lang={locale()} />
                        </div>}
                    </For>

                </div>
            </aside>
        
    </section>);
}
