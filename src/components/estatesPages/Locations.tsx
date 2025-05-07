import { type JSX } from "solid-js";


export default function Location ():JSX.Element {

  return (<aside class="col-lg-4 p-2">

    <h6>Locations</h6>

    <p>Police Station : 12km (Police de Mvoma) </p>
    <p>Hospitals : 2 (Police de Mvoma & central) </p>
    <p>Schools : 4  </p>
    <p>!2m from the main route</p>

    <button class="btn btn-primary">
      Book Today
    </button>

  </aside>);
}
