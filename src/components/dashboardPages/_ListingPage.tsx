import { type JSX, For } from "solid-js";

// (Enum: 'apartment', 'house', 'condo', 'room', etc.)

const Fields = {
  name: { fr: "Nom de la propriété" , en: "Property Name"},
  type: { fr:"Type de propriété" , en: "Property Type"}, 
  typeSelect: { fr:[], en: [] }
}

const Amenities = [
  
  { name: "balcony", en: "Patios or balconies" , fr:"Patios ou balcons"},

  { name: "Refrigerator", en: "Réfrigérateur" , fr:"Réfrigérateur"},
  { name: "Washers", en: "washer/dryer" , fr:"laveuse/sécheuse"},
  { name: "dish washer", en: "dish washer" , fr:"lave-vaisselle"},
  { name: "cloth washer", en: "cloth washer" , fr:"lave-linge"},
  { name: "wifi", en: "Shared Wi-Fi" , fr:"Wifi partagé"},
  { name: "clim", en: "air conditioner" , fr:"laveuse/sécheuse"},
  { name: "heater", en: "heater" , fr:"chauffage"},

  { name: "securityCamera", en: "Surveillance camera(s)" , fr:"Caméra(s) de Surveillance"},
  { name: "securityGuard", en: "security guard" , fr:"Agent de sécurité"},
  { name: "securityDog", en: "Dog(s)" , fr:"Chien(s) de garde"},

  { name: "outdoorSpace", en: "Outdoor Space" , fr:"Espace extérieur"},
  { name: "park", en: "parking" , fr:"parking"},
  { name: "pool", en: "Swimming pool" , fr:"piscine"},
  { name: "rooftop garden", en: "rooftop garden" , fr:"jardin sur le toit"},
  { name: "rooftop pool", en: "rooftop pool" , fr:"piscine sur le toit"},
  { name: "garden", en: "garden" , fr:"jardin"},
  { name: "billiard", en: "Billiards Table" , fr:"Table de billard"},

  { name: "spa", en: "spa / Sauna / massage rooms" , fr:"espace spa / Sauna / massage "},
  { name: "gym", en: "gym" , fr:"gym"},

  // gas, hot and cold water

]


function AddBuilding ():JSX.Element {
  return ( <form class="row g-3">

    

  </form>)
}

export function AddProperty () :JSX.Element {

  const lang : "en"|"fr" = window.location.pathname.includes("/en/") ? "en" : "fr";

  return (
    <form class="row g-3 p-3">


      <label class="col-md-6">
        <p class="mb-2">{Fields.name[lang]}</p>
        <input type="text" class="form-control" name="name" required/>
      </label>

      <label class="col-md-6">
        <span class="form-label">{Fields.type[lang]}</span>
        <select name="type" class="form-select" required>

        </select>
      </label>

      <label class="col-md-6">
        <span class="mb-2">{Fields.name[lang]}</span>
        <input type="text" class="form-control" name="description" required/>
      </label>

      <label class="col-md-6">
        <span class="mb-2">{Fields.name[lang]}</span>
        <input type="text" class="form-control" name="country" required/>
      </label>

      <label class="col-md-6">
        <span class="mb-2">{Fields.name[lang]}</span>
        <input type="text" class="form-control" name="city" required/>
      </label>

      <label class="col-md-6">
        <span class="mb-2">{Fields.name[lang]}</span>
        <input type="text" class="form-control" name="zipCode" required/>
      </label>

      <label class="col-md-6">
        <span class="mb-2">{Fields.name[lang]}</span>
        <input type="text" class="form-control" name="address" required/>
      </label>

      <label class="col-md-6">
        <span class="mb-2">{Fields.name[lang]}</span>
        <input type="text" class="form-control" name="geoLocation" required/>
      </label>

      <label class="col-md-6">
        <span class="mb-2">{Fields.name[lang]}</span>
        <input type="text" class="form-control" name="maxGuess" required/>
      </label>

      <label class="col-md-6">
        <span class="mb-2">{Fields.name[lang]}</span>
        <input type="text" class="form-control" name="bedrooms" required/>
      </label>

      <label class="col-md-6">
        <span class="mb-2">{Fields.name[lang]}</span>
        <input type="text" class="form-control" name="bathrooms" required/>
      </label>

      <label class="col-md-6">
        <span class="mb-2">{Fields.name[lang]}</span>
        <input type="text" class="form-control" name="parlours" required/>
      </label>

      <label class="col-md-6">
        <span class="mb-2">{Fields.name[lang]}</span>
        <input type="number" class="form-control" name="basePrice" required/>
      </label>

      <label class="col-md-6">
        <span class="mb-2">{Fields.name[lang]}</span>
        <input type="text" class="form-control" name="pricePerNight" required/>
      </label>

      <label class="col-md-6">
        <span class="mb-2">{Fields.name[lang]}</span>
        <input type="text" class="form-control" name="priceWeekNight" required/>
      </label>

      <label class="col-md-6">
        <span class="mb-2">{Fields.name[lang]}</span>
        <input type="text" class="form-control" name="pricePerMonth" required/>
      </label>

      <label class="col-md-6">
        <span class="mb-2">{Fields.name[lang]}</span>
        <input type="text" class="form-control" name="deposit" required/>
      </label>

      <label class="col-md-6">
        <span class="mb-2">{Fields.name[lang]}</span>
        <input type="number" class="form-control" name="cleaningFee" required/>
      </label>

      <label class="col-md-6">
        <span class="mb-2">{Fields.name[lang]}</span>
        <input type="text" class="form-control" name="status" required/>
      </label>

      <label class="col-md-6">
        <span class="mb-2">{Fields.name[lang]}</span>
        <input type="text" class="form-control" name="lastReinnovations" required/>
      </label>

      <label class="col-md-6">
        <span class="mb-2">{Fields.name[lang]}</span>
        <input type="text" class="form-control" name="age" required/>
      </label>

      <h6 class="col-12">Amenities</h6>


      <label class="col-12">
        <input type="button" class="btn btn-primary" value="add property" />
      </label>

    </form>
  )

}

export default function ListingPage(): JSX.Element {
  return (
    <section>
   
      {/* 
        <section class="row g-3 g-lg-4 row-cols-2 row-cols-lg-3 row-cols-xl-4">
      <For each={[...Array.from(Array(4).keys())]}>

        {item => <div class="col border">

          <div style="height: 20rem;" class="img-fluid img-thumbnail rounded-4">
            <img src="" alt="estate" />
          </div>

          <div class="">
            <span class="">Guest house </span> 
            <span class="-end"> XAF 200 </span>
            <br /> 
            <i class="bi bi-geo-alt"></i> Yaounde

            <p class="col-12 d-flex justify-content-between align-items-center">
              <span>rooms: 3 </span>
              <span>parlor: 3 </span>
              <span>baths: 2 </span>
              <span>size: {item + 12} sqm</span>
            </p>

          </div>

        </div>}

      </For> */}

      <AddProperty />

    </section>
  )
}
