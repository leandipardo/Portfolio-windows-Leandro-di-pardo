const d = document,
ls=localStorage,
$body = d.querySelector(".classDark");
let firstTime = true,
$div = document.createElement("div"),
$audio = document.getElementById("audio"),
$src = undefined;
d.addEventListener("DOMContentLoaded", (e)=>{
    if(ls.getItem("theme") === "light") $src=`assets/video/wallpaper light mode.mp4`;
    if(ls.getItem("theme") === "dark") $src=`assets/video/wallpaper dark mode.mp4`;
})
export default function cartelInicio($apagado){
    $div.classList.add("parrafo-inicio");
    $div.innerHTML =`
    <p>Bienvenido.</p>`;
    $body.appendChild($div);
        $div.style.opacity=1;
    d.addEventListener("click",(e)=>{
        if(e.target.matches($apagado)||e.target.matches(`${$apagado} *`)){
            d.exitFullscreen();
        }
        if (firstTime === true){
            $audio.play();
            $div.style.opacity=0;
            let $video = d.querySelector(".background-video");
            document.documentElement.requestFullscreen();
            $video.setAttribute("src",`${$src}`);
            $video.setAttribute("autoplay","true");
            firstTime = false;
            setTimeout(() => {
                $div.classList.toggle("parrafo-inicio");
                setTimeout(() => {
                    $body.removeChild($audio);
                }, 3000);
            }, 2000);
        }
    })
    setInterval(() => {
        window.scroll(0, 0);
    }, 500);
}
