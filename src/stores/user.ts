
import { atom } from "nanostores";

import { persistentAtom } from '@nanostores/persistent'
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

    toaster.className = `bg-body mytoast shadow-lg d-flex gap-3 align-items-center justify-content-center px-3 py-2 shadow border border-${color}-subtle rounded-4`; 
    toaster.innerHTML = `<i aria-hidden="true" class="fs-3 fa fa-${icon} text-${color} fa-2x"></i>  
        <div class="text-truncate">${msg.code && `<b class="fw-bold text-truncate text-${color}">${msg.code} </b><br/>`} ${msg.message}</div> `;

    // create the element on DOM:
    notification_wrapper?.appendChild(toaster);
    // remove from DOM:
    setTimeout( () => {
        notification_wrapper?.removeChild(toaster);
    }, 6000);
}
