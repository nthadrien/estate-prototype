import {createSignal ,For, onMount, Switch, Match ,type JSX} from "solid-js";



const subPages = [
  
  {en:"Personal",fr:"Personnelles",icon:"person-bounding-box"},
  {en:"Profile",fr:"Profil",icon:"file-person"},
  {en:"Notification Settings",fr:"Paramètres de notification",icon:"exclamation-square"},
  {en:"Payment/Subscription Information",fr:"Informations de paiement/abonnement",icon:"credit-card"},
]



export default function SettingsPage() : JSX.Element {

  const handleSumbit = (e:SubmitEvent) => {
    e.preventDefault();
  }

  const [ currentRoute , setCurrentRoute ] = createSignal<string>("Personal Information");

  const lang = () => window.location.pathname.includes("/en/") ? "en" :"fr";

  return (
    <>
      <nav class="nav nav-underline gap-4" onSubmit={handleSumbit}>
        
        <For each={subPages}>
          {item => <button onClick={() => setCurrentRoute(item.en)} class={`nav-link p-1 p-lg-2 ${ item.en == currentRoute() && "active"}`}> 
            <i class={`bi bi-${item.icon} text-primary me-2`}></i>
            <span class="d-none d-md-inline">{item[lang()]}</span>
          </button>}
        </For>

      </nav>

      <section class="p-2 p-lg-3">

        <header class="nav gap-2 justify-content-between align-items-center py-3">
          <h6>{currentRoute()}</h6>

          <small>
            <i class="bi bi-check-circle-fill me-3 text-success"> Account Verified </i>
            <span class="vr mx-2" />
            <i class="bi bi-x-circle me-3 text-danger"> Account Not Verified </i>
          </small>
        </header>


        <div class="row g-3">

          <div class="form-label col-md-6">
            Name(s)
            <input class="form-control mt-2" type="text" name="names" placeholder=".form-control-sm" required/>
          </div>

          <label class="form-label col-md-6">
            Phone number(s)
            <input class="form-control mt-2" type="text" name="phone" placeholder="+237 XXXXXXXXX"  required/>
          </label>

          <label class="form-label col-md-6">
            Email
            <input class="form-control mt-2" type="email" placeholder="validEmail@mail.com" required/>
          </label>

          <label class="form-label col-md-6">
            ID / Passport #
            <input class="form-control mt-2" type="text" name="idNumber" placeholder=".form-control-sm" required/>
          </label>

          <label class="form-label col-md-6">
            Type
            <input class="form-control mt-2" type="text" name="idType" placeholder="passport or ID" required/>
          </label>

          <label class="form-label col-md-6">
            Profile Picture
            <input class="form-control mt-2" type="file" placeholder=".form-control-sm" required/>
          </label>

          <label class="form-label col-md-6">
            ID / Passport Picture
            <input class="form-control mt-2" type="file" placeholder=".form-control-sm" required/>
          </label>


          <h6>Other Informations</h6>


          <p>
            <span>{ lang() !== "en" ? "Avez vous un casier judiciaire" : "Do you have a criminal record?"}</span>

            <label class="form-label mx-2">
                <input class="form-check-input" type="radio" name="ciminalRecord" value={"yes"} required/> yes
            </label>

            <label class="form-label mx-2">
                <input class="form-check-input" type="radio" name="ciminalRecord" value={"no"} /> no
            </label>
          </p>

          <p>
            <span>{ lang() !== "en" ? "Etes vous un arnaqueur (escroc)?" : "Are you a scammer?"}</span>

            <label class="form-label mx-2">
                <input class="form-check-input" type="radio" name="scammer" value={"yes"} required/> yes
            </label>

            <label class="form-label mx-2">
                <input class="form-check-input" type="radio" name="scammer" value={"no"} /> no
            </label>
          </p>


        <h6 class="border-bottom">Profil / Business </h6>

        <div class="form-label col-md-6">
          Business Name
          <input class="form-control mt-2" type="text" name="username" placeholder=".form-control-sm" required/>
        </div>

        <div class="form-label col-md-6">
          Your Business Address
          <input class="form-control mt-2" type="text" name="address" placeholder=".form-control-sm" required/>
        </div>

        <div class="form-label col-md-6">
          Your Business Phone Number
          <input class="form-control mt-2" type="text" name="businessPhone" placeholder=".form-control-sm" required/>
        </div>

        <div class="form-label col-md-6">
          Email
          <input class="form-control mt-2" type="email" name="businessMail" placeholder="Your can still be your personal email" required/>
        </div>


        <div class="form-label col-md-6">
          Country
          <input class="form-control mt-2" type="email" name="country" placeholder="Your can still be your personal email" required/>
        </div>

        <div class="form-label col-md-6">
          Town / CIty
          <input class="form-control mt-2" type="text" name="town" placeholder="Your can still be your personal email" required/>
        </div>

        <div class="form-label col-md-6">
          Government-issued ID for the business owner 
          <input class="form-control mt-2" type="text" name="town" placeholder="Your can still be your personal email" required/>
        </div>

        <label class="form-label col-md-6">
          Business Logo / Picture
          <input class="form-control mt-2" type="file" name="businessLogo" placeholder=".form-control-sm" required/>
        </label>


        <label class="col-md-6 form-check form-switch">
          <input class="form-check-input" type="checkbox" role="switch" name="readTerms" required/>
          Yes I read the terms and Conditions
        </label>

        <label class="col-md-6 form-check form-switch">
          <input class="form-check-input" type="checkbox" role="switch" name="adhere" required/>
          Yes I filled In the right Infomations
        </label>



        <h6>Notifications</h6>


        <p>
            <span>{ lang() !== "en" ? "WIll you like to recieve mails from us?" : "Souhaitez-vous recevoir des mails de notre part ?"}</span>

            <label class="form-label mx-2">
                <input class="form-check-input" type="radio" name="scammer" value={"yes"} required/> yes
            </label>

            <label class="form-label mx-2">
                <input class="form-check-input" type="radio" name="scammer" value={"no"} /> no
            </label>
          </p>

          <h6>Payment Info</h6>

          <p>
            Please choose a bank 
          </p>

          <p>
            Account number:
          </p>


      </div>




      </section>
    </>
  )
}
