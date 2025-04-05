import { For, Show } from "solid-js";




export default function Bookings() {


  const headings = [ 
    "Guest",
    "Room",
    "Price",
    "Duration",
    "Status",
    "Day",
    "transaction state"
  ];

  return (<>

  <nav class="nav nav-underline">

    <button class="btn nav-item active">
      all
    </button>

    <button class="btn nav-item">
      Pending
    </button>

    <button class="btn nav-item">
      Old
    </button>

  </nav>

  
  
  </>)
}
