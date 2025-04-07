import ResponsiveTable from "@components/tables/ResponsiveTable";
import reservationData from "src/api/reservation.ts";



const tableOptions = [
  {
    icon: "bookmark" ,
    name: "see transaction info"
  },
  {
    icon: "check-list",
    name:"accept"
  }

];



export default function Bookings() {

  const data = reservationData;

  return (<>

  <nav class="nav nav-underline">

    <a class="nav-item active">
      all
    </a>

    <a class="nav-item">
      Pending
    </a>

    <a class="nav-item">
      Old
    </a>

  </nav>


  <ResponsiveTable list={reservationData} options={tableOptions} idField={"reservation_id"} />

  
  
  </>)
}
