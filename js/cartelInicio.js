const d = document,
$body = d.querySelector("body");
let firstTime,
$div = d.createElement("div"),
$audio = d.getElementById("audio"),
$videoContainer = d.querySelector(".wallpaper"),
confirmacion=false,
createVideoLight = d.createElement("video"),
createVideoSourceLight = d.createElement("source");
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
            createVideoLight.classList.add("background-video");
            createVideoLight.setAttribute("type","video/mp4");
            createVideoLight.setAttribute("muted","true");
            createVideoLight.setAttribute("autoplay","true");
            createVideoLight.setAttribute("playsinline","true");
            createVideoLight.setAttribute("alt","video-wallpaper");
            createVideoLight.setAttribute("src","/assets/video/wallpaper light mode.mp4");
            $videoContainer.appendChild(createVideoLight);
            createVideoSourceLight.classList.add("source-video");
            createVideoSourceLight.setAttribute("type","video/mp4");
            createVideoSourceLight.setAttribute("type","video/mp4");
            createVideoSourceLight.setAttribute("muted","true");
            createVideoSourceLight.setAttribute("autoplay","true");
            createVideoSourceLight.setAttribute("playsinline","true");
            createVideoSourceLight.setAttribute("alt","video-wallpaper");
            createVideoSourceLight.setAttribute("src","/assets/video/wallpaper light mode.mp4");
            createVideoLight.appendChild(createVideoSourceLight);
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
            createVideoLight.classList.add("background-video");
            createVideoLight.setAttribute("type","video/mp4");
            createVideoLight.setAttribute("muted","true");
            createVideoLight.setAttribute("autoplay","true");
            createVideoLight.setAttribute("playsinline","true");
            createVideoLight.setAttribute("alt","video-wallpaper");
            createVideoLight.setAttribute("src","/assets/video/wallpaper light mode.mp4");
            $videoContainer.appendChild(createVideoLight);
            createVideoSourceLight.classList.add("source-video");
            createVideoSourceLight.setAttribute("type","video/mp4");
            createVideoSourceLight.setAttribute("type","video/mp4");
            createVideoSourceLight.setAttribute("muted","true");
            createVideoSourceLight.setAttribute("autoplay","true");
            createVideoSourceLight.setAttribute("playsinline","true");
            createVideoSourceLight.setAttribute("alt","video-wallpaper");
            createVideoSourceLight.setAttribute("src","/assets/video/wallpaper light mode.mp4");
            createVideoLight.appendChild(createVideoSourceLight);
            createVideoLight.play();
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
