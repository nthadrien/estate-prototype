


import { useTranslations } from "src/i18n/utils.ts";
import { languages } from "src/i18n/ui.ts";
import { type JSX } from "solid-js";
import { useStore } from "@nanostores/solid";
import { $locale } from "src/stores/user.ts";


export default function LocaleSwitcher ():JSX.Element {
    const locale = useStore($locale)
    const t = useTranslations(locale());

    const changeLocale =  (a:string) => {
        if ( locale() == a ) return;
        window.location.assign(window.location.href.replace(`/${locale()}/`,`/${a}/`) );
    }

    return (<div class="btn-group">
        <button type="button" class="nav-link text-uppercase dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            {t("lang").slice(0,2)}
        </button>
        <ul class="dropdown-menu dropdown-menu-end border-0 border border-primary">
            {Object.entries(languages).map(([lang, label]) => ( <button onClick={_ => changeLocale(lang)} class={`dropdown-item ${locale() == lang && "active"}`}>
                {label}
            </button>
            ))}
        </ul>
    </div>);
}