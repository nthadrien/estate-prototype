
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

    toaster.className = `bg-body mytoast d-flex gap-3 align-items-center justify-content-start p-1 px-4 shadow rounded-pill border border-${color}-subtle`; 
    toaster.innerHTML = `<i aria-hidden="true" style="height:1.6rem;width:1.6rem;" class="nav align-items-center justify-content-center fs-4 fa fa-${icon} rounded-pill bg-${color} fa-2x text-white"></i>  
        <div class="text-truncate">${msg.code && `<span class="fw-bold text-truncate text-${color}">${msg.code} </span> <br/>`} ${msg.message}</div> `;

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

export const isSuper = ():boolean => $user.get().role == "S-a" && !["n/a","none","null",undefined,null].includes($user.get().username);
export const isEmployee = ():boolean => $user.get().role == "E-s" && !["n/a","none","null",undefined,null].includes($user.get().username);
export const isHost = ():boolean => $user.get().role == "H-o" && !["n/a","none","null",undefined,null].includes($user.get().username);
export const isGuest = ():boolean => $user.get().role == "G-s" && !["n/a","none","null",undefined,null].includes($user.get().username);
export const isAuthorize = ():boolean =>  isHost() || isGuest() || isSuper() || isEmployee();


// a function that is used to change the locations 

export type LocationSetType = { 
  hash?: string; 
  searchParams?:any;
}

export function setLocation(options:LocationSetType) {

  if ( !isAuthorize() ) {
    notifications({ code: 505 , message : "Unauthorized" , type: "error"});
    return;
  }
  
  const { hash = undefined, searchParams = undefined } = options;
  const url = new URL(window.location.href);

  // Modify the hash
  if (hash !== undefined) {
    url.hash = hash ? `#${hash}` : ''; // Set with '#' or remove
  }
  
  // Modify the search parameters
  if (searchParams !== undefined) {
    for (const [key, value] of Object.entries(searchParams)) {
      if (value == null) { // null or undefined
        url.searchParams.delete(key);
      } else {
        url.searchParams.set(key, String(value)); // Convert to string
      }
    }
  }

  const b = new HashChangeEvent('hashchange', {
    oldURL: window.location.href, // Use the *current* URL as oldURL
    newURL: url.toString() // and the *new* URL
  });

  // Dispatch the event on the window
  window.dispatchEvent(b);
}