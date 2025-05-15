

import { useTranslations } from "src/i18n/utils.ts";
import { useStore } from "@nanostores/solid";
import { $locale } from "src/stores/user.ts";
import { createSignal, For , onCleanup, onMount, type JSX } from "solid-js";


type LinkType = {
    name: string;
    link: string;
}

export default function BreadCrumb():JSX.Element {

    const locale = useStore($locale)
    const t = useTranslations(locale());
    const [ goPath, setGOPath ] = createSignal<LinkType[]>([])

    function changedHash(e:HashChangeEvent) {
        const urlObject = new URL(e.newURL);
        const breadCrumbs:LinkType[] = [];
        // Split the pathname into sections
        const pathSections = urlObject.pathname.split('/').filter(section => !["","fr","en","host","client","admin"].includes(section));
        // Create breadcrumbs for each path section
        pathSections.forEach((section, index) => {
            const pathLink = '/' + pathSections.slice(0, index + 1).join('/');
            breadCrumbs.push({
                name: decodeURIComponent(section), link: pathLink
            });
        });

        // Handle hash
        if (urlObject.hash) {
            const hash = decodeURIComponent(urlObject.hash.substring(1)); // Remove the '#' character
            breadCrumbs.push({
                name: `${hash.replaceAll("/","")}`,
                link: urlObject.origin + urlObject.pathname + urlObject.search + urlObject.hash
            });
        }
    
        // Handle search queries
        if (urlObject.search) {
            const queries = new URLSearchParams(urlObject.search);
            queries.forEach((value, key) => {
                breadCrumbs.push({
                    name: `${decodeURIComponent(key)}: ${decodeURIComponent(value)}`,
                    link: urlObject.origin + urlObject.pathname + `?${urlObject.search}`
                });
            });
        }
        setGOPath(breadCrumbs);
    }

    const mountPath = () => {
        const breadCrumbs:LinkType[] = [];
        // Split the pathname into sections
        const pathSections:string[] = window.location.pathname.split('/').filter(section => !["","dashboard","fr","en","host","client","admin"].includes(section));
        pathSections.forEach((section, index) => {
            const pathLink = '/' + pathSections.slice(0, index + 1).join('/');
            breadCrumbs.push({
                name: decodeURIComponent(section),
                link: pathLink
            });
        });
        setGOPath(breadCrumbs)
    }
    
    onMount(()=>{
        mountPath();
        window.addEventListener("hashchange", changedHash );
    });

    onCleanup(()=>{
        window.removeEventListener("hashchange", changedHash );
    });

    return (
    <ol aria-label="breadcrumb" class="breadcrumb text-capitalize m-auto">
        <li class="breadcrumb-item">
           <a href="#">
            <i class="fa fa-home me-2" />
            {t("nav.home")}
           </a>
        </li>
        <For each={goPath()}>
            {item => <li class="breadcrumb-item active" aria-current="page">
                <a href={`/${locale()}${item.link}`}>{item.name}</a>
            </li>}
        </For>
    </ol>
    )
}
