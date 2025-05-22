import { useStore } from "@nanostores/solid";
import { createSignal, For, type JSX } from "solid-js";
import { $locale } from "src/stores/user.ts";
import { useTranslations } from "src/i18n/utils.ts";

import countries from "src/api/countries.json";

export default function SearchHeader():JSX.Element {


  const locale = useStore($locale);
  const t = useTranslations(locale());
  const [ cntry , setCntry] = createSignal<string>("");

  const changeCountry: JSX.ChangeEventHandlerUnion<HTMLSelectElement, Event> = (e) => {
    setCntry(e.target.value??"");
  }

  const filterTowns = () => {
    return countries.filter( (item) => item.name.includes(cntry()) )[0]?.citiesOrTowns
  };

  return (<form class="bg-body bg-opacity-50 container-sm d-flex flex-column flex-md-row gap-2 align-items-center shadow p-2 rounded-4">
    
    <label class="input-group border rounded">
      <i class="input-group-text bg-body border-0 text-secondary fa fa-globe fs-4"></i>
      <div class="form-floating">
        <select onChange={changeCountry} name="country" class="form-control border-0" required>
          <option disabled></option>
          <For each={countries}>
            { item => <option value={item.name}>{item.name}</option>}
          </For>
        </select>
        <span class="label">{t("country")}</span>
      </div>
    </label>
    
    <label class="input-group border rounded">
        <i class="input-group-text bg-body border-0 text-secondary fa fa-map-marker fs-4"></i>
        <div class="form-floating">
          <select name="city" class="form-control border-0" required>
            <For each={filterTowns()}>
              { item => <option value={item}>{item}</option>}
            </For>
          </select>
          <span class="label">{t("city")}</span>
        </div>
    </label>
    
    <label class="input-group border rounded">
        <i class="input-group-text bg-body border-0 text-secondary fa fa-clone fs-3"></i>
        <div class="form-floating">
          <input type="text" class="form-control border-0" id="floatingInputGroup1" placeholder="Username" />
          <span class="label">Type</span>
        </div>
    </label>
    
    <label class="input-group border rounded">
        <i class="input-group-text bg-body border-0 text-secondary fa fa-user fs-4"></i>
        <div class="form-floating">
          <select class="form-control border-0" name="guests">
            <For each={["1","2","3", t("more")]}>
              { item => <option value={item}>{item} {t("guest")}</option>}
            </For>
          </select>
          <span class="label">Number of Guests</span>
        </div>
    </label>

    
    <button type="submit" class="btn btn-sm btn-secondary rounded-circle">
      <i class="fa fa-search" />
    </button>
    
  </form>);
}
