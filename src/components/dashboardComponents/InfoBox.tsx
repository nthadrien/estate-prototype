import { type JSX } from "solid-js";


interface Props {

}


export default function InfoBox(props : Props ): JSX.Element {
  return (
    <aside class="border p-3 rounded-3 bg-gradient">

        <header class="d-flex gap-3 align-items-center">

            <div class="fs-5 d-flex gap-1">
                <i class="bi bi-wallet"></i>
            </div>

            <div class="lh-1">
                <b>Content </b> <br/>
                <small>mini details</small>
            </div>
        </header>

        <p>
            <span class="fw-bold fs-2">100</span> users <br/>
            <small class="text-success">
                2% increase compared to last month
            </small>
        </p>

        <a class="icon-link icon-link-hover fw-bold" href="#boxes">
            More details 
            <i class="bi bi-arrow-right-circle"></i>
        </a>

    </aside>
  )
}
