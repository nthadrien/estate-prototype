
import { createEffect, createSignal, For, lazy, Match, onCleanup, Suspense, Switch, type JSX } from "solid-js";

import ErrorPage from "@components/redirects/ErrorPage";
import DashboardHeader from "@components/headers/DashboardHeader";

// pages:
const Settings = lazy(() => import("@components/dashboardPages/_SettingsPage.tsx"));
const Listings = lazy(() => import("@components/dashboardPages/_ListingPage.tsx"));
const Inbox = lazy(()=> import("@components/dashboardPages/_InboxPage.tsx"));
const Reports = lazy(()=> import("@components/dashboardPages/_ReportsPage.tsx"));
const Home = lazy(() => import("@components/dashboardPages/_HostPage"));
const Bookings = lazy(() => import("@components/dashboardPages/_Bookings"));

export type pageType= {
    en: string;
    fr: string;
    location: string;
    icon: string;
}

interface Props {
    lang: string;
}

const hostpages = [
    {
        en: "Dasboard",
        fr: "Dashboard",
        location: `#/home`,
        icon: "columns-gap"
    },
    {
        en: "Estates",
        fr: "Immobilier",
        location: `#/estates`,
        icon: "journal-bookmark"
    },
    {
        en: "Bookings",
        fr: "Réservations",
        location: `#/bookings`,
        icon: "calendar4-week"
    },
    {
        en: "Reports",
        fr: "Rapports",
        location: `#reports`,
        icon: "easel2"
    },
    {
        en: "Inbox",
        fr: "Boîte aux lettres",
        location: `#/inbox`,
        icon: "inbox"
    },
    {
        en: "Settings",
        fr: "Paramètres",
        location: `#/settings`,
        icon: "wrench-adjustable"
    },
];

export default function IndexPage (props:Props):JSX.Element {

    const [currentRoute , setCurrentRoute ] = createSignal<string>("#/bookings");

    const hashChanged = () => {
        const hashing = window.location.hash ?? "#/bookings";
        setCurrentRoute(hashing);
    }

    const lang = props.lang == "en"?"en": "fr";

    createEffect(()=>{
        window.addEventListener("hashchange", () => hashChanged() );
        onCleanup ( ()=>{
            window.removeEventListener("hashchange", () => hashChanged() );
        });
    });

    return (<main class="d-flex flex-column flex-md-row vh-100 overflow-hidden">

        <nav class="col-12 col-md-3 col-lg-2">
            <section class="p-2">
                <h4 class="my-md-4">Board Menu</h4>
                <For each={hostpages}>
                    { page => <a 
                        class={`nav-link p-1 p-md-2 rounded-4 ${ currentRoute().includes(page.location) && "bg-primary-subtle border border-primary-subtle fw-bold"}`} 
                        href={page.location} 
                        target="_self"
                    >
                        <i class={`bi bi-${page.icon} me-3`}></i>
                        <span class="d-none d-md-inline">{page[lang]}</span>
                    </a>}
                </For>
            </section>
        </nav>

        <section class="col-12 col-md-9 col-lg-10 overflow-y-auto overflow-x-hidden h-100">
            <DashboardHeader />
            <Suspense >
                <Switch fallback={<ErrorPage code={404} />}>
                    <Match when={ currentRoute() ===  hostpages[0].location }>
                        <Home />
                    </Match>

                    <Match when={ currentRoute() === hostpages[1].location}>
                        <Listings />
                    </Match>

                    <Match when={ currentRoute() === hostpages[2].location }>
                        <Bookings />
                    </Match>

                    <Match when={ currentRoute() === hostpages[3].location }>
                        <Reports />
                    </Match>

                    <Match when={ currentRoute() ===  hostpages[4].location }>
                        <Inbox />
                    </Match>

                    <Match when={ currentRoute() === hostpages[5].location}>
                        <Settings />
                    </Match>

                </Switch>
            </Suspense>
        </section>
    </main>);
}
