let d = document,
$arrow = d.querySelector(".menu-desplegable");
//abre y cierra el menu derecho.
export default function abrirMenuIzq(arrow, menu, textmenu, exe){
    d.addEventListener("click",(e) =>{
        if(e.target.matches(arrow)||e.target.matches(`${arrow} *`)||e.target.matches(`${exe} *`)){
            $arrow.classList.toggle("menu-desplegable-rotacion");
            d.querySelector(menu).classList.toggle("menu-translate");
        }
        if(!(e.target.matches(arrow)||e.target.matches(`${menu}`)||e.target.matches(textmenu))){
            d.querySelector(menu).classList.add("menu-translate");
            $arrow.classList.add("menu-desplegable-rotacion");
        }
    })
}