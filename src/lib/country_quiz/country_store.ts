import { writable } from "svelte/store";
import { browser } from '$app/env';
const storedCountries = browser ? localStorage.getItem("COUNTRY_DATA") : "[]";
export const countries = writable(JSON.parse(storedCountries));
