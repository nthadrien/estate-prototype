import { $locale, isAuthorize, $user } from "src/stores/user.ts";
import { useStore } from "@nanostores/solid";
import { Show } from "solid-js";
import { useTranslations } from "src/i18n/utils.ts";



function AccountBtn() {

    const locale = useStore($locale);
    const user = useStore($user);
    const t = useTranslations(locale());

    const Fallback = (<>
        <a class="nav-link p-2" href={`/${$locale.get()}/accounts/login`}>
            {t('nav.login')}
        </a>
        <span class="vr"/>
        <a href={`/${$locale.get()}/accounts/register`} class="nav-link p-2"> 
            {t('nav.sign')}
        </a>
    </>);

    return (<Show when={isAuthorize()} fallback={Fallback}>

        <div class="nav-item dropdown text-capitalize">
            <button type="button" class="btn btn-sm dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                 {user().username.slice(0,8)} <i aria-hidden="true" class="fa fa-user ms-2"></i>
            </button>
            <ul class="dropdown-menu dropdown-menu-lg-end border-expand txt-small">
                <li>
                    <a class="dropdown-item" href={`/${locale()}/book`} type="button">
                        <i aria-hidden="true" class="fa fa-cube me-2" /> {t('dashb.name')}
                    </a>
                </li>
                <li>
                    <hr class="dropdown-divider" />
                </li>
                <li>
                    <a class="dropdown-item" href={`/${locale()}/book`} type="button">
                        <i aria-hidden="true" class="fa fa-bookmark me-2" /> {t('nav.booked')}
                    </a>
                </li>
                <li>
                    <a class="dropdown-item" href={`/${locale()}/book`} type="button">
                        <i aria-hidden="true" class="fa fa-question-circle-o me-2" /> {t("nav.help")}
                    </a>
                </li>
                <li>
                    <hr class="dropdown-divider" />
                </li>
                <li>
                    <a class="dropdown-item" href={`/${locale()}/book`} type="button">
                        <i aria-hidden="true" class="fa fa-sign-out" /> {t("nav.logout")}
                    </a>
                </li>
            </ul>
        </div>
    </Show>)
}

export default AccountBtn;
