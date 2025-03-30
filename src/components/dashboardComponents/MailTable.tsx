

interface Props {

}

const tableFields:string[] = ["name","status","price","date","exp"];

const btnOpts = [
    { name:'modify', icon:'folder-plus'},
    { name:'taken', icon:'journal-bookmark-fill'},
    { name:'available', icon:'house-check'},
    { name:'add', icon:'archive'}
]


export default function Tables(props:Props) {




  return (<div class="table-responsive postion-relative p-2 ">
    <table class="table table-hover">
        <thead>
            <tr>
                <th class="position-sticky left-0 top-0">
                    <input type="checkbox" class="form-check-input me-3" name="check-all"/>
                    #
                </th>
                {tableFields.map( (fld, i) => <th>
                    <i class="bi bi-caret-up"></i>
                    <i class="bi bi-caret-down"></i>
                    <span>{fld}</span>
                </th>)}
                <th>...</th>
            </tr>
        </thead>

        <tbody>
            {[0,1,2,3,4,5,6].map( (row, i) => <tr>
                <td class="position-sticky left-0 top-0">
                    <input type="checkbox" class="form-check-input me-3" name={`check-box=${i}`} />
                    {i + 1}
                </td>
                {tableFields.map( item => <td>{item}</td>)}
                <td>
                    <div class="dropdown">
                        <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            options
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

</div>);
}