import { useStore } from "@nanostores/solid";
import { createSignal, For, type JSX, Show } from "solid-js";
import { $locale } from "src/stores/user.ts";
import { useTranslations } from "src/i18n/utils.ts";

import countiries from "src/api/countries.json";


export function Countries() : JSX.Element {
  return (
    <div>

      
    </div>
  );

}

export function AddrInput () : JSX.Element {

    const locale = useStore($locale);
    const t  = useTranslations(locale());

    const [ country , setCountry] = createSignal<string>("");
    const filterTowns = () => {
        return countiries.filter( item => item.name.includes(country()) )[0]?.citiesOrTowns
    };
    const changeCountry : JSX.ChangeEventHandlerUnion<HTMLSelectElement, Event>  = (e) => {
        setCountry(e.currentTarget.value);
    }

    return (
        <div class="border d-flex rounded">
            <label class="form-floating">
                <select onChange={changeCountry} class="form-control border-0" name="country">
                    <For each={countiries}>
                        { item => <option value={item.name}>
                            {item.name}
                        </option>}
                    </For>
                </select>
                <span class="label">{t("country")}</span>
            </label>

            <label class="form-floating">
                <select aria-placeholder="city" class="form-select border-0" name="cityOrTown" required>
                    <Show when={filterTowns().length < 1}>
                        <option>This country is not yet catalogue </option>
                    </Show>
                    <For each={filterTowns()}>
                        { item => <option value={item} class="dropdown-item">
                            {item}
                        </option>}
                    </For>
                </select>
                <span class="label">{t("city")} | {t("town")} </span>
            </label>

            <label class="form-floating">
                <input placeholder=" " name="neighbourHood" type="text" class="form-control border-0" disabled={filterTowns()[0] ? false: true} required/>
                <span class="label">Neighbour hood</span>
            </label>

        </div>
    )
}

export function GPS (): JSX.Element {
    return (<div>
        <button class="btn btn-outline-primary">
            <i class="fa fa-moon"></i>
        </button>
    </div>);
}

export function PhoneNumberInput () : JSX.Element {

    const [ query , setQuery ] = createSignal();
    const changeQry: JSX.ChangeEventHandler<HTMLSelectElement, Event> = (event) => setQuery(event.currentTarget.value);

    return (<section class="input-group rounded border">
        <label class="form-floating">
            <select onChange={changeQry} id="phoneCode" class="form-control border-0" required>
                <option>Phone number</option>
                <For each={countiries}>
                    { item => <option value={item.phoneCode}>
                        {item.emoji} {item.phoneCode} 
                    </option>}
                </For>
            </select>
            <span class="label">Phone Number</span>
        </label>
        <label class="form-floating">
            <input name="phoneNumber" placeholder="" type="phone" class="form-control border-0" disabled={query()? false:true} required/>
            <span class="label">57-XX</span>
        </label>
    </section>);
}