import { $locale } from "src/stores/user.ts";
import { useStore } from "@nanostores/solid";
import { useTranslations, getLangFromUrl } from "src/i18n/utils.ts";



function AccountBtn() {

    const t = useTranslations($locale.get());

    return (<>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarAccountContent" aria-controls="navbarAccountContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="fa fa-user"></span>
        </button>

        <aside class="collapse navbar-collapse gap-2 justify-content-center justify-content-lg-end bg-body p-2" id="navbarAccountContent">

            <a class="nav-link" href={`/${$locale.get()}/accounts/login`}>
                {t('nav.login')}
            </a>

            <a href={`/${$locale.get()}/accounts/register`} class="btn btn-primary btn-sm rounded-4 mx-1"> 
                 {t('nav.sign')}
            </a>
        
        </aside>
    </>)
}

export default AccountBtn;
