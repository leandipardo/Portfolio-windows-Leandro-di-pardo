const d = document;
export default function barraSlice(){
let $v = d.querySelector(".va-tecnologia-texto"),
$b = d.querySelector(".va-progres-point"),
cuenta;
d.addEventListener("mouseup",(e)=>{
    cuenta = Math.round(Math.abs(($v.clientWidth - $v.scrollLeft / $v.clientWidth) - $v.clientWidth))*25;
    $b.style.width=`${(cuenta)}%`;
});
d.addEventListener("touchmove",(e)=>{
    setTimeout(() => {
        cuenta = Math.round(Math.abs(($v.clientWidth - $v.scrollLeft / $v.clientWidth) - $v.clientWidth))*25;
        $b.style.width=`${(cuenta)}%`;
    }, 1);
});
}