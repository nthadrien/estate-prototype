import { createMemo, createSignal, type JSX } from "solid-js";


// Custom CSS for styling the range inputs, as Tailwind alone isn't enough
// for complex range input styling across browsers.
const rangeSliderStyles = `

  .range-input {
    position: absolute;
    width: 100%;
    -webkit-appearance: none; /* Hide default browser styling */
    background: transparent; /* Make track transparent */
    pointer-events: none; /* Allow events to pass through to the other slider */
    z-index: 2; /* Ensure sliders are on top of track/fill */
  }

  .range-input::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 20px; /* Size of the thumb */
    width: 20px;
    border-radius: 50%;
    background: #1D4ED8; /* Tailwind blue-700 */
    cursor: grab;
    pointer-events: all; /* Make thumb interactive */
    box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.3); /* Ring effect */
    transition: background 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  }

  .range-input::-moz-range-thumb {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #1D4ED8; /* Tailwind blue-700 */
    cursor: grab;
    pointer-events: all;
    box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.3);
    transition: background 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  }

  .range-input:active::-webkit-slider-thumb {
    cursor: grabbing;
    background: #1E40AF; /* Darker blue on active */
    box-shadow: 0 0 0 6px rgba(59, 130, 246, 0.5);
  }

  .range-input:active::-moz-range-thumb {
    cursor: grabbing;
    background: #1E40AF; /* Darker blue on active */
    box-shadow: 0 0 0 6px rgba(59, 130, 246, 0.5);
  }

  .range-input::-webkit-slider-runnable-track {
    width: 100%;
    height: 6px;
    background: transparent; /* Track is handled by .range-slider-track and .range-slider-fill */
    border-radius: 3px;
  }

  .range-input::-moz-range-track {
    width: 100%;
    height: 6px;
    background: transparent;
    border-radius: 3px;
  }

  /* Specific positioning for min/max inputs */
  .range-input.min-input {
    z-index: 3; /* Ensure min input thumb is on top when overlapping */
  }
`;

interface Props {
    min :number;
    max: number;
    initialMin: number;
    initialMax: number;
    step? : number;
}

export default function PriceRangeSlider(props:Props) {

    const { min = 0, max = 100,  initialMin = min, initialMax = max, step = 8 } = props;
    
    // Ensure initial values are within bounds
    const [currentMin, setCurrentMin] = createSignal(Math.max(min, initialMin));
    const [currentMax, setCurrentMax] = createSignal(Math.min(max, initialMax));
    
    // Memoized values for calculating fill bar position and width
    const minPercent = createMemo(() => ((currentMin() - min) / (max - min)) * 100);
    const maxPercent = createMemo(() => ((currentMax() - min) / (max - min)) * 100);
    
    // Handlers for input changes
    const handleMinChange:JSX.InputEventHandlerUnion<HTMLInputElement, InputEvent> = (e) => {
        let value = Number(e.target.value);
        if (value > currentMax()) return; // Ensure min doesn't exceed max
        setCurrentMin(value);
    };
    
    const handleMaxChange:JSX.InputEventHandlerUnion<HTMLInputElement, InputEvent> = (e) => {
        let value = Number(e.target.value);
        if (value < currentMin()) return; // Ensure max doesn't go below min
        setCurrentMax(value);
    };
    
    return (<>

          {/* Inject custom styles */}
        <style>{rangeSliderStyles}</style>
    
        <div class="d-flex position-relative w-100 align-items-center justify-content-center">

            <div
              class="position-absolute bg-primary top-50"
              style={{ left: `${minPercent()}%`, width: `${maxPercent() - minPercent()}%`, height:"6px", "z-index":"2"}} 
            ></div>

            <div style={{ height:"6px"}} class="position-absolute w-100 bg-secondary bg-opacity-25 rounded top-50" />

            <input
                type="range"
                name="minP"
                min={min}
                max={max}
                step={step}
                value={currentMin()}
                onInput={handleMinChange}
                class="range-input min-input"
                aria-label="Minimum price slider"
            />

            <input
                type="range"
                name="maxP"
                min={min}
                max={max}
                step={step}
                value={currentMax()}
                onInput={handleMaxChange}
                class="range-input max-input"
                aria-label="Maximum price slider"
            />
        </div>

        <small class="d-flex justify-content-between align-items-center mt-3 text-secondary">
            <span class="fw-semibold">
                Min: ${currentMin()}
            </span>
            <span class="fw-semibold">
                Max: ${currentMax()}
            </span>
        </small>

    </>);
}
