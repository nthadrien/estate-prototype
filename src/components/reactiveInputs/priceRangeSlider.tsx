import { createSignal, type JSX } from "solid-js";

export default function PriceRangeSlider() {

    const [ maxv , setMaxv ] = createSignal<number>(25);
    const [ minv , setMinv ] = createSignal<number>(74);

    const handleMin : JSX.ChangeEventHandlerUnion<HTMLInputElement, Event>  = (e)  => {
        setMinv(parseInt(e.target.value));
    }

    const handleMax: JSX.ChangeEventHandlerUnion<HTMLInputElement, Event>  = (e)  => {
        setMaxv(parseInt(e.target.value));
    }

    return (<>
    
    <div class="d-flex gap-0 position-relative">
        <input style={`width: %;`} type="range" min={0} max={100} title={minv().toString()} value={minv()} onChange={handleMin} name="minRange" class="form-range position-absolute"/>
        <div style={`width:${maxv() - minv() }%;left:${minv()}%;height:0.5rem;`} class="position-absolute top-50 translate-middle-y bg-primary"></div>
        <input style={`width: %;`}  type="range" min={50} max={100} title={maxv().toString()} value={maxv()} onChange={handleMax} name="maxRange" class="form-range position-absolute"/>
    </div>

    <div class="nav justify-content-between align-items-center text-primary px-4">
        <small>{minv()}</small>
        <small>{maxv()}</small>
    </div>

    </>)
}
