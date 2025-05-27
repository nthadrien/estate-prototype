
import { createEffect, createSignal, For, lazy, Match, onCleanup, onMount, Suspense, Switch, type JSX } from "solid-js";

import ErrorPage from "@components/redirects/ErrorPage";

import { AuthContextProvider, useAuthCtx } from "src/context/authContext.tsx";
import Home from "@components/dashboardPages/_HostPage"

// pages:
const Settings = lazy(() => import("@components/dashboardPages/_SettingsPage.tsx"));
const Listings = lazy(() => import("@components/dashboardPages/_ListingPage.tsx"));
const Inbox = lazy(()=> import("@components/dashboardPages/_InboxPage.tsx"));
const Reports = lazy(()=> import("@components/dashboardPages/_ReportsPage.tsx"));
const Bookings = lazy(() => import("@components/dashboardPages/_Bookings"));
const Properties = lazy(()=>import("@components/dashboardPages/_Properties"));
const Property = lazy(()=> import("@components/dashboardPages/_Property"));
const EstatePage = lazy(()=> import("@components/dashboardPages/EstatePage.tsx"));

export type pageType= {
    name: string;
    location: string;
    icon: string;
}

type ParamsType = { fid: string; uid:string }

interface Props {
    lang: string;
    pages: pageType[];
}

export default function HostIndexPage (props:Props):JSX.Element {

    const [ currentPage , setCurrentPage ] = createSignal<string>("");

    const changeHash = (e:HashChangeEvent) => {
        const linked = new URL(e.newURL)
        setCurrentPage(linked.hash);
    }

    onMount(()=>{
        const lot:string = window.location.hash;
        setCurrentPage(lot);
        window.addEventListener("hashchange", changeHash );
    });

    onCleanup(() => {
        window.removeEventListener("hashchange", changeHash );
    })


    return (<section class="w-100 p-2">
        <AuthContextProvider>
            <Switch>
                <Match when={currentPage() == "#home" }>
                    <Home />
                </Match>

                <Match when={currentPage() == "#properties" }>
                    <Properties />
                </Match>

                <Match when={currentPage() == "#property" }>
                    <Property />
                </Match>

                <Match when={currentPage() == "#estate" }>
                    <EstatePage />
                </Match>
                
                <Match when={currentPage() == "#settings" }>
                    <Settings />
                </Match>

                <Match when={currentPage() == "#inbox"}>
                    <Inbox />
                </Match>
            </Switch>
        </AuthContextProvider>
    </section>);
}