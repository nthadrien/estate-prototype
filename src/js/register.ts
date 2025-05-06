
const hostFields = document.querySelector("#host");

document.querySelector('select[name="accountType"]')?.addEventListener("change",(e:Event) => {
    const val = (e.target as HTMLSelectElement ).value;
    val === "host" ? hostFields?.classList.remove("d-none") :
    val === "guest" ? hostFields?.classList.add("d-none") : null ;
});