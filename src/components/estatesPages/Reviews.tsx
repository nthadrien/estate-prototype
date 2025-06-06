import { $locale } from "src/stores/user.ts";
import { useStore } from "@nanostores/solid";
import { createSignal, createResource,Show, For } from "solid-js";
import { useTranslations } from "src/i18n/utils.ts";
import { fetchReviews } from "src/api/getRequests";



interface Props {

}

export default function Reviews (props:Props) {

    const locale = useStore($locale)
    const t = useTranslations(locale());

    const [ reviewId, setReviewId  ] = createSignal<string>("")
    const [ showReviews, setShowReviews ]= createSignal<boolean>(false);
    const [ reviewsList,{ mutate , refetch }] = createResource(reviewId, fetchReviews);

    const showSome = () => {
        setReviewId("")
    }

  return (<section class="col-lg-12 row g-3">

    

    <ul class="col-lg-8 row g-3">

      <h5 class="text-capitalize fw-bold">{t("guests.reviews")}</h5>

      <li class="col-12 d-flex gap-4 align-items-center">
        <div>
          <span>{t("reviews.tt")}</span>  <br/>
          <For each={[1,2,3,4,5]}>
            { item => <i class={`fa fa-star ${ item < 2.5 ? "text-warning": "txt-secondary" }`} />}
          </For>
        </div>
        <div>
          <span class="fw-semibold fs-2"> 2.5 </span> / 5
        </div>

        <span class="ms-auto"> {t("reviews.based")} 34 {t("reviews")}</span>
      </li>

      <div class="col-12 fw-bolder">
        General reviews
      </div>

      <li class="col-md-6 col-lg-4 d-flex align-items-center gap-2">
        <small class="text-capitalize col-4 col-lg-auto">{t("host")}</small>
        <div style={{ height: "10px"}} class="progress border w-100" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
          <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 50%"></div>
        </div>
      </li>

      <li class="col-md-6 col-lg-4 d-flex align-items-center gap-2">
        <small class="text-capitalize col-4 col-lg-auto">{t("host")}</small>
        <div style={{ height: "10px", "font-size":"xx-small"}} class="progress border w-100" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
          <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" style="width: 50%"> 35%</div>
        </div>
      </li>

      <li class="col-md-6 col-lg-4 d-flex align-items-center gap-2">
        <small class="text-capitalize col-4 col-lg-auto">{t("host")}</small>
        <div style={{ height: "10px", "font-size":"xx-small"}} class="progress border w-100" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
          <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" style="width: 50%"> 35%</div>
        </div>
      </li>

      <li class="col-md-6 col-lg-4 d-flex align-items-center gap-2">
        <small class="text-capitalize col-4 col-lg-auto">{t("host")}</small>
        <div style={{ height: "10px", "font-size":"xx-small"}} class="progress border w-100" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
          <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" style="width: 50%"> 35%</div>
        </div>
      </li>

    </ul>

    <aside style={{ top:"20%"}} class="col-lg-4 sticky-lg-top">
      <h6>NB</h6>
      <p>
        The share thoughts exposed here are for guests which were customers of this properties. So please
        If you’ve used this product, share your thoughts with others who might need to get a genuine reviews on this estate
      </p>

      <button class="btn btn-sm btn-primary">
        <i class="fa fa-eye me-2"></i>
        Share My Thoughts
      </button>
    </aside>


    <section class="col-md-8">
      <p class="fw-smibold">{t("reviews")}</p>
    <Show when={true} fallback={<button onClick={showSome} class="nav-link text-success">Show reviews</button>}>
      <ul class=" nav flex-column gap-3 p-2">
        <For each={[1,2,3,4,5]}>
          {item => <li class="p-1 border-left">

            <div class="nav justify-content-between align-items-centers">
              <div>
                <span class="h4 fw-semibold">Username</span> <br/>
                <small class="text-scondary">12 may 2025</small>
              </div>
              <div class="text-primary">
                <span class="fw-bold fs-3">5</span>
                /10
              </div>
            </div>

            <strong>Summary title predefined</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Impedit autem totam dolor deleniti, consectetur ea? 
              Quas sequi eum perspiciatis officia voluptatibus possimus in dignissimos, 
              reprehenderit sed error assumenda reiciendis aut?
            </p>

          </li>}
        </For>
      </ul>
    </Show>
    </section>

  </section>);
}