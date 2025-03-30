
import { createEffect, createSignal, lazy, Match, onCleanup, Switch, type JSX } from "solid-js";
import DashBoardLayout from "@layouts/DashboardLayout";
import ErrorPage from "@components/redirects/ErrorPage";


// pages:
const Settings = lazy(() => import("@components/dashboardPages/_SettingsPage.tsx"));
const Listings = lazy(() => import("@components/dashboardPages/_ListingPage.tsx"));
const Inbox = lazy(()=> import("@components/dashboardPages/_InboxPage.tsx"));
const Reports = lazy(()=> import("@components/dashboardPages/_ReportsPage.tsx"));
const Home = lazy(() => import("@components/dashboardPages/_HostPage"));
const Bookings = lazy(() => import("@components/dashboardPages/_Bookings"));


interface Props {
    lang: string;
}

export default function IndexPage (props: Props):JSX.Element {

    const [ currentRoute, setCurrentRoute ] = createSignal<string>("#home");

    const changePage = () => {
        const newLocation = window.location.hash ;
        setCurrentRoute(newLocation);
    }

    createEffect(()=>{
        window.addEventListener('hashchange', (e:HashChangeEvent) => changePage());
        onCleanup( ()=> {
            window.removeEventListener('hashchange', (e:HashChangeEvent) => changePage());
        });
    });

    const pages = [
        {
            en: "Dasboard",
            fr: "Dashboard",
            link: `#home`,
            icon: "columns-gap"
        },
        {
            en: "Estates",
            fr: "Immobilier",
            link: `#estates`,
            icon: "journal-bookmark"
        },
        {
            en: "Calendar",
            fr: "Calendrier",
            link: `#calender`,
            icon: "calendar4-week"
        },
        {
            en: "Reports",
            fr: "Rapports",
            link: `#reports`,
            icon: "easel2"
        },
        {
            en: "Inbox",
            fr: "Boîte aux lettres",
            link: `#inbox`,
            icon: "inbox"
        },
        {
            en: "Settings",
            fr: "Paramètres",
            link: `#settings`,
            icon: "wrench-adjustable"
        },
    ];

    return (<DashBoardLayout  pages={pages}  lang={props.lang} currentPage={currentRoute} >
        <Switch fallback={<ErrorPage code={404} />}>
            <Match when={ currentRoute() === pages[0].link }>
                <Home />
            </Match>
            <Match when={ currentRoute() === pages[1].link }>
                <Listings />
            </Match>
            <Match when={ currentRoute() === pages[2].link }>
                <Bookings />
            </Match>
            <Match when={ currentRoute() === pages[3].link }>
                <Reports />
            </Match>
            <Match when={ currentRoute() === pages[4].link }>
                <Inbox />
            </Match>
            <Match when={ currentRoute() === pages[5].link }>
                <Settings />
            </Match>
        </Switch>
    </DashBoardLayout>)
}
