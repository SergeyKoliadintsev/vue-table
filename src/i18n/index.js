import en from "./en.json";
import es from "./es.json";

export const defaultLocale = localStorage.getItem("lang") || "en";

export const languages = {
  en,
  es,
};
