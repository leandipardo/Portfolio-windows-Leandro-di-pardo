const d = document,
w=window;
import menuSlide from "./menu.js";
import smartphone from "./smartphone.js";
import explicacion from "./explicacion.js";
import time, { intervaloTiempo } from "./time.js";
import abrirMenuIzq from "./menu_desplegable.js";
import sepia from "./sepia.js";
import darkMode from "./darkmode.js";
import cartelInicio from "./cartelInicio.js";
import comportamientoVentanas from "./controlVentana.js";
import botones from "./botonesVentana.js";
import chrome from "./chromeBtn.js";
import cargaVideo from "./cargaVideo.js";
import traducir, { isEnglish } from "./traduccion.js";
import brillo, { volumen } from "./brillo_volumen.js";
import newsSection from "./noticias.js";
d.addEventListener("DOMContentLoaded", (e)=>{

    cargaVideo("source-video","(min-width: 720px)","light");
    cartelInicio(".apagado");
    isEnglish();
    menuSlide(".button-menuu",".menu",".ignore",".exe","#midMenuTranslate",".mid-section-container");
    abrirMenuIzq(".menu-desplegable", ".menu-derecho",".ignore2",".exe2");
    time();
    intervaloTiempo();
    sepia(".sepia-button");
    darkMode(".darkmode-button");
    explicacion("#texto-ayuda");
    comportamientoVentanas(".portfolio","#dispositivos","#camara");
    botones("ventana-abierta");
    chrome(".chromebtn");
    traducir();
    brillo();
    volumen();
    newsSection();
});
d.addEventListener("mousewheel", (r)=>{
    smartphone(r);
})

console.log('%cGracias por visitar mi portfolio. Espero que te guste lo que ves.🫡', 'background-color:#3e3742;border-radius:40px;margin:20px;padding:10px;font-family: "Segoe UI";font-size:1rem; color: white;');
