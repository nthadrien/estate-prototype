
// properties cruds

export const getProperties = async(id:string) => (await fetch("http://localhost:8000/buildings/")).json();

export const getPropertiesDetails = async (id:string) => (await fetch("http://localhost:8000/buildings/"+id)).json();

export const delProperties = async (id:string) => (await fetch( 
    `http://localhost:8000/buildings/${id}?_dependent=estates` , { method: "POST" } 
)).json();

export const patchProperties = async (id:string, a:any) => (await fetch( 
    `http://localhost:8000/buildings/${id}?_dependent=estates` , 
    { 
        method: "POST" ,
        body: JSON.stringify(a)
    } 
)).json();




// estates crud:



// users crud
export const getAccountDetails = async(id:string) => {
    return (await fetch("http://localhost:8000/buildings/")).json();

    // return new Promise((resolve,reject) => {
    //   const delay = Math.random() * 420 + 3600;
    //   if ( resp.ok ) setTimeout(() => resolve(resp.json()), delay);
    //   else reject(JSON.stringify({ code:404 , message: "NOT FOUND !!"}));
    // });

    
}

export const getMessages = () => [
    {type:"alert", message:"Your are still on the basic payment plans", code: 101}
];



