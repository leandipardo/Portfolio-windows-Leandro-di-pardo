const d = document,
$body = d.querySelector(".classDark");
let firstTime,
$div = document.createElement("div"),
$audio = document.getElementById("audio"),
confirmacion=false;
export default function cartelInicio($apagado){
    $div.classList.add("parrafo-inicio");
    $div.innerHTML =`
    <p>Bienvenido.</p>`;
    $body.appendChild($div);
        $div.style.opacity=1;
    d.addEventListener("click",(e)=>{
        if(e.target.matches($apagado)||e.target.matches(`${$apagado} *`)&&confirmacion===false){
            d.exitFullscreen();
            confirmacion=true;
        }
        if(e.target.matches($apagado)||e.target.matches(`${$apagado} *`)&&confirmacion===true){
            document.documentElement.requestFullscreen();
            confirmacion=false;
        }
        if (firstTime !== true){
            $audio.play();
            $div.style.opacity=0;
            firstTime = true;
            setTimeout(() => {
                $div.classList.toggle("parrafo-inicio");
                setTimeout(() => {
                    $body.removeChild($audio);
                }, 3000);
            }, 2000);
        }
    })
    d.addEventListener("Touch",(e)=>{
        if(e.target.matches($apagado)||e.target.matches(`${$apagado} *`)&&confirmacion===false){
            d.exitFullscreen();
            confirmacion=true;
        }
        if(e.target.matches($apagado)||e.target.matches(`${$apagado} *`)&&confirmacion===true){
            document.documentElement.requestFullscreen();
            confirmacion=false;
        }
        if (firstTime !== true){
            $audio.play();
            $div.style.opacity=0;
            document.documentElement.requestFullscreen();
            firstTime = true;
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
