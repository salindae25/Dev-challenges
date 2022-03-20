import { writable } from "svelte/store";
import { browser } from '$app/env';
export const countries = writable([]);

export async function loadCountries() {
    const localData = localStorage.getItem("COUNTRY_DATA")
    if (localData && JSON.parse(localData)) {
        countries.set(JSON.parse(localData))
        return
    }
    const response = await fetch("https://restcountries.com/v2/all?fields=name,capital,flags");
    const data = await response.json();
    localStorage.setItem("COUNTRY_DATA", JSON.stringify(data));
    countries.set(data)
    return
}
