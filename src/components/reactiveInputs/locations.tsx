import { createMemo, createSignal, For, type JSX, Show } from "solid-js";

import countiries from "src/api/countries.json";


export function Countries() : JSX.Element {
  return (
    <div>

      
    </div>
  );

}

export function AddrInput () : JSX.Element {

    const [ country , setCountry] = createSignal<string>("");
    const filterTowns = () => {
        return countiries.filter( item => item.name.includes(country()) )[0]?.citiesOrTowns
    };
    const changeCountry : JSX.ChangeEventHandlerUnion<HTMLSelectElement, Event>  = (e) => {
        setCountry(e.currentTarget.value);
    }

    return (
        <div class="input-group">
{/* 
            <div class="form-floating">
                <label for="country">Country</label>
                <select onChange={changeCountry} class="form-select border-0" id="country">
                    <For each={countiries}>
                        { item => <option value={item.name}>
                            {item.name}
                        </option>}
                    </For>
                </select>
            </div>

            <div class="form-floating">
                <label for="city">City / Town </label>
                <select class="form-select border-0" id="city" required>
                    <Show when={filterTowns().length < 1}>
                        <option>This country is not yet catalogue </option>
                    </Show>
                    <For each={filterTowns()}>
                        { item => <option value={item} class="dropdown-item">
                            {item}
                        </option>}
                    </For>
                </select>
            </div> */}

            <label class="form-floating">
                <span class="label">Neighbour hood</span>
                <input placeholder="" id="neighbourHood" type="text" class="form-control" required/>
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

    const [ query , setQuery ] = createSignal<string>("");
    let btnElement!: HTMLInputElement; 

    const changeQry: JSX.EventHandler<HTMLInputElement, InputEvent> = (event) => setQuery(event.currentTarget.value);

    const changeValue = (a:string) => {
        if (btnElement) btnElement.value = a;
    }

    return (<section class="input-group rounded border">
        <div class="form-floating">
            <select id="phoneCode" class="form-select border-0" required>
                <For each={countiries}>
                    { item => <option value={item.phoneCode}>
                        {item.emoji} {item.phoneCode} 
                    </option>}
                </For>
            </select>
            <span class="label">Phone Number</span>
        </div>
        <div class="form-floating">
            <input name="phoneNumber" type="phone" class="form-control border-0" required/>
            <label for="phoneNumber">57-XX</label>
        </div>
    </section>);
}

type PhoneCodes  = {emoji: string, phoneCode: string }