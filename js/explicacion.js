const d = document,
$textinfo = d.getElementById("texto-ayuda"),
$textname = d.getElementById("nombre"),
$pic = d.querySelector(".foto-perfil"),
$isEng = d.querySelector(".title-lenguaje");
let textinfo = [],
texto = ["","Esta web se ira actualizando con futuros proyectos","Si algo esta en desarrollo probablemente sea agregado dentro de poco","Gracias"],
englishText =["","This website will be updated with future projects","If something is in development, it will likely be added soon","Thank you"],
emptyArr =[],
i = 0,
count= 0;
export default function explicacion($container){
d.addEventListener("click",(e)=> {
    if(e.target.matches($container)&& count <= 2||e.target.matches(`${$container} *`) && count <= 2){
        $pic.style.borderRadius="50% 0px 50% 50%";
        createText(texto,englishText);
    }else if(e.target.matches($container) && count === 3 ||e.target.matches(`${$container} *`) && count === 3){
        clearInterval(intervaloTexto);
        $pic.style.borderRadius="50%";
        $textinfo.style.transform="scale(0)";
        $textname.style.opacity = "0";
        setTimeout(() => {
            $textinfo.style.display="none";
            $textname.style.opacity = "1";
        }, 1000);
    }}
)
let intervaloTexto = setInterval(() => {
    if (emptyArr.length > textinfo.length){
        textinfo.push(emptyArr[i]);
        let parcialWord = textinfo.join("");
        i++;
        $textinfo.textContent = parcialWord;
    }
    }, 25);
};
    function createText(textoEspañol,textEnglish){
        let text;
        count++;
        ($isEng.textContent === "Traducir a ingles.")?text=textoEspañol[count]:text=textEnglish[count];
        textinfo = [];
        i = 0;
        emptyArr = text.split("");
    }
