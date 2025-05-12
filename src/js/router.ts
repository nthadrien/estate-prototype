import { $user, $locale, logoutUserLocally } from "src/stores/user.ts";

const links = document.querySelectorAll("input[name='host-page']");

if ( $user.get().id == "n/a" || $user.get().id == "none" ) window.location.assign(`/${$locale.get()}/accounts/login`);

links.forEach( elt => elt.addEventListener( "change",(e) => {
    window.location.hash = (e.target as HTMLInputElement ).value;
}));

const logOutBtn = document.querySelector("#logoutBtn");

logOutBtn?.addEventListener( "click" , (e:Event) => {
    e.preventDefault();
    logoutUserLocally();
});