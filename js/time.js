let d = document,
$f = d.querySelector(".date"),
$h = d.querySelector(".hour");
//Agrega fecha y hora abajo a la derecha.
export default function time(){
    setInterval(() => {
        let reloj = new Date(),
        hora = reloj.toLocaleTimeString().split(":"),
        horad= hora.pop();
        $f.textContent = reloj.toLocaleDateString();
        $h.textContent = hora.join(":");
    }, 1000);
}