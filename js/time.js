let d = document,
$f = d.querySelector(".date"),
$h = d.querySelector(".hour");
//Agrega fecha y hora abajo a la derecha.
export default function time(){
        let reloj = new Date(),
        hora = reloj.toLocaleTimeString().split(":"),
        horad= hora.pop();
        $f.textContent = reloj.toLocaleDateString();
        $h.textContent = hora.join(":");
}
export function intervaloTiempo(){
    setInterval(() => {
        time();
    }, 1000);
}
