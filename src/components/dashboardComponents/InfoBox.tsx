import { type JSX, Show } from "solid-js";


interface Props {
    display: number;
    details: {
        name: string;
        description: string;
        value: number[];
        unit: string | number;
        icon: string;
        color?:string;
        more?:string;
    }
}

export default function InfoBox(props : Props ): JSX.Element {

    return (<aside class={`border bg-${props.details.color}-subtle p-2 p-lg-3 rounded-3`}>

        <header class="d-flex gap-2 gap-lg-3 align-items-center">
            <i class={`fs-3 fa fa-${props.details.icon}`} />
            <div class="lh-1 text-truncate">
                <b class={`text-${props.details.color}`}>{props.details.name} </b> <br/>
                <small>{props.details.description}</small>
            </div>
        </header>

        <p>
            <span class="fw-bold fs-2">{props.details.value[props.display]}</span> {props.details.unit} <br/>
            {/* <small class="text-success">
                2% increase compared to last month
            </small> */}
        </p>

        <Show when={props.details.more}>
            <a class="icon-link icon-link-hover fw-bold" href="#boxes">
                More details 
                <i class="bi bi-arrow-right-circle"></i>
            </a>
        </Show>

    </aside>);
}
