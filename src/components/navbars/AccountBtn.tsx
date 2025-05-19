import { $locale, isAuthorize, $user, logoutUserLocally, isGuest, isHost } from "src/stores/user.ts";
import { useStore } from "@nanostores/solid";
import { Show } from "solid-js";
import { useTranslations } from "src/i18n/utils.ts";



function AccountBtn() {

    const locale = useStore($locale);
    const user = useStore($user);
    const t = useTranslations(locale());

    const handleLogout = () => logoutUserLocally();
    const changeDir = () => isHost() ? "host" : isGuest() ? "guest" : "error";

    const Fallback = (<div class="text-start text-lg-end">
        <a class="btn btn-outline-secondary btn-sm" href={`/${locale()}/accounts/login`}>
            {t('nav.login')}
        </a>
        <span class="vr mx-2"/>
        <a href={`/${locale()}/accounts/register`} class="btn btn-sm btn-primary"> 
            {t('nav.sign')}
        </a>
    </div>);

    return (<Show when={isAuthorize()} fallback={Fallback}>

        <div class="nav-item dropdown">
            <button type="button" class="btn btn-sm dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                 {user().username.slice(0,8)} <i aria-hidden="true" class="fa fa-user ms-2" />
            </button>
            <ul class="dropdown-menu dropdown-menu-lg-end border-expand txt-small">
                <li>
                    <a class="dropdown-item" href={`/${locale()}/dashboard/${changeDir()}#home`} type="button">
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
                    <a class="dropdown-item" href={`/${locale()}/contact-us`} type="button">
                        <i aria-hidden="true" class="fa fa-question-circle-o me-2" /> {t("nav.help")}
                    </a>
                </li>
                <li>
                    <hr class="dropdown-divider" />
                </li>
                <li>
                    <button onClick={handleLogout} class="dropdown-item" type="button">
                        <i aria-hidden="true" class="fa fa-sign-out" /> {t("nav.logout")}
                    </button>
                </li>
            </ul>
        </div>
    </Show>)
}

export default AccountBtn;
