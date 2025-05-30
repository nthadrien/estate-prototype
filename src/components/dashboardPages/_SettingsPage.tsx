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
        <h6>{t("step1")}</h6>
        <p>Information about you. Our Policy rspects your privacy</p>
      </aside>



      <aside class="col-lg-8 row g-3">

        <div class="col-12 col-md-6 ">
          <img src="/images/pp/man01.jpg" class="me-3 rounded" height={128} width={128} alt="pp" />
        </div>
          

          <label class="form-label col-md-6">
            <input type="file" name="pp" class="opacity-0 form-control" />
            <input type="file" class="btn btn-sm form-control" value="Change Picture" required/>
            <p class="mt-2" >jpg, jepg, svg , ico et png</p>
          </label>

        
        <label class="form-floating  col-12 col-md-6">
          <input class="form-control mt-2" type="text" name="name" placeholder=".form-control-sm" required/>
          <span class="label">{t("name")}(s)</span>
        </label>

        <label class="form-floating col-12 col-md-6">
          <select name="gender" class="form-control" required >
              <option value="M">Male </option>
              <option value="F">Female </option>
          </select>
          <span class="label">{t("gender")}</span>
        </label>

          <label class="form-label col-12 col-md-6">
            Phone number
            <input class="form-control mt-2" type="text" name="phone" placeholder="+237 XXXXXXXXX"  required/>
          </label>

          <label class="form-label col-12 col-md-6">
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
          <h6>{t("step2")}</h6>
          <p>
            Details about your subscription plan and the othr informations only proper to the type of account you have
          </p>

        </aside>


        <aside class="col-md-8 nav gap-2 gap-lg-3">

          <div class="form-label col-12 col-md-6">
            Country
            <input class="form-control mt-2" type="email" name="country" placeholder="Your can still be your personal email" required/>
          </div>

          <div class="form-label col-12 col-md-6">
            Town / CIty
            <input class="form-control mt-2" type="text" name="town" placeholder="Your can still be your personal email" required/>
          </div>


          <div class="form-label col-12 col-md-6">
            Government-issued ID for the business owner 
            <input class="form-control mt-2" type="text" name="town" placeholder="Your can still be your personal email" required/>
          </div>

          <label class="form-label col-12 col-md-6">
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

        <aside class="col-md-4 py-2">

          <h6>Delete My Account</h6>
          <p>
            <strong>NB: </strong>This is a none rversible procedure. 
            All your data (transactions, reviwews and so on) 
            and personal information will be lost without restoration and 
            any subscribe plan still active will be cancelld without refund. 
            Please read our customrs policy here <a href={`/${locale}/terms-and-conditions`}>{t("more")}</a> 
          </p>

        </aside>

        <aside class="col-md-8 d-flex flex-column gap-2 gap-lg-3 py-4">
         
          <div>
            <button class="btn btn-sm btn-danger">
              {t("account.del")}
            </button>
          </div>

        </aside>

      </section>
    </>
  )
}
