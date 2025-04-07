
import { createMemo, For, Show, type JSX } from "solid-js";




interface Props {
    list: any[];
    idField: string | number;
    options: {
        icon: string;
        name: string;
    }[];
    sendAction?: () => {}
}

interface OptionsProps {
    sendAction?: () => {}
    options: Props["options"]

}

const TableOptionsDropdown = (props:OptionsProps):JSX.Element => {

    const handleAction = () => {
        alert("Action : Clicked recently ");
    }

    return (
        <div class="dropdown">
            <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bi bi-three-dots-vertical"></i>
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
                <For each={props.options}>
                    { item => <li>
                        <button onClick={handleAction} class="dropdown-item">
                            <i class={`bi bi-${item.icon} me-2`}></i>
                            <span>{item.name}</span>
                        </button>
                    </li>}
                </For>
            </ul>
      </div>
    );
  }
  

function ResponsiveTable(props: Props): JSX.Element {


    const Headings = () => {
        const obj0 = props.list[0];
        return Object.keys(obj0).filter( head => head !== props.idField );
    }


    const list = createMemo(()=>{
        return props.list;
    });

    const sorted = () => list().sort()

    return (
        <section class="table-responsive">

            <table class="table table-hover table-borderless align-middle ">
                {/* table headings comes below here: */}
                <thead>
                    <tr>
                        <th>
                            <input type="checkbox" name="all" class="form-check-input" title="select all visible" />
                        </th>
                        <For each={Headings()}>
                            {head => (<th>
                                {head}
                            </th>)}
                        </For>
                        <th>Option</th>
                    </tr>
                </thead>
                {/* body starts here: */}
                <tbody>
                    <For each={props.list}>
                        {(row, i) => <tr class="list-item">
                            <td class="">
                                <input type="checkbox" name={i.toString()} class="form-check-input" />
                            </td>

                            <For each={Headings()}>
                                {head => <td>
                                    {row[head]}
                                </td>}
                            </For>

                            <td>
                                <TableOptionsDropdown options={props.options} sendAction={props.sendAction} />

                            </td>
                        </tr>}
                    </For>
                </tbody>

            </table>


        </section>
    )
}

export default ResponsiveTable
