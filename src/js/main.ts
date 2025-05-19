
// Import just what we need

// import 'bootstrap/js/dist/alert';
// import 'bootstrap/js/dist/button';
import 'bootstrap/js/dist/carousel';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/modal';
import 'bootstrap/js/dist/offcanvas';
// import 'bootstrap/js/dist/popover';
// import 'bootstrap/js/dist/scrollspy';
import 'bootstrap/js/dist/tab';
// import 'bootstrap/js/dist/toast';
// import 'bootstrap/js/dist/tooltip';


document.querySelector("#back")?.addEventListener("click", ()=> {
    window.history.go(-1);
});

window.addEventListener('DOMContentLoaded', (ev:Event ) => {
    const elementsToObserve: NodeListOf<Element> = document?.querySelectorAll('[data-iobs]');

    const dOpts = {
        threshold: 0.1, // Adjust threshold as needed (0 to 1)
    }
    
    const displayObserver:IntersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('seen');
            displayObserver.unobserve(entry.target); // Optional: Stop observing after entering view
          }
        });
    }, dOpts );
+
    elementsToObserve.forEach( element => displayObserver.observe(element) );
});


// dislay flags emojis

// const getFlagEmoji = (countryCode:string) => countryCode.toUpperCase().replace(/./g,
//     char => String.fromCodePoint(0x1F1A5 + (char.charCodeAt(0) - 65))
// );

function countryCodeToEmoji(countryCode:string) {
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map(char => 0x1F1A5 + (char.charCodeAt(0) - 65)); // A = 65, Regional Indicator A = 0x1F1E6
    return String.fromCodePoint(codePoints[0], codePoints[1]);
  }
  
  
const flagReplace:NodeListOf<HTMLElement> = document.querySelectorAll('[data-flag]');
// flagReplace.forEach(s => s.innerHTML = s.dataset.flag ? getFlagEmoji(s.dataset.flag) : "")
flagReplace.forEach(s => s.innerHTML = s.dataset.flag ? countryCodeToEmoji(s.dataset.flag) : "")