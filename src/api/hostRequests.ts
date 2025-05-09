


export const getProperties = async(id:string) => (await fetch("http://localhost:8000/buildings/")).json();
export const getAccountDetails = async(id:string) => (await fetch("http://localhost:8000/buildings/")).json();

export const getMessages = () => [
    {type:"alert", message:"Your are still on the basic payment plans", code: 101}
]