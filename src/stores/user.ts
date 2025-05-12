
import { atom } from "nanostores";

import { persistentAtom, persistentMap } from '@nanostores/persistent'
import type { EstateType } from "src/api/dataTypes.ts";

export type messageType = {
    code?:number;
    message:string;
    type:"success"|"warning"|"error";
}


const init_lang = window.location.pathname.includes("/en/")? "en" : "fr";

export const $locale = atom<"en"|"fr">(init_lang);

export const $EstatesList = persistentAtom<EstateType[]>('cart', [], {
  encode: JSON.stringify,
  decode: JSON.parse,
});

// toaster updated
export const notifications = (msg:messageType) => {

    const notification_wrapper: HTMLElement | null = document.querySelector("#notification-area");

    const color = msg.type == "error" ? "danger" : msg.type ;
    const icon = color ==="success" ? "check-circle": color === "warning" ? "exclamation-triangle":"times";

    const toaster = document.createElement("aside");

    toaster.className = `bg-body mytoast shadow-lg d-flex gap-3 align-items-center justify-content-start px-4 py-1 shadow rounded-pill`; 
    toaster.innerHTML = `<i aria-hidden="true" class="fs-4 fa fa-${icon} rounded-pill p-1 text-bg-${color} fa-2x text-white"></i>  
        <div class="text-truncate">${msg.code && `<b class="fw-bold text-truncate text-${color}">${msg.code} </b><br/>`} ${msg.message}</div> `;

    // create the element on DOM:
    notification_wrapper?.appendChild(toaster);
    // remove from DOM:
    setTimeout( () => {
        notification_wrapper?.removeChild(toaster);
    }, 6000);
}


// user details and credentials:

export type UserType = {
    id: string;
    username: string;
    hash    :  string;
    email   :  string;
    gender  :   "M"|"F";
    role    :   string;
    plan    :   string ;
}

export const userInit:UserType =  { 
    id:"n/a" , 
    username: "n/a",
    hash    :  "n/a",
    email   :  "n/a",
    gender  :  "M",
    role    :   "n/a",
    plan    :   "n/a"
};

export const $user = persistentAtom<UserType>('user', userInit
    , {
        encode: JSON.stringify,
        decode: JSON.parse,
    }
);

export const logoutUserLocally = () => {
    $user.set(userInit);
    window.location.assign(`/${$locale.get()}/accounts/login`);
}

export const isHost = ():boolean => true;
export const isClient = ():boolean => true;