let d = document,
$f = d.querySelector(".date"),
$h = d.querySelector(".hour");
//Agrega fecha y hora abajo a la derecha.
export default function time(){
    setInterval(() => {
        let reloj = new Date();
        $f.textContent = reloj.toLocaleDateString();
        $h.textContent = reloj.toLocaleTimeString(); 
    }, 16);
}