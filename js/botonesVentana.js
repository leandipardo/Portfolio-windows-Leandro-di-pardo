const d =  document,
$body = d.querySelector("body");
let transformX,
transformY;
const buscarPadre = (e, clase) =>{
    let p = e.target;
    while(!p.className.includes(clase)){
        p = p.parentNode;
    }
    return p;
    };
export default function botones(v){
    d.addEventListener("click",(e)=>{
    let padre;
    if(e.target.matches(".button-menu")){
        let $boton = e.target, //guarda el boton
        $ventanas = d.querySelectorAll(".ventana-abierta"); // guarda todas las ventanas en $r
        $ventanas.forEach((elemento)=>{ //recorre todas las ventanas para buscar la que coincide con el boton
            if(elemento.getAttribute("identificador") === $boton.getAttribute("identificador")){
                if(elemento.className.includes("maximizar-ventana") && elemento.className.includes("minimizar-ventana")){
                    elemento.style.transform=`translate(0px,0px)`;
                    elemento.classList.add("transition");
                    elemento.classList.toggle("minimizar-ventana");
                    setTimeout(() => {
                        elemento.classList.remove("transition");
                    }, 250);
                }else if(elemento.className.includes("minimizar-ventana")){ //si la ventana es minimizada coloca la posicion anterior
                    elemento.style.transform=`translate(${transformX}px,${transformY}px)`;
                    elemento.classList.add("transition");
                    elemento.classList.toggle("minimizar-ventana");
                    setTimeout(() => {
                        elemento.classList.remove("transition");
                    }, 250);
                }else{
                    elemento.classList.add("transition"); //Guarda la posicion de la ventana y la minimiza.
                    elemento.classList.toggle("minimizar-ventana");
                    transformX = elemento.dataset.transformX;
                    transformY = elemento.dataset.transformY;
                    elemento.style.transform=``;
                    setTimeout(() => {
                        elemento.classList.remove("transition");
                    }, 250);
                }
            }
        })
    }
    if(e.target.matches(".minimize")){
        padre = buscarPadre(e,v);
        if(padre.className.includes("minimizar-ventana")){
            padre.style.transform=`translate(${transformX}px,${transformY}px)`;
            padre.classList.add("transition");
            padre.classList.toggle("minimizar-ventana");
            setTimeout(() => {
                padre.classList.remove("transition");
            }, 250);
            
        }if(padre.className.includes("minimizar-ventana")){}else{
            padre.classList.add("transition");
            padre.classList.toggle("minimizar-ventana");
            transformX = 0;
            transformY = 0;


            padre.style.transform=``;
            setTimeout(() => {
                padre.classList.remove("transition");
            }, 250);
        }
    }
    if(e.target.matches(".maximize")){
        padre = buscarPadre(e,v);
        padre.classList.toggle("movible");
        padre.classList.toggle("maximizar-ventana");
        if(padre.className.includes("movible")){
            padre.style.transform=`translate(${transformX}px,${transformY}px)`;
            padre.classList.add("transition");
            setTimeout(() => {
                padre.classList.remove("transition");
            }, 250);
        }else{
        setTimeout(() => {
            padre.style.transform="translate(0,0)"
            transformX = padre.dataset.transformX;
            transformY = padre.dataset.transformY;
            }, 1);
        }
    }
        if(e.target.matches(".cerrar")){
            padre = buscarPadre(e,v);
            padre.classList.add("transition");
            padre.style.opacity="0";
            setTimeout(() => {
                $body.removeChild(padre);
            }, 250);
            let $contenedorElemento = d.querySelector(".middle-menu-conteiner"),
            $botones = d.querySelectorAll(".button-menu");
            $botones.forEach((elemento)=>{
                if(elemento.getAttribute("identificador") === padre.getAttribute("identificador")){
                    elemento.classList.add("transition");
                    elemento.style.opacity="0";
                    setTimeout(() => {
                        $contenedorElemento.removeChild(elemento);
                        transformX = undefined;
                        transformY = undefined;
                    }, 250);
                }
            })
        }
    });
}