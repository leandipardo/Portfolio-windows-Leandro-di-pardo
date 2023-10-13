let d = document,
$textinfo = document.getElementById("texto-ayuda"),
$textname = document.getElementById("nombre"),
textinfo = [],
textoA = "Bienvenido/a a mi portfolio. Haz click aquí para más info.",
textoB = "Los enlaces de WhatsApp y correo incluyen mi contacto.",
textoC = "Actualizaré esta web con futuros proyectos.",
textoD = "Espero que te guste y que podamos colaborar juntos.",
a = [],
i = 0,
primerClick= 0;
//Texto de informacion al lado de imagen de perfil, cada caso cambia el texto que muestra letra por letra y en el ultimo caso establece pantalla completa.
export default function explicacion($btnMenu, globo){
d.addEventListener("click",(e)=> {
    if(e.target.matches($btnMenu)||e.target.matches(`${$btnMenu} *`) && primerClick === 0){
        textinfo = [];
        i = 0;
        a = textoA.split("");
        primerClick = 1;
    }
    if(e.target.matches(globo)&& primerClick === 1){
        setTimeout(() => {
            textinfo = [];
            i = 0;
            a = textoB.split("");
            primerClick = 2;
        }, 100);
    }
    if(e.target.matches(globo)&& primerClick === 2){
        setTimeout(() => {
            textinfo = [];
            i = 0;
            a = textoC.split("");
            primerClick = 3;
        }, 100);

    }
    if(e.target.matches(globo)&& primerClick === 3){
        setTimeout(() => {
            textinfo = [];
            i = 0;
            a = textoD.split("");
            primerClick = 4;
        }, 100);
    }
    if(e.target.matches(globo)&& primerClick === 4){
        primerClick = 5;
        clearInterval(intervaloTexto);
        $textname.style.opacity = 0;
        setTimeout(() => {
            $textinfo.style.height=0;
            $textinfo.style.opacity="0";
            $textinfo.style.cursor="default";
            $textinfo.style.boxShadow ="none";
                setTimeout(() => {
                    $textname.style.opacity = 1;
                }, 800);
        }, 1000);

    }}
)};
let intervaloTexto = setInterval(() => {
    if (a.length > textinfo.length){
        textinfo.push(a[i]);
        let b = textinfo.join("");
        i++;
        $textinfo.textContent = b;
    }
    }, 20);        