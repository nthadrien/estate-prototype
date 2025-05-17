
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
const PropertyDetails = lazy(()=> import("@components/dashboardPages/_PropertyDetails"));

export type pageType= {
    name: string;
    location: string;
    icon: string;
}

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


    return (<section class="w-100 p-3">
        <AuthContextProvider>
            <Switch>
                <Match when={currentPage() == "#home" }>
                    <Home />
                </Match>

                <Match when={currentPage() == "#properties" }>
                    <Properties />
                </Match>
                
                <Match when={currentPage() == "#settings" }>
                    <Settings />
                </Match>

                <Match when={currentPage().includes("#property") }>
                    <PropertyDetails />
                </Match>

                <Match when={currentPage() == "#inbox"}>
                    <Inbox />
                </Match>
            </Switch>
        </AuthContextProvider>
    </section>);
}