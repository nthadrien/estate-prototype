import { createSignal, type JSX } from "solid-js";

export default function PriceRangeSlider() {

    const [ maxv , setMaxv ] = createSignal<string>("25");
    const [ minv , setMinv ] = createSignal<string>("74");

    const handleMin : JSX.ChangeEventHandlerUnion<HTMLInputElement, Event>  = (e)  => {
        setMinv(e.target.value);
    }

    const handleMax: JSX.ChangeEventHandlerUnion<HTMLInputElement, Event>  = (e)  => {
        setMaxv(e.target.value);
    }

    const diff = ():number => parseInt(maxv()) - parseInt(minv())

    return (
        <div class="d-flex gap-0 position-relative">
            <input type="range" min={0} max={50} title={minv()} onChange={handleMin} name="minRange" class="form-range"/>
            <div style={`width:${diff()}%;left:${minv()}%;height:0.5rem;`} class="position-absolute top-50 translate-middle-y bg-primary"></div>
            <input type="range" min={51} max={100} title={maxv()} onChange={handleMax} name="maxRange" class="form-range"/>
        </div>
    )
}
