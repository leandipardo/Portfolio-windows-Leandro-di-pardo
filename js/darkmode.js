const d = document;
//Detecta boton, que modo esta y cambia video a respectivo modo.
export default function darkMode(btn){
let $themeBtn = d.querySelector(".darkmode-button"),
$video = d.querySelector(".background-video"),
$moon = d.querySelector(".moon"),
$sun = d.querySelector(".sun"),
$source = d.querySelector(".source-video"),
ubiVideo,
$body = d.querySelector("body"),
darkLight="light";
function darkModeF(){
    darkLight ="dark";
    $video.setAttribute("autoplay",`false`);
    ubiVideo = `assets/video/wallpaper dark mode.mp4`;
    $video.setAttribute("src",`${ubiVideo}`);
    $source.setAttribute("src",`${ubiVideo}`);
    $video.setAttribute("autoplay",`true`);
    $moon.style.background="var(--dark-mode-hover-plus)";
    $moon.style.transform="translateX(5px)translateY(-3px)"
    $sun.style.border="solid rgba(5, 5, 5, 0.918) 1px;"
    $themeBtn.classList.add("background-buttons");
    $body.classList.toggle("classLight");
}
function lightModeF(){
    darkLight ="light";
    ubiVideo = `assets/video/wallpaper light mode.mp4`;
    $video.setAttribute("src",`${ubiVideo}`)
    $source.setAttribute("src",`${ubiVideo}`);
    $moon.style.background ="rgba(255, 255, 255, 0.918)";
    $moon.style.transform = "translateX(0px)translateY(0px)";
    $sun.style.border="solid white 1px;"
    $themeBtn.classList.remove("background-buttons");
    $body.classList.toggle("classLight");
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
}