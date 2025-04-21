
import { type JSX } from 'solid-js'

const SearchForm = ():JSX.Element => {
  return (
    <form class="container-sm border input-group input-group-sm has-validation mx-auto p-0">

    <div class="form-floating">
        <input type="text" class="form-control border-0" id="country" placeholder="Username" required />
        <label for="country">Country</label>
    </div>

    <div class="form-floating">
        <input type="text" class="form-control border-0" id="city" placeholder="Username" required />
        <label for="city">city/town</label>
    </div>

    <div class="form-floating">
        <select class="form-select border-0" id="floatingSelectGrid">
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
        <label for="floatingSelectGrid">Works with selects</label>
    </div>

    <button class="btn btn-outline-secondary" type="button" id="button-addon2"> 
        search
        <i class="fa fa-search"></i>
    </button>

</form>
  )
}

export default SearchForm
