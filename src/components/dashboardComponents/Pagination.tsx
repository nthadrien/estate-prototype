

export default function Pagination() {
  return (
    <section class="px-3 nav align-items-center justify-content-evenly justify-content-lg-between gap-3 text-muted">

        <p>Showing 3 out of 45 users</p>

        <p class="">
             {[1,2,3,4,5,6,7,8].map( item => <button class={`btn mx-1 rounded-circle ${item == 3 && "btn-outline-secondary"}`}>
                 {item}
             </button>)}
        </p>
    </section>
  )
}
