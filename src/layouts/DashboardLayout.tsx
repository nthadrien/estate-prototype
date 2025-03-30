
import { type Accessor, type JSX, For } from "solid-js";
import DashboardHeader from "@components/navbars/DashboardHeader.tsx";

interface Props {
  currentPage : Accessor<string>;
  children: JSX.Element;
  lang:string;
  pages: {
    en: string;
    fr: string;
    icon: string;
    link: string;
  }[]
}

function DashBoardLayout(props: Props) : JSX.Element {

  return (<div class="container-fluid d-flex flex-column flex-md-row p-0  vh-100 overflow-hidden">

      <nav class="col-12 col-md-2 p-3">

        <h3 class="mb-3">Logo</h3>

        <aside class="d-flex flex-md-column gap-2 overflow-hidden">
          <For each={props.pages}>
            { page => <a 
                href={page.link} 
                class={`btn btn-sm text-center text-md-start ${page.link == props.currentPage() ? "fw-bold text-bg-success": ""}`}
              >
                <i class={`bi bi-${page.icon} me-3`} />
                <span class="d-none d-md-inline">{props.lang == "en" ? page.en : page.fr }</span>
              </a>}
          </For>
        </aside>
      </nav>

      <main class="col-12 col-md-10 d-flex flex-column gap-3 mb-4 vh-100 overflow-y-auto">
        <DashboardHeader />

        <div class="p-4">
          {props.children ?? "OOOOppps"}
        </div>

        <footer class="container mx-auto">
          <small>&copy; nthadrien rental design 2025 </small>
        </footer>

      </main>

    </div>
  )
}

export default DashBoardLayout;