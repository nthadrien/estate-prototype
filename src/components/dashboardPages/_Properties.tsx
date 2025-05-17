import ResponsiveTable from "@components/tables/ResponsiveTable";
import { type JSX, createMemo , createSignal } from "solid-js";
import { useAuthCtx } from "src/context/authContext.tsx";
import { useTranslations } from "src/i18n/utils.ts";


export default function Properties():JSX.Element {

  let Inp !:HTMLInputElement;

  const [{ user , properties, locale },{ delProperties, changeLocation }] = useAuthCtx();
  const t = useTranslations(locale());

  const [ query , setQuery ] = createSignal<string>("");

  const chengeFilter = () => setQuery(Inp.value.toLowerCase());
  

  const filteredProps = createMemo(() =>{

    if ( properties()[0] ) {
      const impo = Object.keys(properties()[0]).filter( h => !["id","geoAddress","building_amenities","estates"].includes(h) );
      let results = properties().filter( (property:any) =>  impo.some( fld =>  (property[fld].toLowerCase()).includes(query().toLowerCase()) ) )
      return results;
    } else  return [];

  });

  const tableOptions = [
    { icon: "info" , name: t("table.optns.det")},
    { icon: "trash-o", name:t("table.optns.del") }
  ]

  const handleTableActions = (id:string, a:number) => {
    if ( a == 0 ) {
      changeLocation({ hash: "property", searchParams: { id }});
    }
    if (a == 1) delProperties(id);
  }

  return (<section>

    <h5 class="mb-3">Properties</h5>

    <nav class="nav justify-content-between align-items-center gap-2 mb-3">
      
      <div style={"max-width:420px;"} class="input-group input-group-sm border p-1 rounded-pill">
        <input ref={Inp} type="search" class="form-control border-0" />
        <button onClick={chengeFilter} class="btn btn-secondary rounded-pill border-0"> 
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
        
    <ResponsiveTable
      list={filteredProps()}
      idField="id"
      removeFields={[ "geoAddress","id","building_amenities"]}
      options = {tableOptions}
      sendAction={ async (a, b) => handleTableActions(a, b)}
    />
        
        
  </section>);

}
