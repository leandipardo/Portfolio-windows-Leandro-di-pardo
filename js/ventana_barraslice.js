const d = document;
export default function barraSlice(){
let $v = d.querySelector(".va-tecnologia-texto"),
$b = d.querySelector(".va-progres-point"),
f = d.querySelector(".va-tecnologia-five"),
cortafuegos = 0,
calculo = 0;
d.addEventListener("mouseup",(e)=>{
    if (cortafuegos === 1)calculo = $v.scrollLeft;
    let cuenta = Math.round(Math.abs(($v.clientWidth - $v.scrollLeft / $v.clientWidth) - $v.clientWidth))*25;
    $b.style.width=`${(cuenta)}%`;
    cortafuegos++;
})
}