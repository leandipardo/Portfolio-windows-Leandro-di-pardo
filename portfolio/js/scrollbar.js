const $scrollBar = document.querySelector(".scrollbar"),
$menudesliz = document.querySelector(".va-tecnologia-texto");
export default function scrollBar(){
    let progreso = $menudesliz.scrollX / ($menudesliz.scrollWidth - window.innerHeight) * 100;
    $scrollBar.style.width=`calc(${progreso}vw + 5px)`;
}
