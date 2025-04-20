import { type JSX } from "solid-js";
import { notifications } from "src/stores/user.ts";

const EstateCard = (): JSX.Element => {

    const handleBookmark = () => {
        notifications({
            code: 300, type:"warning",message:"added to bookmarked list"
        });
    }

    const handleLiked = () => {
        notifications({
           code: 200 , type:"success",message:"thanks for liking"
        });
    }
  return (
    <div>

        <section class="position-relative rounded-4">

            <img style="height: 12rem;" src="/images/estates/garden-2.jpg" class="ratio ratio-19x9 w-100"  alt="estate" />

            <aside class="position-absolute bottom-0 start-0 px-1 w-100 text-bg-dark bg-opacity-50">

                <small class="p-1 rounded-2 text-bg-primary">
                    For Rent
                </small>

                <div class="d-flex justify-content-between align-items-center px-2">

                    <span class="fw-bolder">Appartement</span>

                    <span>
                        <button onClick={handleLiked} class="btn btn-sm text-white">
                            <i class="fa fa-heart" arial-hidden="true"></i>
                        </button>

                        <button onClick={handleBookmark} class="btn btn-sm text-white">
                            <i class="fa fa-bookmark-o" arial-hidden="true"></i>
                        </button>
                    </span>
                </div>

            </aside>

        </section>

        <section class="row row-cols-1 row-cols-md-2 p-2">

            <p class="col text-start">
                <b class="text-primary">
                    XAF 200 <span class="vr" /> 300 <span class="vr" /> 1200 
                </b> <br/>
                <i class="fa fa-map-marker" arial-hidden="true" ></i> Yaounde , Nkoabang
            </p>

            <aside class="col d-flex justify-content-between align-items-center">
                <div>
                    Rooms <br/> <i class="fa fa-bed" arial-hidden="true"></i> 2
                </div>

                <div>
                    Bath <br/> <i class="fa fa-bath" arial-hidden="true"></i> 2
                </div>

                <div>
                    Space <br/> <i class="fa fa-square" arial-hidden="true"></i> 24 sqm
                </div>

            </aside>

        </section>
      
    </div>
  )
}

export default EstateCard;
