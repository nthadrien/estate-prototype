import { $locale } from "src/stores/user.ts";
import { useStore } from "@nanostores/solid";
import { createSignal, createResource,Show } from "solid-js";
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

  return (<section class="col-12">

    <nav class="nav justify-content-between align-items-center ">
      <h5 class="text-capitalize fw-bold">Reviews</h5>
      
      <h6>General Stats of 34 reviews</h6>
    </nav>

    <ul class="list-unstyled row">

      <li class="col-md-6">
        <b class="text-capitalize">agent</b>
        <div class="progress-bar rounded-3 my-2">
          <div class="bar bg-secondary"></div>
        </div>
      </li>

      <li class="col-md-6">
        <b class="text-capitalize">enviroment</b>
        <div class="progress-bar rounded-3 my-2">
          <div class="bar bg-secondary"></div>
        </div>
      </li>

      <li class="col-md-6">
        <b class="text-capitalize">sanitation</b>
        <div class="progress-bar rounded-3 my-2">
          <div class="bar bg-secondary"></div>
        </div>
      </li>

      <li class="col-md-6">
        <b class="text-capitalize">comparism</b>
        <div class="progress-bar rounded-3 my-2">
          <div class="bar bg-secondary"></div>
        </div>
      </li>

    </ul>


    <Show when={showReviews()} fallback={<button onClick={showSome} class="nav-link text-success">Show reviews</button>}>
      <ul>
        <li> review 1 </li>
        <li>review 2</li>
      </ul>
    </Show>

  </section>);
}