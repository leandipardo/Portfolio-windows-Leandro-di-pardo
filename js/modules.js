const d = document,
w=window;
import menuSlide from "./menu.js";
import smartphone from "./smartphone.js";
import explicacion from "./explicacion.js";
import time from "./time.js";
import abrirMenuIzq from "./menu_desplegable.js";
import sepia from "./sepia.js";
import darkMode from "./darkmode.js";
import cartelInicio from "./cartelInicio.js";
import comportamientoVentanas from "./controlVentana.js";
import botones from "./botonesVentana.js";
import chrome from "./chromeBtn.js";
import cargaVideo from "./cargaVideo.js";
d.addEventListener("DOMContentLoaded", (e)=>{
    cargaVideo("source-video","(min-width: 720px)");
    cartelInicio(".apagado","min-width: 1024px","source-video");
    menuSlide(".button-menuu",".menu",".ignore",".exe");
    abrirMenuIzq(".menu-desplegable", ".menu-derecho",".ignore2",".exe2");
    time();
    sepia(".sepia-button");
    explicacion(".button-menu","#texto-ayuda");
    comportamientoVentanas(".portfolio");
    botones("ventana-abierta");
    chrome(".chromebtn");
});
d.addEventListener("mousewheel", (r)=>{
    smartphone(r);
})
console.log('%cGracias por visitar mi portfolio. Espero que te guste lo que ves.🫡', 'background-color:#3e3742;border-radius:40px;margin:20px;padding:10px;font-family: "Segoe UI";font-size:1rem; color: white;');
darkMode(".darkmode-button");
