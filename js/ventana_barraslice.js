const d = document;
export default function barraSlice(){
let $v = d.querySelector(".va-tecnologia-texto"),
$b = d.querySelector(".va-progres-point"),
cuenta;
d.addEventListener("mouseup",(e)=>{
    cuenta = Math.round(Math.abs(($v.clientWidth - $v.scrollLeft / $v.clientWidth) - $v.clientWidth))*25;
    barraProgreso($b,cuenta);
});
d.addEventListener("touchmove",(e)=>{
    cuenta = Math.round(Math.abs(($v.clientWidth - $v.scrollLeft / $v.clientWidth) - $v.clientWidth))*25;
    setTimeout(() => {
        barraProgreso($b,cuenta);
    }, 500);
});
}
function barraProgreso(el,param){
    el.style.width=`${param}%`
}