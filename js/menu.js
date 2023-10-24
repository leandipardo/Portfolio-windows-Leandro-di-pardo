import busqueda from "./filtro_busqueda.js";
export default function menuSlide($btnMenu, $menu, $textmenu, $exe, $midtranslate, $midSectionContainer){
const d = document;
//abre y cierra el menu principal.
d.addEventListener("keydown", (e)=>{
  if(e.keyCode === 91){ //Abrir con la tecla windows.
    d.querySelector($menu).classList.toggle("menu-translate");
  }
})
d.addEventListener("click",(e)=> {
  if(e.target.matches($btnMenu)||e.target.matches(`${$btnMenu} *`)||e.target.matches(`${$exe} *`)){
    d.querySelector($menu).classList.toggle("menu-translate");
    busqueda("#menu-search",".elements");
  }
  if (!(e.target.matches($btnMenu)||e.target.matches(`${$textmenu} *`)||e.target.matches($menu))) {
    d.querySelector($menu).classList.add("menu-translate");
  }
  if(e.target.matches($midtranslate)||e.target.matches(`${$midtranslate} *`)){
    d.querySelector($midSectionContainer).classList.toggle("mid-translate");
  }
})
}