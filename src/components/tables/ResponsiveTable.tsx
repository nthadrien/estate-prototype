
import { createMemo, For, Show, type JSX } from "solid-js";




interface Props {
    headings: string[];
    list: any[];
    idField: string | number;
    options: {
        icon: string;
        name: string;
    }[];
}

interface OptionsProps {
    id:string|number;
    sendAction : () => {}
    options: Props["options"]

}

const tableOptionsDropdown = (props:OptionsProps) => {

    return (
      <div>
  
      </div>
    );
  }
  

function ResponsiveTable(props: Props): JSX.Element {


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
                        <For each={props.headings}>
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

                            <For each={props.headings}>
                                {head => <td>
                                    {row[head]}
                                </td>}
                            </For>

                            <td>

                            </td>
                        </tr>}
                    </For>
                </tbody>

            </table>


        </section>
    )
}

export default ResponsiveTable
