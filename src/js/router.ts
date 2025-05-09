import { $user, $locale } from "src/stores/user.ts";

const links = document.querySelectorAll("input[name='host-page']");

if ( $user.get().id == "n/a" || $user.get().id == "none" ) window.location.assign(`/${$locale.get()}/accounts/login`);

links.forEach( elt => elt.addEventListener( "change",(e) => {
    const newOne = (e.target as HTMLInputElement ).value;
    window.location.hash = newOne;
}));