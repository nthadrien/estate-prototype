

// interface Props {

// }

// const tableFields:string[] = ["name","status","price","date","exp"];

// const btnOpts = [
//     { name:'modify', icon:'folder-plus'},
//     { name:'taken', icon:'journal-bookmark-fill'},
//     { name:'available', icon:'house-check'},
//     { name:'add', icon:'archive'}
// ]


// export default function Tables(props:Props) {




//   return (<div class="table-responsive postion-relative p-2 ">
//     <table class="table table-borderless table-hover">
//         <thead>
//             <tr>
//                 <th class="position-sticky left-0 top-0">
//                     <input type="checkbox" class="form-check-input me-3" name="check-all"/>
//                     #
//                 </th>
//                 {tableFields.map( (fld, i) => <th>
//                     <i class="bi bi-caret-up"></i>
//                     <i class="bi bi-caret-down"></i>
//                     <span>{fld}</span>
//                 </th>)}
//                 <th>...</th>
//             </tr>
//         </thead>

//         <tbody>
//             {[0,1,2,3,4,5,6].map( (row, i) => <tr>
//                 <td class="position-sticky left-0 top-0">
//                     <input type="checkbox" class="form-check-input me-3" name={`check-box=${i}`} />
//                     {i + 1}
//                 </td>
//                 {tableFields.map( item => <td>{item}</td>)}
//                 <td>
//                     <div class="dropdown">
//                         <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
//                             options
//                         </button>
//                         <ul class="dropdown-menu dropdown-menu-end p-2">
//                             {btnOpts.map(opt => <li>
//                                 <a class="dropdown-item" href="#">
//                                     <i class={`bi bi-${opt.icon}`}></i>
//                                     <span class="ms-3">{opt.name}</span>
//                                 </a>
//                             </li>)}
//                         </ul>
//                     </div>
//                 </td>
//             </tr>)}
//         </tbody>
//     </table>

// </div>);
// }


// import { createSignal, createMemo, For, Switch, Match } from 'solid-js';
// import { createStore } from 'solid-js/store';
// import dayjs from 'dayjs';
// import 'dayjs/locale/en';
// import 'dayjs/plugin/isSameOrBefore';
// import 'dayjs/plugin/isSameOrAfter';
// import 'dayjs/plugin/isBetween';

// dayjs.locale('en');

// function SortableTable(props) {
//   const [filterText, setFilterText] = createSignal('');
//   const [sortBy, setSortBy] = createSignal(null);
//   const [sortDirection, setSortDirection] = createSignal('asc');
//   const [dataStore, setDataStore] = createStore(props.data || []);

//   const filteredData = createMemo(() => {
//     const text = filterText().toLowerCase();
//     return dataStore.filter(item => {
//       if (!text) return true;
//       return Object.values(item).some(value => {
//         if (value === null || value === undefined) return false;
//         return String(value).toLowerCase().includes(text);
//       });
//     });
//   });

//   const sortedData = createMemo(() => {
//     const sortKey = sortBy();
//     const direction = sortDirection();
//     const data = [...filteredData()];

//     if (!sortKey) return data;

//     return data.sort((a, b) => {
//       const aValue = a[sortKey];
//       const bValue = b[sortKey];

//       if (aValue === bValue) return 0;

//       let comparison = 0;

//       const typeA = typeof aValue;
//       const typeB = typeof bValue;

//       if (typeA === 'string' && typeB === 'string') {
//         const dateA = dayjs(aValue);
//         const dateB = dayjs(bValue);
//         if (dateA.isValid() && dateB.isValid()) {
//           comparison = dateA.valueOf() - dateB.valueOf();
//         } else {
//           comparison = aValue.localeCompare(bValue, undefined, { sensitivity: 'base' });
//         }
//       } else if (typeA === 'number' && typeB === 'number') {
//         comparison = aValue - bValue;
//       } else if (aValue instanceof Date && bValue instanceof Date) {
//         comparison = aValue.getTime() - bValue.getTime();
//       } else {
//         comparison = String(aValue).localeCompare(String(bValue), undefined, { sensitivity: 'base' });
//       }

//       return direction === 'asc' ? comparison : -comparison;
//     });
//   });

//   const handleSort = (key) => {
//     if (sortBy() === key) {
//       setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
//     } else {
//       setSortBy(key);
//       setSortDirection('asc');
//     }
//   };

//   const handleOptionClick = (item) => {
//     alert(`Option clicked for item with ID: ${item.id}`);
//     // You can implement your desired action here, e.g., navigation, modal display
//   };

//   return (
//     <div class="table-responsive">
//       <input
//         type="text"
//         class="form-control mb-2"
//         placeholder="Filter table..."
//         value={filterText()}
//         onInput={e => setFilterText(e.currentTarget.value)}
//       />
//       <table class="table table-striped table-bordered">
//         <thead>
//           <tr>
//             {Object.keys(dataStore[0] || {}).map(key => (
//               <th key={key} onClick={() => handleSort(key)} style={{ cursor: 'pointer' }}>
//                 {key}
//                 <Switch>
//                   <Match when={sortBy() === key}>
//                     {sortDirection() === 'asc' ? ' ▲' : ' ▼'}
//                   </Match>
//                 </Switch>
//               </th>
//             ))}
//             <th>Options</th>
//           </tr>
//         </thead>
//         <tbody>
//           <For each={sortedData()}>
//             {(item) => (
//               <tr>
//                 {Object.keys(dataStore[0] || {}).map(key => (
//                   <td key={`${item.id}-${key}`}>{item[key]}</td>
//                 ))}
//                 <td>
//                   <button class="btn btn-sm btn-outline-secondary" onClick={() => handleOptionClick(item)}>
//                     Option
//                   </button>
//                 </td>
//               </tr>
//             )}
//           </For>
//           {filteredData().length === 0 && (
//             <tr>
//               <td colSpan={Object.keys(dataStore[0] || {}).length + 1} class="text-center">
//                 No matching data found.
//               </td>
//             </tr>
//           )}
//           {dataStore.length === 0 && (
//             <tr>
//               <td colSpan={Object.keys(dataStore[0] || {}).length + 1} class="text-center">
//                 No data to display.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// function App() {
//   const myData = [
//     { id: 1, name: 'Alice', age: 30, city: 'New York', date: new Date('2024-01-15'), score: 85 },
//     { id: 2, name: 'Bob', age: 25, city: 'Los Angeles', date: '2023-12-20', score: 92 },
//     { id: 3, name: 'Charlie', age: 35, city: 'Chicago', date: '2024-02-10', score: 78 },
//     { id: 4, name: 'David', age: 28, city: 'Houston', date: '2024-01-05', score: 88 },
//     { id: 5, name: 'Eve', age: 31, city: 'Phoenix', date: '2023-11-25', score: 95 },
//     { id: 6, name: 'Fiona', age: 27, city: 'Seattle', date: '2024-03-01', score: 81 },
//     { id: 7, name: 'George', age: 40, city: 'Miami', date: '2023-10-10', score: 70 },
//     { id: 8, name: 'Hannah', age: 22, city: 'Denver', date: '2024-02-22', score: 99 },
//   ];

//   return (
//     <div class="container mt-4">
//       <h1>SolidJS Sortable and Filterable Table</h1>
//       <SortableTable data={myData} />
//     </div>
//   );
// }

// export default App;