import { useTranslations } from "src/i18n/utils.ts";
import { useAuthCtx } from "src/context/authContext.tsx";
import {createSignal ,For, onMount, Switch, Match ,type JSX} from "solid-js";



const subPages = [
  {en:"Personal",fr:"Personnelles",icon:"person-bounding-box"},
  {en:"Profile",fr:"Profil",icon:"file-person"},
  {en:"Notification Settings",fr:"Paramètres de notification",icon:"exclamation-square"},
  {en:"Payment/Subscription Information",fr:"Informations de paiement/abonnement",icon:"credit-card"},
];

export default function SettingsPage() : JSX.Element {


  const [{ user, locale }] = useAuthCtx();
  const t = useTranslations(locale());

  const handleSumbit = (e:SubmitEvent) => {
    e.preventDefault();
  }

  const [ currentRoute , setCurrentRoute ] = createSignal<string>("Personal Information");

  const lang = () => window.location.pathname.includes("/en/") ? "en" :"fr";

  return (<>
    <section class="row g-3 g-lg-4 p-lg-3 p-2">

      <aside class="col-lg-4 py-2">
        <h6>Personal Information</h6>
        <p>Information about you. Our Policy rspects your privacy</p>
      </aside>



      <aside class="col-lg-8 nav gap-2 gap-lg-3">

          <img src="/images/pp/man01.jpg" class="me-3 col-12 col-md-3 col-xxl-2 rounded" height={128} width={128} alt="pp" />

          <label class="form-label col-md-6">
            <input type="file" name="pp" class="opacity-0 form-control" />
            <input type="file" class="btn btn-sm form-control" value="Change Picture" required/>
            <p class="mt-2" >jpg, jepg, svg , ico et png</p>
          </label>

        
        <label class="form-label col-12 col-md-5">
          {t("name")}(s)
          <input class="form-control mt-2" type="text" name="name" placeholder=".form-control-sm" required/>
        </label>

        <label class="form-label col-12 col-md-5">
          {t("gender")}
          <select name="gender" class="form-control mt-2" required >
              <option value="M">Male </option>
              <option value="F">Female </option>
          </select>
        </label>

          <label class="form-label col-12 col-md-5">
            Phone number
            <input class="form-control mt-2" type="text" name="phone" placeholder="+237 XXXXXXXXX"  required/>
          </label>

          <label class="form-label col-12 col-md-5">
            Email
            <input class="form-control mt-2" type="email" placeholder="validEmail@mail.com" required/>
          </label>

          <label class="form-label col-12 col-md-10">
            Description
            <textarea class="form-control mt-2" name="decs" rows={2}></textarea>
          </label>

          <div class="col-12">
            <button class="btn btn-sm btn-primary">
              {t("save")}
            </button>
          </div>

        </aside>

        <aside class="col-md-4 py-2">
          <h6>Account Details</h6>
          <p>
            Details about your subscription plan and the othr informations only proper to the type of account you have
          </p>

        </aside>


        <aside class="col-md-8 nav gap-2 gap-lg-3">

          <div class="form-label col-12 col-md-5">
            Country
            <input class="form-control mt-2" type="email" name="country" placeholder="Your can still be your personal email" required/>
          </div>

          <div class="form-label col-12 col-md-5">
            Town / CIty
            <input class="form-control mt-2" type="text" name="town" placeholder="Your can still be your personal email" required/>
          </div>


          <div class="form-label col-12 col-md-5">
            Government-issued ID for the business owner 
            <input class="form-control mt-2" type="text" name="town" placeholder="Your can still be your personal email" required/>
          </div>

          <label class="form-label col-12 col-md-5">
            Business Logo / Picture
            <input class="form-control mt-2" type="file" name="businessLogo" placeholder=".form-control-sm" required/>
          </label>


          <div class="col-12">
            <button class="btn btn-sm btn-primary">
              {t("save")}
            </button>
          </div>

        </aside>



        <aside class="col-md-4 py-2">

          <h6>Account status / Account vrification status</h6>

          <p>
            Plase feel free to contact us if you encounter 
            any issues and our tam will get to you as soon as possible.
          </p>

        </aside>


        <aside class="col-md-8 d-flex flex-column gap-2 gap-lg-3">

          <label class="form-label">
            current plan
            <input class="form-control mt-2" value="basic" type="text" name="plan" placeholder=".form-control-sm" disabled/>
          </label>

          <p>
            expiry date of th currnt plan : 23rd july 2026
          </p>

          <div class="col-12">
            <button class="btn btn-sm btn-primary">
              {t("more")}
            </button>
          </div>


          <div>
            <i class="bi bi-check-circle-fill me-3 text-success"> Account Verified </i>
            <span class="vr mx-2" />
            <i class="bi bi-x-circle me-3 text-danger"> Account Not Verified </i>
          </div>

        </aside>


      </section>
    </>
  )
}
