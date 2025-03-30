import Pagination from "@components/dashboardComponents/Pagination";
import { createSignal } from "solid-js";


const tableFields:string[] = ["name","status","price","date","exp"];

const btnOpts = [
    { name:'read', icon:'folder-plus'},
    { name:'detele', icon:'journal-bookmark-fill'},
    { name:'reply', icon:'house-check'}
]


function InboxPage() {

  const [ section , setSection ] = createSignal<string>("inbox")
  return (<section class="min-vh-75">
    <h4>Notifications / messages </h4>

    <nav role="tab" class="nav gap-3 nav-underline text-capitalize border-bottom">
      <button class="btn rounded-0 active">
        <i class="bi bi-envelope-exclamation-fill"></i>  inbox
      </button>
      <button class="btn rounded-0">
        <i class="bi bi-send-fill"></i> send
      </button>
      <button class="btn rounded-0">
        <i class="bi bi-journal-text"></i> draft
      </button>
    </nav>

    <div class="table-responsive postion-relative p-2 ">
    <table class="table table-hover">

        <tbody>
            {[0,1,2,3,4,5,6].map( (row, i) => <tr>
                <td class="position-sticky left-0 top-0">
                    <input type="checkbox" class="form-check-input me-3" name={`check-box=${i}`} />
                </td>
                {tableFields.map( item => <td>{item}</td>)}
                <td>
                    <div class="dropdown">
                        <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="bi bi-three-dots-vertical"></i>
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end p-2">
                            {btnOpts.map(opt => <li>
                                <a class="dropdown-item" href="#">
                                    <i class={`bi bi-${opt.icon}`}></i>
                                    <span class="ms-3">{opt.name}</span>
                                </a>
                            </li>)}
                        </ul>
                    </div>
                </td>
            </tr>)}
        </tbody>
    </table>
    </div>
    <Pagination />
      
  </section>)
}

export default InboxPage;
