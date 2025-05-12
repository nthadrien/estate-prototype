


export const fetchReviews = async( id:string) => 
    (await fetch(`http://localhost:8000/reviews`)).json();

export const fetchEstate = async (id:string) => 
    (await fetch(`http://localhost:8000/estates/${id}?_embed=estateReviews`)).json();


// faking a request properly:
// function createDelay() {
//     return new Promise((resolve) => {
//       const delay = Math.random() * 420 + 160;
//       setTimeout(() => resolve(delay), delay);
//     });
// }