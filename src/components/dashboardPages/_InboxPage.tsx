import { createSignal, For, lazy } from "solid-js";
import Pagination from "@components/dashboardComponents/Pagination";

const btnOpts = [
  { name: 'read', icon: 'folder-plus' },
  { name: 'detele', icon: 'trash' },
  { name: 'reply', icon: 'reply' }
];


function InboxPage() {

  const [section, setSection] = createSignal<string>("inbox");

  return (<section class="min-vh-75 row g-3 g-lg-4">

    <aside class="col-lg-5">

      <nav role="tab" class="nav nav-underline gap-3 text-capitalize border-bottom mb-3">
        <button class="nav-link p-2 active">
          <i class="bi bi-inbox-fill"></i>  Inbox
        </button>
        <button class="nav-link p-2">
          <i class="bi bi-send-fill"></i> Sent
        </button>
        <button class="nav-link p-2">
          <i class="bi bi-journal-text"></i> Draft
        </button>
      </nav>

      <ul class="nav flex-column gap-2">

        <For each={[1,2,3,4]}>
          { notification => <li class="d-flex gap-3 justify-content-between border p-2 rounded-4 position-relative">

            <label style={"height:2.2rem; width:2.2rem"} class="d-flex align-items-center justify-content-center flex-shrink-0 rounded-circle text-bg-primary fw-bold">
              LM
            </label>

            <aside class="row g-2 justify-content-between ">

              <div class="col-7 lh-md">
                <strong>Username</strong> <br/>
                <span class="text-primary">Role on Platform</span>
              </div>

              <small class="col-5 fw-light text-end">
                1 month ago
              </small>

              <small class="col-12 text-body-secondary small ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et quaerat 
              </small>

              <p class="bg-inherit">
                <input class="form-check-input" type="checkbox" name={notification.toString()} />
                <For each={btnOpts}>
                  {(item) => <button title={item.name} class="btn btn-sm">
                    <i class={`bi bi-${item.icon}`}></i>  
                  </button>}
                </For>
              </p>
            </aside>
          </li>}
        </For>

      </ul>

      <Pagination />

    </aside>

    <aside class="col-lg-7">

      <nav class="nav gap-2 p-2 p-lg-3">

        <For each={btnOpts}>
          {(item) => <button title={item.name} class="btn btn-sm">
            <i class={`bi bi-${item.icon}`}></i>  
          </button>}
        </For>

      </nav>


      <article class="d-flex gap-1 gap-lg-3">

        <label style={"height:2.8rem; width:2.8rem"} class="d-flex align-items-center justify-content-center flex-shrink-0 rounded-circle text-bg-primary fw-bold">
          LM
        </label>

        <div class="w-100">

          <div class="nav justify-content-between w-100">
            <h3>Username</h3>
            <small class="text-primary">Today 4:34pm</small>
          </div>


          <h6 class="text-primary">Role on Platform</h6>

          <small class="text-secondary">Pseudo.name@mailbox.com</small>


          <h5 class="my-3">Object or Type of message</h5>

          <div>
            <h5>Hi Audience,</h5>
            <p>
              Message : Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit quasi aliquid repellendus aliquam amet unde repudiandae consequuntur explicabo laboriosam? Alias, mollitia id. Nobis excepturi magni modi. Totam exercitationem nulla nobis.
            </p>
            <p>
              Sit amet consectetur adipisicing elit. Esse sed molestias, eius quam amet ducimus velit praesentium atque iste, nobis, ipsam adipisci recusandae eos accusantium itaque aliquam tenetur quae exercitationem?
            </p>

          </div>


          <form class="my-4 py-4">

            <h6>Will you like to reply ?</h6>

            <div class="form-floating mb-3">
              <textarea style={"height:120px"} class="form-control border-0" cols={36} placeholder="Leave a comment here" id="floatingTextarea"></textarea>
              <label for="floatingTextarea">message ...</label>
            </div>

            <button class="btn text-bg-primary">
              <i class="bi bi-reply me-2"></i>
              Reply
            </button>

          </form>

          
          

        </div>
      </article>

    </aside>

  </section>)
}

export default InboxPage;
