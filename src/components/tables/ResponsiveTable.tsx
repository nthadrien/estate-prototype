
import { createMemo, createSignal, For, Match, Show, Switch, type JSX } from "solid-js";

interface Props {
    list: any[];
    idField: string | number;
    removeFields: any[];
    tableName: string;
    options: {
        icon: string;
        name: string;
    }[];
    sendAction: (a:string, b:number) => {}
}

interface OptionsProps {
    sendAction: (a:number) => {}
    options: Props["options"]
}

const TableOptionsDropdown = (props:OptionsProps):JSX.Element => {
    return (<div class="dropdown">
        <button class="btn btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="fa fa-ellipsis-h" />
        </button>
        <ul class="dropdown-menu dropdown-menu-end txt-small">
            <For each={props.options}>
            { (item,i) => <li>
                <button onClick={ e => props.sendAction(i())} class="dropdown-item text-capitalize">
                    <i class={`fa fa-${item.icon} me-2`}></i>
                    <span>{item.name}</span>
                </button>
            </li>}
            </For>
        </ul>
    </div>);
}

export default function ResponsiveTable(props: Props): JSX.Element {

    const [ sortBy, setSortBy ] = createSignal<string>("");
    const [ sortOrder , setSortOrder ] = createSignal<boolean>(false);
    const [ itemsPp , setItemsPp ] = createSignal<number>(8);
    const [ currentP , setCurrentP ] = createSignal<number>(0);

    const Headings = createMemo(() => {
        if ( props.list[0] )
        return Object.keys(props.list[0]).filter( head => !props.removeFields.includes(head) );
        return []
    });

    const sendAction = (a:any,action:number) => {
        if ( a[props.idField] ) props.sendAction( a[props.idField] , action);
        else props.sendAction( a?.id , action );
    }

    const changeSorts = ( a: string ):void => {
        if ( a ===  sortBy() )  setSortOrder( prev => !prev )
        else setSortBy(a);
    }

    const sortedList = () => {
        const fi = sortBy();
        let newList:any[] = [];

        if ( ["date","day","constructedIn"].includes( fi ) ) {
            newList = props.list.sort(  ( a  , b ) => {
                if (a[fi] == null) return 1;
                if (b[fi] == null) return -1;
                return parseFloat(b[fi]) - parseFloat(a[fi])
            });

        } else if ( ["estates"].includes(fi) ) {

            newList = props.list.sort(  ( a  , b ) => {
                if (a[fi] == null) return 1;
                if (b[fi] == null) return -1;
                return sortOrder() ?  b[fi].length - a[fi].length : a[fi].length - b[fi].length 
            });

        } else if ( true ) {
        
            newList = props.list.sort(  ( a  , b ) => {
                if (a[fi] == null) return 1;
                if (b[fi] == null) return -1;
                return sortOrder() ? a[fi].localeCompare(b[fi]) : b[fi].localeCompare(a[fi]);
            });
        }

        return newList;
    }

    const Fallback = (<div>
        <h2>Empty</h2>
    </div>)

    const startAt = createMemo(() => currentP() * itemsPp());
    const endAt = () => startAt() + itemsPp();

    return (<>

    <div class="text-end p-2"> 
        {endAt() > sortedList().length ? sortedList().length : endAt() } <span class="vr mx-2" /> {sortedList().length} {props.tableName}
    </div>
    
    <section class="table-responsive">
        <Show when={props.list[0]} fallback={Fallback} >
            <table class="table table-hover table-borderless align-middle ">
                {/* table headings comes below here: */}
                <thead>
                    <tr class="text-capitalize">
                        <th>
                            #
                        </th>
                        <For each={Headings()}>
                            {(head, index) => (<th onClick={ _=>changeSorts(head)}  class={index() < 1 ? "position-sticky start-0":""}>
                                <Show when={sortBy () == head }>
                                    <i class={`fa fa-sort${ sortOrder() ? "-desc" : "-asc" } me-1`} />
                                </Show>
                                {head}
                            </th>)}
                        </For>
                        <th>Option</th>
                    </tr>
                </thead>
                {/* body starts here: */}
                <tbody>
                    <For each={sortedList().slice(startAt(),endAt())}>
                        {(row, i) => <tr class="list-item">
                            <td> {(startAt()+ i() + 1)} </td>
                            <For each={Headings()}>
                                {(cell, index) => <td class={index() < 1 ? "position-sticky start-0":""}>
                                    <Switch>
                                        <Match when={["estates"].includes(cell)}>
                                            {row[cell].length}
                                        </Match>
                                        <Match when={cell}>
                                            {row[cell]}
                                        </Match>
                                    </Switch>
                                </td>}
                            </For>
                            <td>
                                <TableOptionsDropdown 
                                    options={props.options} 
                                    sendAction={ async(e) => sendAction(row, e)} 
                                />
                            </td>
                        </tr>}
                    </For>
                </tbody>

            </table>
        </Show>
    </section>

    <footer class="nav align-items-center justify-content-between">


        <nav class="txt-small">
            <For each={[...Array(Math.ceil(sortedList().length/itemsPp())).keys()]}>
                { item => <button class={`btn btn-sm rounded-pill ${currentP() == item ? "btn-secondary" : ""}`} onClick={_=>setCurrentP(item)}>
                    <i>{item + 1}</i>
                </button>}
            </For>
        </nav>


    </footer>
    
    </>);
}