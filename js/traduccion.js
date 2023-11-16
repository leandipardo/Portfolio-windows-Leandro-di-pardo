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
export function cambioIdioma(){
    $btn.classList.add("rotate-btn");
    if(lenguaje === "ingles"){
        let $el=d.querySelectorAll("[data-lenguaje]"),
        $input = d.querySelector("#menu-search"),
        $nl = d.querySelectorAll("[data-lenguaje-español]"),
        $creados = [...$nl];
        $input.placeholder="Search for applications, settings, and documents.";
        $el.forEach(e=>{
            let traduccion = e.getAttribute("data-lenguaje");
            if(!$creados.includes(e))e.setAttribute("data-lenguaje-español",`${e.textContent}`);
            e.textContent=traduccion;
        })
    }else if(lenguaje === "español"){
        let $el=d.querySelectorAll("[data-lenguaje]"),
        $input = d.querySelector("#menu-search");
        $input.placeholder="Buscar aplicaciones, configuraciones y documentos.";
        $el.forEach(e=>{
            let traduccion = e.getAttribute("data-lenguaje-español");
            e.textContent=traduccion;
        })
    }
    setTimeout(() => {
        $btn.classList.remove("rotate-btn");
    }, 500);
}