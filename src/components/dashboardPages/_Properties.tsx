import ResponsiveTable from "@components/tables/ResponsiveTable";
import { type JSX, createMemo , createSignal, For } from "solid-js";
import { useAuthCtx } from "src/context/authContext.tsx";
import { useTranslations } from "src/i18n/utils.ts";

interface Props {
  changeSearchParams : (a:{ fid: string; uid:string }) => {}
}

export default function Properties(props:Props):JSX.Element {

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
    
    { icon: "info" , name: t("table.optns.det") },
    { icon: "trash" , name: t("table.optns.del")},
    
  ]

  const pageOptions = [
    { icon: "plus" , name: `${t("add")} ${t("dashb.prop")}`},
    { icon: "print", name:t("table.optns.prin") },
    { icon: "file-pdf-o", name:t("table.optns.pdf") }
  ]

  const handleTableActions = (id:string, a:number) => {
    if ( a == 0 ) { 
      props.changeSearchParams({ fid:"id" , uid: id });
      window.location.hash = "#property"
    }
    if (a == 1) delProperties(id);
  }

  return (<section>

    <h5 class="text-capitaliz mb-3">{t("dashb.props")}</h5>

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
          <For each={pageOptions}>
            {(item,i) => <li>
              <button class="dropdown-item">
                <i class={`fa fa-${item.icon} me-2`} /> {item.name}
              </button>
            </li>}
          </For>
        </ul>
      </div>

    </nav>
        
    <ResponsiveTable
      tableName={t("dashb.props")}
      list={filteredProps()}
      idField="id"
      removeFields={[ "geoAddress","id","building_amenities"]}
      options = {tableOptions}
      sendAction={ async (a, b) => handleTableActions(a, b)}
    />
        
        
  </section>);

}
