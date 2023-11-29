const d = document,
$btn=d.querySelector(".lenguaje-button-text");
let lenguaje = "español";
export default function traducir(){
    d.addEventListener("click",(e)=>{
        if(e.target.matches(".leguaje-button")||e.target.matches(".leguaje-button *")){
            (lenguaje === "español")?lenguaje="ingles":lenguaje="español";
            cambioIdioma();
        }
    })
}
export function isEnglish(){
    if(navigator.language === "en"){
        lenguaje ="ingles";
        cambioIdioma();
    }

}
export function cambioIdioma(){
    $btn.classList.add("rotate-btn");
    if(lenguaje === "ingles"){
        let $el=d.querySelectorAll("[data-lenguaje]"),
        $input = d.querySelector("#menu-search"),
        $nl = d.querySelectorAll("[data-lenguaje-español]"),
        $creados = [...$nl];
        $input.placeholder="Search for applications, settings, and documents.";
        $el.forEach(e=>{
            if($creados.includes(e)=== false)e.setAttribute("data-lenguaje-español",`${e.textContent}`);
            let traduccion = e.getAttribute("data-lenguaje");
            e.textContent=traduccion;
        })
    }else if(lenguaje === "español"){
        let $el=d.querySelectorAll("[data-lenguaje]"),
        $nl = d.querySelectorAll("[data-lenguaje-español]"),
        $creados = [...$nl],
        $input = d.querySelector("#menu-search");
        $input.placeholder="Buscar aplicaciones, configuraciones y documentos.";
        $el.forEach(e=>{
            if($creados.includes(e)=== false)e.setAttribute("data-lenguaje-español",`${e.textContent}`);
            let traduccion = e.getAttribute("data-lenguaje-español");
            e.textContent=traduccion;
        })
    }
    setTimeout(() => {
        $btn.classList.remove("rotate-btn");
    }, 500);
}