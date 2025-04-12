
var currentStep: number = 0;

const prevBtn = document.querySelector("#prev");
const nexBtn = document.querySelector("#nex");
const bar  = document.querySelector("#bar");
const btns: NodeListOf<HTMLButtonElement> = document.querySelectorAll(".stepo")

const Carouselform = document.querySelector(".form-carousel");
const steps: NodeListOf<Element> = document.querySelectorAll(".form-step");

const changeStep = () => {
    (Carouselform as HTMLElement ).style.transform = `translateX(-${ currentStep* 100 }%)`;
    (bar as HTMLElement ).style.width = `${(currentStep)*50}%`;
    btns.forEach( (el,i) => {
        if (i <= currentStep ) { 
            el.classList.add("btn-primary");
            el.classList.remove("btn-secondary");
        } else {
            el.classList.add("btn-secondary");
            el.classList.remove("btn-primary");
        }
    });
}

prevBtn?.addEventListener("click", () => {
    if (currentStep > 0 ) {
        currentStep--;
        return changeStep();
    }else {
        return alert("No more prev step")
    }
});

nexBtn?.addEventListener("click" , () => {
    if (currentStep < 2 ) {
        currentStep++;
        return changeStep();
    } else {
        return alert("No more next step")
    }
});
