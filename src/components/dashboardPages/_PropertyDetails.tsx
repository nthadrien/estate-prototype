import { useAuthCtx } from "src/context/authContext.tsx";
import { onCleanup, onMount } from "solid-js"



export default function PropertyDetails() {

    const [{ properties }] = useAuthCtx();


    onMount( () =>{
        
    })


    onCleanup(()=>{

    });



    return (
        <section>
            <h5 class="mb-3">Property id: #&*34RT3$tyJLO</h5>

            <header>
                <button class="btn btn-warning">Modify</button>
                <button class="btn btn-warning">Modify</button>
                <button class="btn btn-warning">Add Estate</button>
            </header>

            <aside>
                <h6>Property description</h6>
                <p class="text-secondary">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias sapiente doloribus nemo minus ab maxime 
                    laboriosam id, voluptatem quidem, omnis assumenda ducimus. Sint in, dignissimos placeat eius asperiores soluta nostrum!
                </p>
            </aside>

            <aside>
                more ... like amenities .... and so on
            </aside>


            <aside>
                <h2>Estates List  (12) </h2>



                <div class="row row-cols-2">

                </div>
            </aside>
        
        </section>
    )
}
