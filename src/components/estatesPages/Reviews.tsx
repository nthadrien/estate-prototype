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

  return (<section class="col-lg-10">

    <nav class="nav justify-content-between align-items-center ">
      <h5 class="text-capitalize fw-bold">{t("guests.reviews")}</h5>
      <b>based 34 {t("reviews")}</b>
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


    <Show when={true} fallback={<button onClick={showSome} class="nav-link text-success">Show reviews</button>}>
      <ul class="nav flex- gap-2">
        <For each={[1,2,3,4,5]}>
          {item => <li class="p-2 border-bottom shadow rounded">

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

            {/* <ul class="col-auto col-md-6 nav flex-column gap-2">

              <li class="col-auto">
                agent : 
                <For each={[1,2,3,4,5]}>
                  { item => <i class={`fa fa-star ${item < 4 ?"text-warning": "text-secondary" }`}/>}
                </For>
              </li>

              <li class="col-auto">
                sanitation : 
                <For each={[1,2,3,4,5]}>
                  { item => <i class={`fa fa-star ${item < 4 ?"text-warning": "text-secondary" }`}/>}
                </For>
              </li>

              <li class="col-auto">
                enviroment : 
                <For each={[1,2,3,4,5]}>
                  { item => <i class={`fa fa-star ${item < 3 ?"text-warning": "text-secondary" }`}/>}
                </For>
              </li>

            </ul> */}

          </li>}
        </For>
      </ul>
    </Show>

  </section>);
}