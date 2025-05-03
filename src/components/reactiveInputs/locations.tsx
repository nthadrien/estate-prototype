import { createMemo, createSignal, For, type JSX } from "solid-js";

import countiries from "src/api/countries.json";


export function Countries() : JSX.Element {
  return (
    <div>

      
    </div>
  );

}


export function Country () :JSX.Element {
    return (
        <div>

        </div>
    )

}

export function Address () : JSX.Element {

    const [ country, setCOuntry ] = createSignal<string>("");


    return(<div class="input-group border">
        <div class="form-floating">
            <input type="email" class="form-control border-0" id="profilPic" required/>
            <label for="profilPic">Address (Country</label>
        </div>
        <div class="form-floating">
            <input type="email" class="form-control border-0" id="profilPic" required/>
            <label for="profilPic">- Town/city - </label>
        </div>
        <div class="form-floating">
            <input type="email" class="form-control border-0" id="profilPic" required/>
            <label for="profilPic">neighbourhood)</label>
        </div>
    </div>);

}


export function GPS (): JSX.Element {
    return (<div>
        <button class="btn btn-outline-primary">
            <i class="fa fa-moon"></i>
        </button>
    </div>);
}

export function ListFilter () : JSX.Element {

    const [ query , setQuery ] = createSignal<string>("+");

    const changeQry: JSX.EventHandler<HTMLInputElement, InputEvent> = (event) => {
        setQuery(event.currentTarget.value);
    };

    const Listo = () => countiries.filter( item => item.phoneCode.includes(query()) );

    return (<div class="dropdown">
        <button class="form-control dropdown-toggle" value={query()} type="button" data-bs-toggle="dropdown" aria-expanded="false" />
        <ul style="max-height:180px;" class="dropdown-menu overflow-hidden">
            <input placeholder="searching?" type="text" onInput={changeQry} class="form-control" />
            <li class="dropdown-item">{query()}</li>
            <ul class="list-unstyled overflow-y-auto">
                <For each={Listo()}>
                    { item => <li onClick={()=>setQuery(item.phoneCode)} class="dropdown-item">
                        {item.phoneCode} {item.emoji}
                    </li>}
                </For>
            </ul>
        </ul>
    </div>);
}

type PhoneCodes  = {emoji: string, phoneCode: string }

export function PhoneInput () : JSX.Element {

    return (<div class="input-group border container-sm mx-auto">
        <div style={"max-width: max(20%,64px)"} class="form-floating">
            <ListFilter />
        </div>
        <div class="form-floating">
            <input type="phone" class="form-control border-0" id="phone" required/>
            <label for="phone">Phone Number</label>
        </div>
    </div>);
}