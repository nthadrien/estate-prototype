import { useAuthCtx } from "src/context/authContext.tsx";
import { onCleanup, onMount, For, type JSX, type Accessor, createSignal , Show} from "solid-js"
import { useTranslations } from "src/i18n/utils.ts";
import { AddrInput } from "@components/reactiveInputs/locations.tsx";
import Amenities from "src/api/amenities.json";

export default function EstatePage () {

    const [{locale}] = useAuthCtx();
    const t = useTranslations(locale());


    const handleSubmit = (e:SubmitEvent) => {
        e.preventDefault();
    }


    return (<section>

        <h5 class="text-capitalize mb-3">{t("estate")}</h5>


        <form class="row g-3" onSubmit={handleSubmit}>

            <h6 class="col-12">Estate Details</h6>

        <label class="form-floating col-md-4">
            <input type="text" class="form-control" placeholder=" " name="name" required/>
            <span class="label">{t("name")}</span>
        </label>

        <label class="form-floating col-md-4">
            <select name="type" class="form-select" required>
                <option value={"1"}> Select 1</option>
            </select>
            <span class="label">{t("estate.type")}</span>
        </label>

        <label class="form-floating col-md-4">
            <input type="date" name="lastRenovations" class="form-control"  required/>
            <span class="label">{t("table.head.lastReinnovation")}</span>
        </label>

        <label class="form-floating col-12">
            <textarea name="desc" class="form-control" placeholder=" " rows={2} required></textarea>
            <span class="label">{t("desc")}</span>
        </label>

        <label class="form-floating col-md-4">
            <input type="text" class="form-control" placeholder=" " name="size" required/>
            <span class="label">{t("key.size")} ( m<sup>2</sup> ie: 23 x 45 ) </span>
        </label>


        <label class="form-floating col-md-4">
            <input type="number" class="form-control" placeholder=" " name="numOfParlours" required/>
            <span class="label">{t("key.numOfRooms")}</span>
        </label>

        <label class="form-floating col-md-4">
            <input type="number" class="form-control" placeholder=" " name="numOfKitchens" required/>
            <span class="label">{t("key.numOfKitchens")}</span>
        </label>


        <label class="form-floating col-md-4">
            <input type="number" class="form-control" placeholder=" " name="numOfRooms" required/>
            <span class="label">{t("key.numOfRooms")}</span>
        </label>

        <label class="form-floating col-md-4">
            <input type="number" class="form-control" placeholder=" " name="numOfBaths" required/>
            <span class="label">{t("key.numOfBaths")}</span>
        </label>

        <label class="form-floating col-md-4">
            <input type="number" class="form-control" placeholder=" " name="numOfGuests" required/>
            <span class="label">{t("key.numOfGuest")}</span>
        </label>

        <h6 class="text-capitalize col-12">{t("key.amenities")}</h6>

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


        <h6 class="col-12">Pictures</h6>


        <label class="form-floating col-md-4">
            <input type="file" class="form-control" placeholder="pictures atmost 6 of 1mb eaxh" name="plan" required/>
            <span class="label">{t("key.numOfGuest")}</span>
        </label>


        <h6 class="col-12">Virtual tour (3D visit of room)</h6>

        </form>

    </section>);
}