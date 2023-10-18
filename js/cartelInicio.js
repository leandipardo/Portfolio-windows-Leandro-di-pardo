const d = document,
$body = d.querySelector("body");
let firstTime,
$div = d.createElement("div"),
$audio = d.getElementById("audio"),
$video =d.querySelector(".background-video"),
confirmacion=false;
export default function cartelInicio($apagado){
    $div.classList.add("parrafo-inicio");
    $div.innerHTML =`
    <p>Bienvenido.</p>`;
    $body.appendChild($div);
        $div.style.opacity=1;
    d.addEventListener("click",(e)=>{
        if(e.target.matches($apagado)||e.target.matches(`${$apagado} *`)&&confirmacion===true){
            d.exitFullscreen();
            confirmacion=false;
        }
        if(e.target.matches($apagado)||e.target.matches(`${$apagado} *`)&&confirmacion===false){
            d.documentElement.requestFullscreen();
            confirmacion=true;
        }
        if (firstTime !== true){
            $video.setAttribute("src","assets/video/wallpaper light mode.mp4");
            $audio.play();
            $div.style.opacity=0;
            firstTime = true;
            setTimeout(() => {
                $div.classList.toggle("parrafo-inicio");
                setTimeout(() => {
                    $body.removeChild($audio);
                    $body.removeChild($div);
                }, 3000);
            }, 2000);
        }
    })
    d.addEventListener("touchstart",(e)=>{
        if(e.target.matches($apagado)||e.target.matches(`${$apagado} *`)&&confirmacion===true){
            d.exitFullscreen();
            confirmacion=false;
        }
        if(e.target.matches($apagado)||e.target.matches(`${$apagado} *`)&&confirmacion===false){
            document.documentElement.requestFullscreen();
            confirmacion=true;
        }
        if (firstTime !== true){
            $video.setAttribute("src","assets/video/wallpaper light mode.mp4");
            $audio.play();
            $div.style.opacity=0;
            firstTime = true;
            setTimeout(() => {
                $div.classList.toggle("parrafo-inicio");
                setTimeout(() => {
                    $body.removeChild($audio);
                    $body.removeChild($div);
                }, 3000);
            }, 2000);
        }
    })
    setInterval(() => {
        window.scroll(0, 0);
    }, 500);
}
