import { type JSX } from "solid-js";
import { notifications } from "src/stores/user.ts";
import { useTranslations } from "src/i18n/utils";
import { $locale } from "src/stores/user";
import { type EstateReviewType, type EstateType } from "src/api/dataTypes.ts";
import { useStore } from "@nanostores/solid";

interface Props {
    data: EstateType
}

const EstateCard = (props:Props): JSX.Element => {

    const locale = useStore($locale)
    const t = useTranslations(locale());

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

    const arro = ["tropical-2","tropical","tropical-3","garden-2","garden"];

    const randImg = arro[Math.floor( Math.random()* arro.length )];

    return (<div class="p-1 shadow rounded">


        <aside style={"height:16rem;"} class="bg-dark rounded position-relative">

            <div class="position-absolute nav justify-content-between p-2 w-100">

                <div class="text-bg-success p-1 txt-small shadow">
                    For Rent
                </div>

                <button onClick={handleBookmark} class="btn btn-sm btn-outline-light">
                    <i class="fa fa-heart" />
                </button>

            </div>

            <img src={`/images/estates/${randImg}.jpg`} alt={props.data.name} class="object-fit-fill h-100 w-100 rounded" />

            <ul class="position-absolute bottom-0 nav justify-content-center text-light p-2 w-100 gap-2">
                <li><i class="fa fa-circle rounded-circle" /></li>
                <li><i class="fa fa-dot-circle-o rounded-circle" /></li>
                <li><i class="fa fa-circle rounded-circle" /></li>
            </ul>

        </aside>

        <aside class="row g-2 justify-content-between text-capitalize p-1 p-md-2 lh-0">

            <div class="col-md-10 text-truncate">
                <span class="fs-6"> {props.data.name}</span><br/>
                <span class="text-truncate"> <i class="fa fa-map-marker me-1" /> {props.data.address}</span>
            </div>

            <div class="col-auto col-sm-2 text-md-end">
                <button class={`btn btn-sm fw-semibold btn-primary`}>
                    { props.data.estateReviews ? (props.data.estateReviews[0].generalRate).toPrecision(2): 1.0 }
                </button>
            </div>

            <div class="col-12 d-flex justify-content-between text-secondary">
                <span>{props.data.type} {t("price")}</span>
                <div class="fs-6 text-primary">
                    ${props.data.pricePerDay},  <span class="vr mx-1"></span>
                    ${props.data.pricePerMonth}, <span class="vr mx-1"></span>
                    ${props.data.pricePerHour}</div>
            </div>

            <div title={t("key.numOfGuest")} class="col-auto ">
                <span>{t("guest")}s</span> <br/>
                <i class="fa fa-users mx-2" aria-hidden="true"></i>
                {props.data.numOfGuest}
            </div>

            <div title={t("key.numOfRooms")}  class="col-auto">
                <span>{t("rooms")}</span> <br/>
                <i class="fa fa-bed mx-2" aria-hidden="true"></i> 
                {props.data.numOfRooms}
            </div>

            <div title={t("key.numOfBaths")}  class="col-auto ">
                <span>{t('baths')}</span> <br/>
                <i class="fa fa-bath mx-2" aria-hidden="true"></i>
                {props.data.numOfBaths}
            </div>

            <div title={`${props.data.type} dimensions`} class="col-auto ">
                <span>{t("size")}</span> <br/>
                <i class="fa fa-clone mx-1" aria-hidden="true"></i>
                <span class="text-lowercase">{props.data.size} m² </span>
            </div>

            <div class="nav align-items-center justify-content-between text-capitalize col-12 py-1">

                <span class="fs-6 text-primary"></span>


                <a class="nav-item" href={`/${locale()}/estates/details?`+searchParams}> 
                    {t("table.optns.det")} <i class="fa fa-long-arrow-right ms-1" />
                </a>

            </div>

        </aside>
    </div>);
}

export default EstateCard;
