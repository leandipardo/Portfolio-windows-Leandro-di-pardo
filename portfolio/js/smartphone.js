let $smartphone = document.querySelector(".smartphone"),
delta = 0,
$blur = document.querySelector(".blur"),
$createSmartphone = document.querySelector(".create-smartphone");
//crea smartphone al scrollear para abjo (Falta agregar el activarse cuando estas en modo celular).
export default function smartphone(e){
  let $ventanaabierta = document.querySelector(".ventana-abierta");
    if (e.deltaY === -100 && delta > 0 ) {
        delta--;
        $blur.style.backdropFilter=`blur(0px)`;
        $smartphone.style.transform=`rotateZ(45deg)translateX(100vw)scale(1.5)`;
        $smartphone.style.top=`300vh`;
        setTimeout(() => {
          $blur.style.zIndex="-1";
        }, 200);
      }
      if (e.deltaY === 100 && delta <= 1 && $ventanaabierta === null) {
        $createSmartphone.setAttribute("src","/portfolio/assets/img/smartphone.png");
        $blur.style.zIndex=`10`;
        $blur.style.height=`100vh`;
        $blur.style.width=`100vw`;
        $blur.style.display="visible";
        delta++;
        $blur.style.backdropFilter=`blur(30px)`;
        $smartphone.style.transform=`rotateZ(0deg)translateX(0vw)translateY(0vh)scale(1)`
        $smartphone.style.top=`10vh`;
      }
}