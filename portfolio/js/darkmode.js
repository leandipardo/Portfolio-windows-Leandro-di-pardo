const d = document,
ls = localStorage;
//Detecta boton, que modo esta y cambia video a respectivo modo.
export default function darkMode(btn){
let $themeBtn = d.querySelector(".darkmode-button"),
$selectors = d.querySelector("[data-dark]"),
$video = d.querySelector(".background-video"),
$moon = d.querySelector(".moon"),
$sun = d.querySelector(".sun"),
ubiVideo = undefined,
darkLight = "dark";
const darkModeF = () => {
    darkLight ="dark";
    ubiVideo = `/portfolio/assets/video/wallpaper dark mode.mp4`;
    $video.setAttribute("src",`${ubiVideo}`)
    $moon.style.background="var(--dark-mode-hover-plus)";
    $moon.style.transform="translateX(5px)translateY(-3px)"
    $sun.style.border="solid rgba(5, 5, 5, 0.918) 1px;"
    $selectors.classList.remove("classLight");
    ls.setItem("theme","dark");
    $themeBtn.classList.add("background-buttons");
}
const lightModeF = () =>{
    darkLight ="light";
    ubiVideo = `/portfolio/assets/video/wallpaper light mode.mp4`;
    $video.setAttribute("src",`${ubiVideo}`)
    $moon.style.background ="rgba(255, 255, 255, 0.918)";
    $moon.style.transform = "translateX(0px)translateY(0px)";
    $sun.style.border="solid white 1px;"
    $selectors.classList.add("classLight");
    ls.setItem("theme","light");
    $themeBtn.classList.remove("background-buttons");
}
d.addEventListener("click", (e)=>{
    if(e.target.matches(btn)|| e.target.matches(`${btn} *`)){
        if(darkLight === "light"){
            darkModeF();
            
        }else if(darkLight === "dark"){
            lightModeF();
        }
    }
})
d.addEventListener("DOMContentLoaded", (e)=>{
    if(ls.getItem("theme") === null) ls.setItem("theme","light");
    if(ls.getItem("theme") === "light") lightModeF();
    if(ls.getItem("theme") === "dark") darkModeF();
})
}