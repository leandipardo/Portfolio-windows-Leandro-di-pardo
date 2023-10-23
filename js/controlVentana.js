const d = document,
w = window,
n = navigator,
b = d.querySelector("body");
let $id = 0,
$middleMenuConteiner=d.querySelector(".middle-menu-conteiner"),
contenido,
crearVideo,
eGlobal;
import mover from "./mover.js";
import mover_carousel from "./mover_carousel.js";
import barraSlice from "./ventana_barraslice.js";
import userDeviceInfo,{info} from "./deteccion_dispositivo.js";
import webCam from "./deteccion_webcam.js";
export default function comportamientoVentanas(p,di,c){
    d.addEventListener("click", (e)=>{
        let prueba = d.querySelector(".ventana-abierta");
        if(e.target.matches(p) && prueba === null || e.target.matches(`${p} *`) && prueba === null ){
            eGlobal = e.target;
            contenido =`
            <main class="va-main">
                <section class="va-title">
                    <h2>Leandro <br> Di Pardo.</h2>
                    <p>Desarrollador front-end.</p>
                </section>
                <section class="va-info">
                    <div class="va-info-div">
                        <h2>Hola!👋🏻</h2>
                        <p>Me llamo Leandro, soy argentino y tengo 27 años, actualmente estoy estudiando Licenciatura en Sistemas. Tengo experiencia en trabajos de diseño gráfico y también estudié programación web de manera autodidacta. Mi objetivo es seguir creciendo como desarrollador, ampliando constantemente mis habilidades con nuevas tecnologías y lenguajes.</p>
                    </div>
                    <div class="va-wave-div">
                        <img src="assets/img/wave.svg" alt="estadísticas random">
                    </div>
                    <div class="va-tecnologia-div">
                        <h3>Habilidades.</h3>
                    </div>
                    <section class="va-tecnologia-texto">
                            <div class="va-progress-bar">
                                <div class="va-progres-point"></div>
                            </div>
                            <div class="va-tecnologia-first">   
                                <p>Desliza para saber más. →</p>
                                <h3>Como desarrollador web junior sumado a mis experiencias en diseño grafico, he adquirido un considerable conjunto de habilidades en diversas tecnologías para la creación de sitios web.</h3>
                            </div>
                            <div class="va-tecnologia-second">
                                <h3>Mis soft skills se basan en la comunicación clara, resolución de problemas, autogestión, trabajo en equipo y adaptación al cambio. Además, soy responsable, organizado en la gestión del tiempo, atento a los detalles, creativo y estoy en constante aprendizaje.</h3>
                            </div>
                            <div class="va-tecnologia-third">
                                <h3>Por otro lado, mis hard skills se basan en HTML, CSS, JavaScript, Bootstrap, Sass y React. Utilizo Git para el versionado. Tengo conocimientos de SEO, diseño responsive y accesibilidad. Se utilizar programas de la suite de Adobe, Figma y Linux. Hablo inglés a nivel medio y conozco las distintas metodologías Scrum.</h3>
                            </div>
                            <div class="va-tecnologia-four">
                                <h3>Mis objetivos a futuro son costear mis estudios a medida que gane experiencia en el área del front, tengo la capacidad de aprender rápidamente y estoy dispuesto a ponerme al día con las tecnologias que me indiquen lo antes posible.</h3>
                            </div>
                            <div class="va-tecnologia-five">
                                <h3>Gracias por tu tiempo.</h3>
                            </div>
                    </section>
                    <div class="va-contacto-background"></div>
                    <a class="va-whatsapp-div"target="_blank" href="https://api.whatsapp.com/send/?phone=5492346415486&text=Hola,%20mi%20nombre%20es%20____%20y%20queria%20ponerme%20en%20contacto%20con%20vos.">
                            <h3>Whatsapp</h3>
                        </a>
                        <a class="va-github-div" target="_blank" href="https://github.com/leandipardo">
                            <h3>Github</h3>
                        </a>
                        <a class="va-linkedin-div" target="_blank" href="https://www.linkedin.com/in/leandro-di-pardo-7a5a6518b/">
                            <h3>Linkedin</h3>
                        </a>
                </section>
                <img class="va-wave" src="/assets/img/va-wave.svg" alt="wave">
            </main>
            `;
            crearVentana("assets/img/pdf icon.svg");
            mover_carousel('.va-tecnologia-texto');
            barraSlice();
        }else if(e.target.matches(di) && prueba === null || e.target.matches(`${di} *`) && prueba === null ){
            eGlobal = e.target;
            userDeviceInfo();
            contenido= `
            <main id="dimain" class="di-main">
                <h3>Este dispositivo</h3>
                <ul class="di-ul">
                    <li>Sistema operativo: <strong>${info.dispositivo}</strong>.</li>
                    <li>Navegador: <strong>${info.navegador}</strong>.</li>
                    <li>Resolucion: <strong>${info.resolucion}.</strong></li>
                    <li>Estado de la conexión: ${info.red()}.</li>
                </ul>
                <img class="di-img" src="/assets/img/back dispositivos.svg"></img>
            </main>`;
            crearVentana("assets/img/icons8-dispositivo-80.svg");
            cambiosExtras();
        }
        else if(e.target.matches(c)&&prueba === null || e.target.matches(`${c} *`) && prueba === null){
            eGlobal = e.target
            contenido=`
            <main class="va-main">
                <video id="webcam"></video>
            </main>
            `;
            crearVideo=true;
            crearVentana("assets/img/camera icon.svg");
            cambiosExtras();
        }
        document.getElementById('estilosVentanaAbierta').href = 'css/ventanaAbierta.css';
    })
}
function crearVentana(icon){
    let $section = d.createElement("section"),
    $div = d.createElement("div"),
    $input = d.createElement("input"),
    $input2 = d.createElement("input"),
    $input3 = d.createElement("input"),
    $div2 =d.createElement("div");
    $section.setAttribute("identificador",`${$id}`);
    $section.classList.add("ventana-abierta");
    $section.classList.add("movible");
    $div.classList.add("window-buttons");
    $div2.classList.add("ventana-cuerpo");
    $input.classList.add("minimize");
    $input.setAttribute("name","minimizar");
    $input.setAttribute("type","button");
    $input.setAttribute("value","‒");
    $input2.classList.add("maximize");
    $input2.setAttribute("name","maximizar");
    $input2.setAttribute("type","button");
    $input2.setAttribute("value","◻");
    $input3.classList.add("cerrar");
    $input3.setAttribute("name","cerrar");
    $input3.setAttribute("type","button");
    $input3.setAttribute("value","✕");
    b.appendChild($section);
    $section.appendChild($div); 
    $section.appendChild($div2);
    $div.appendChild($input);
    $div.appendChild($input2);
    $div.appendChild($input3);
    mover(".movible");
    let $iconimg = d.createElement("img");
    $iconimg.setAttribute("identificador",`${$id}`);
    $iconimg.classList.add("button-menu");
    $iconimg.setAttribute("src",icon);
    $iconimg.setAttribute("alt","Icono ventana");
    $id++;
    $middleMenuConteiner.appendChild($iconimg);
    $div2.innerHTML=contenido; 
    if (window.outerWidth <= 1024){
        $section.classList.toggle("movible");
        $section.classList.add("maximizar-ventana");
    }else if(eGlobal.matches(".ventana-abierta")){
    let $va = d.querySelectorAll(".ventana-abierta"),
    $v = eGlobal.target;
    $va.forEach((r)=>{
        if(r.getAttribute("identificador") !== $v.getAttribute("identificador")){                    
            r.classList.remove("actual");
        }else{
            r.classList.add("actual");
        }
        })
    }
        if(crearVideo)webCam();
}
function cambiosExtras(){
    let v = d.querySelector(".ventana-abierta");
    v.classList.add("bg");
}