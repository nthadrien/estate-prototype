


import { atom } from "nanostores";

export type messageType = {
    code?:number;
    message:string;
    type:"success"|"warning"|"error";
}

const init_lang = window.location.pathname.includes("/en/")? "en" : "fr";
export const lang = atom<string>(init_lang );




// toaster : My toaster with bootstrap
export const notifications = (msg:messageType) => {

    const color = msg.type == "success" ? "success" : msg.type == "error" ? "danger" : msg.type;
    const body = document.body;

    const toaster = document.createElement("aside");
    toaster.className =`mytoast bg-body shadow d-flex align-items-center border-start border-${color} p-3 gap-2 overflow-hidden`

    const icon = document.createElement("i");
    icon.className = `bi bi-info-circle-fill fs-1 flex-shrink-0 text-${color}`;

    const message = document.createElement("div");
    message.innerHTML += `<span class="fw-bold fs-5">${msg.code} ${msg.type} </span> <br/>
    ${msg.message}`;

    // create the element on DOM:
    toaster.appendChild(icon);
    toaster.appendChild(message);
    body?.appendChild(toaster);

    // remove from DOM:
    setTimeout( () => {
        body?.removeChild(toaster);
    }, 2000);
}


// toaster 2