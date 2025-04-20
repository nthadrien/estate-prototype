import { atom, map } from "nanostores";

export interface RouteType {
    id?: string;
    priceRange: number[];
    type:string;
    priceType: string;
}

export const $urlParameters = map<RouteType>();
export const $urlHashing = atom<string>("#");

export const changeEstateParameters = (p:RouteType) => {
    $urlParameters.set(p);
}

export const changeEstatePage = (a:string) => {
    $urlHashing.set(a);
}