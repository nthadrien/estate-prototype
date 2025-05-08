
import { createEffect, createSignal, For, lazy, Match, onCleanup, Suspense, Switch, type JSX } from "solid-js";

import ErrorPage from "@components/redirects/ErrorPage";
import { useStore } from "@nanostores/solid";
import { $locale } from "src/stores/user.ts";

// pages:
const Settings = lazy(() => import("@components/dashboardPages/_SettingsPage.tsx"));
const Listings = lazy(() => import("@components/dashboardPages/_ListingPage.tsx"));
const Inbox = lazy(()=> import("@components/dashboardPages/_InboxPage.tsx"));
const Reports = lazy(()=> import("@components/dashboardPages/_ReportsPage.tsx"));
const Home = lazy(() => import("@components/dashboardPages/_HostPage"));
const Bookings = lazy(() => import("@components/dashboardPages/_Bookings"));

export type pageType= {
    name: string;
    location: string;
    icon: string;
}

interface Props {
    lang: string;
    pages: pageType[];
}

export default function IndexPage (props:Props):JSX.Element {

    const currentRoute = useStore($locale)


    return (<section class="w-100 p-3 p-xl-4">

        <h3>Hey Brother Sup  {currentRoute()}</h3>

</section>);
}