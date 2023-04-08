// Importar las librerías 
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
//import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";

// Referencias a los archivos de los idiomas con las traducciones
import { languageCA } from './lang/ca/translate';
import { languageDE } from './lang/de/translate';
import { languageEN } from './lang/en/translate';
import { languageES } from './lang/es/translate';

// Establecer los archivos de traducciones con el idioma
const resources = {
    // ca: { translation: { "welcome": "Benvingut@", "title": "Català"}}, 
    // de: { translation: { "welcome": "Willkommen", "title": "Germany"}}, 
    // en: { translation: { "welcome": "Welcome", "title": "English"}}, 
    // es: { translation: { "welcome": "Bienvenid@", "title": "Español"}}

    ca: { translation: languageCA },
    de: { translation: languageDE },
    en: { translation: languageEN },
    es: { translation: languageES }
}

// Llamar a los métodos de la librería i18next, para establecer el idioma por defecto y el idioma de respaldo
i18n.use(LanguageDetector).use(initReactI18next).init({
    resources, lgn: 'ca', fallbackLng: 'es', interpolation: { escapeValue: false }
});

// Establecer el valor de latributo 'lang' de HTML al idioma seleccioado poe el usuario
document.documentElement.lang = i18n.language;


export default i18n;