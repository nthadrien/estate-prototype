alert(
    "Router working and imported successfully"
)


const links = document.querySelectorAll("input[name='host-page']");

links.forEach( elt => elt.addEventListener( "change",(e) => {
    const newOne = (e.target as HTMLInputElement ).value;
    window.location.hash = newOne;
}));