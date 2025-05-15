import { type JSX, For, Switch, Match } from "solid-js";
import { useAuthCtx } from "src/context/authContext.tsx";
import { useTranslations } from "src/i18n/utils.ts";


export default function Properties():JSX.Element {

  const [{ user , properties, locale }] = useAuthCtx();
  const t = useTranslations(locale());

  const headings = ():string[] => {
    if ( properties() && properties()[0] ) return Object.keys(properties()[0]).filter( h => !["id","geoAddress","building_amenities"].includes(h));
    return [];
  }

  return (<section>

    <h5 class="mb-3">Properties</h5>

    <nav class="nav justify-content-between align-items-center gap-2 mb-3">
      
      <div style={"max-width:420px;"} class="input-group border rounded">
        <input type="search" class="form-control border-0" />
        <button class="input-group-text bg-body border-0"> 
          <i class="fa fa-search"/>
        </button>
      </div>

      <div class="btn-group dropdown">
        <button class="btn btn-sm"  type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="fa fa-align-center me-2"></i>
          Filter
        </button>
        <ul class="dropdown-menu dropdown-menu-end p-1 txt-small text-capitalize">
          <li><a class="dropdown-item fw-bolder" href="#">{t("accn")}</a></li>
          <li> <hr class="dropdown-divider" /> </li>
          <li><a class="dropdown-item" href="#/profil">{t("dashb.profil")}</a></li>
          <li>
              <a class="dropdown-item" href="#/settings">{t("dashb.set")}</a>
          </li>
          <li> <hr class="dropdown-divider" /> </li>
          <li>
              <button id="logoutBtn" class="dropdown-item">Logout </button>
          </li>
        </ul>
      </div>

    </nav>


    <aside>
      <table class="table">
        <thead>
        <tr>
          <th>
            <input type="checkbox" class="form-check-input me-2" id="check-all" />
            <b>#</b>
          </th>
          <For each={headings()}>
            { item => <td>{item}</td>}
          </For>
          <th> ... </th>
        </tr>
        </thead>

        <tbody>
          <For each={properties()}>
            {(row,index) => <tr>
              <td>
              <input type="checkbox" class="form-check-input me-2" id="check-all" />
                {index() + 1}
              </td>
              <For each={headings()}>
                { cell => <td> 
                  <Switch>
                    <Match when={["estates"].includes(cell)}>
                      { row[cell].length }
                    </Match>
                    <Match when={cell}>
                      { row[cell] }
                    </Match>
                    
                  </Switch>
                </td> }
              </For>
              <td>
                <button class="btn">
                  options
                </button>
              </td>
            </tr>}
          </For>
        </tbody>
      
      </table>

    </aside>
        
        
        
  </section>);

}
