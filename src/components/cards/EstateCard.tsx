import { type JSX } from "solid-js";
import { notifications } from "src/stores/user.ts";
import { useTranslations } from "src/i18n/utils";
import { lang } from "src/stores/user";
import { type EstateReviewType, type EstateType } from "src/api/dataTypes.ts";

interface Props {
    data: EstateType
}

const EstateCard = (props:Props): JSX.Element => {

    const t = useTranslations(lang.get());

    const searchParams = new URLSearchParams({
        type: props.data.type,
        id: props.data.id,
        add: props.data.address,
        added: (props.data.numOfGuest).toString(),
        specs: (props.data.pricePerMonth).toString()
    });

    const handleBookmark = ():void => {
        notifications({
            code: 300, type:"warning",message:"added to bookmarked list"
        });
    }

    const handleLiked = ():void => {
        notifications({
           code: 200 , type:"success",message:"thanks for liking"
        });
    }

    const getColor = ():string => {
        const roto = props.data.estateReviews ? props.data.estateReviews[0] : false;
        if ( roto ) {
            return  roto?.generalRate < 1.8 ? 'danger' : 
                    roto?.generalRate < 2 ? 'warning' : 
                    roto?.generalRate < 2.8 ? 'primary' : 
                    'success'; 

        }
        return 'secondary';

    }
    return (
        <div class="text-capitalize">

            <section class="position-relative rounded-4">

                <div style={"top:.5rem;right:.5rem;z-index:1;font-size:smaller;"} class="position-absolute p-1 text-bg-primary">
                    {t("estate.rent")}
                </div>

                <img loading="lazy" style="height: 14rem;" src="/images/estates/garden-2.jpg" class="ratio ratio-19x9 w-100 rounded-2"  alt="estate" />

                <aside class="position-absolute bottom-0 start-0 px-1 w-100 d-flex justify-content-between align-items-center px-2">

                    <span class="fw-bolder text-white">{props.data.type}</span>

                    <span>
                        <button onClick={handleLiked} class="btn btn-sm text-white">
                            {props.data.reviews.length}  <i class="fa fa-heart" aria-hidden="true"></i>
                        </button>

                        <button onClick={handleBookmark} class="btn btn-sm text-white">
                            <i class="fa fa-bookmark-o" aria-hidden="true"></i>
                        </button>
                    </span>

                </aside>

            </section>

            <section class="d-flex flex-column gap-2 p-2">

                <div class="fs-6 fw-semibold">{props.data.type} for {props.data.numOfGuest} guests </div>

                <div class="text-truncate">
                    <i class="fa fa-map-marker me-2" aria-hidden="true"  /> 
                    {props.data.address}
                </div>

                <ul  class="nav justify-content-between align-items-start">

                    <li> 
                        <strong>{t("bedrooms")}</strong> <br/>
                        <i class="fa fa-bed me-1" aria-hidden="true"></i> 
                        {props.data.numOfRooms}
                    </li>

                    <li>
                        <strong>{t('bathrooms')}</strong> <br/>
                        <i class="fa fa-bath me-1" aria-hidden="true"></i>
                        {props.data.numOfBaths}
                    </li>

                    <li>
                        <strong>{t("size")}</strong> <br/>
                        <i class="fa fa-square me-1" aria-hidden="true"></i> 
                        <span class="text-lowercase">{props.data.size} m² </span>
                    </li>

                </ul>

                <div class="d-flex align-items-center gap-2">
                    <b class={`btn btn-sm btn-${getColor()} fw-bold`}>
                        {props.data.estateReviews && props.data.estateReviews[0].generalRate.toPrecision(2)}
                    </b>
                    <div class="text-secondary lh-sm">
                        <span class="text-truncate">{props.data.estateReviews && props.data.estateReviews[0].lastReview} </span> <br/>
                        <span>{props.data.estateReviews && props.data.estateReviews[0].reviews.length} reviews</span>
                    </div>
                </div>

                <div>
                   {t("price")} : $ {props.data.pricePerHour} / hr 
                   <span class="vr mx-1" /> $ {props.data.pricePerDay} / jr 
                   <span class="vr mx-1" /> $ {props.data.pricePerMonth} / mois              
                </div>
                
                <div class="d-flex justify-content-between text-capitalize">

                    <a class="fw-bold text-success" href={"/"+ lang.get()+"/estate/details?"+searchParams}>
                        {t("more")}
                    </a>

                </div>

            </section>
        
        </div>
  )
}

export default EstateCard;
