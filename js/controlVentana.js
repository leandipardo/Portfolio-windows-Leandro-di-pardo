const d = document,
b = d.querySelector("body");
let $id = 0,
$middleMenuConteiner=d.querySelector(".middle-menu-conteiner"),
c = 0,
mouseFirstPos,
mouseLastPos,
text = `
<div class="va-main">
    <section class="va-title">
        <h2>Leandro Di Pardo.</h2>
        <p>Desarrollador front end.</p>
    </section>
    <section class="va-info">
        <div class="va-info-div">
            <h2>Hola!👋🏻</h2>
            <p>Me llamo Leandro, soy argentino y tengo 27 años, actualmente estoy estudiando Licenciatura en Sistemas. Tengo experiencia en trabajos de diseño gráfico y también estudié programación web de manera autodidacta. Mi objetivo es seguir creciendo como desarrollador, ampliando constantemente mis habilidades con nuevas tecnologías y lenguajes.</p>
        </div>
        <div class="va-wave-div">
            <img src="assets/img/wave.svg" alt="estadisticas random">
        </div>
        <div class="va-tecnologia-div">
            <h3>Habilidades.</h3>
        </div>
        <section class="va-tecnologia-texto">
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
                    <h3>Mis objetivos a futuro son costear mis estudios a medida que gane experiencia en el area del front, tengo la capacidad de aprender rápidamente y estoy dispuesto a ponerme al día con las tecnologias que me indiquen lo antes posible.</h3>
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
</div>
`;
import mover from "./mover.js";
import mover_carousel from "./mover_carousel.js";
import scrollBar from "./scrollbar.js";
export default function comportamientoVentanas(p){
    d.addEventListener("click", (e)=>{
        let prueba = d.querySelector(".ventana-abierta");
        if(e.target.matches(p) && prueba === null || e.target.matches(`${p} *`) && prueba === null ){
            document.getElementById('estilosVentanaAbierta').href = 'css/ventanaAbierta.css';
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
            $iconimg.setAttribute("src","assets/img/pdf icon.svg");
            $iconimg.setAttribute("alt","Icono de pdf");
            $id++;
            $middleMenuConteiner.appendChild($iconimg);
            $div2.innerHTML=text; 
            mover_carousel('.va-tecnologia-texto');
            if (window.outerWidth <= 1024){
                $section.classList.toggle("movible");
                $section.classList.add("maximizar-ventana");
            }
        }else if(e.target.matches(".ventana-abierta")){
            let $va = d.querySelectorAll(".ventana-abierta"),
            $v = e.target;
            $va.forEach((r)=>{
                if(r.getAttribute("identificador") !== $v.getAttribute("identificador")){                    
                    r.classList.remove("actual");
                }else{
                    r.classList.add("actual");
                }
                })
            }
    })
}