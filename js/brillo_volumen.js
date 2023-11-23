const $brillo = document.querySelector("#barraBrillo"),
$volumen = document.querySelector("#barraVolumen"),
$audioNotif = document.getElementById("audio_notif"),
$body = document.querySelector("body");
export default function brillo(){
    $brillo.addEventListener("input", function() {
        $body.style.filter=`brightness(${$brillo.value}%)`;
    });
}
export function volumen(){
    $volumen.addEventListener("input", function() {
        $audioNotif.pause();
        $audioNotif.currentTime = 0;
        $audioNotif.volume = $volumen.value / 100;
        setTimeout(() => {
            $audioNotif.play();
        }, 300);
    });
}