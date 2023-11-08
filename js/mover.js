const d = document;
let inter,
validacion;
//función creada por marta para mover ventanas.
export default function mover(caja){
    const element = d.querySelectorAll(caja); //selecciona .movible
    const moveMouse = (e) => {
            element.forEach(el => { 
            el.dataset.mouseX = e.clientX;
            el.dataset.mouseY = e.clientY;
        });
    }
    d.addEventListener("mousemove", moveMouse);
    d.addEventListener("mousedown", (e) => {
        clearInterval(inter);
        if (e.target.matches(caja)) {
            let objeto = e.target;
            let correccion = {
                x: objeto.dataset.mouseX,
                y: objeto.dataset.mouseY,
                oldPosX: 1,
                oldPosY: 1
            };
            let $ventana = objeto.getBoundingClientRect();
            if (objeto.dataset.transformX !== undefined) {
                correccion.oldPosX = parseInt(objeto.dataset.transformX);
                correccion.oldPosY = parseInt(objeto.dataset.transformY);
            }
            inter = setInterval(()=>{
                if($ventana.left <= 0 && correccion.oldPosX + (objeto.dataset.mouseX - correccion.x) <= correccion.oldPosX){
                    objeto.dataset.transformY = correccion.oldPosY + (objeto.dataset.mouseY - correccion.y);
                    objeto.setAttribute("style", `transform: translate(${objeto.dataset.transformX}px,${objeto.dataset.transformY}px)`);
                    return;
                }if($ventana.right >= window.innerWidth && correccion.oldPosX + (objeto.dataset.mouseX - correccion.x) >= correccion.oldPosX){
                    objeto.dataset.transformY = correccion.oldPosY + (objeto.dataset.mouseY - correccion.y);
                    objeto.setAttribute("style", `transform: translate(${objeto.dataset.transformX}px,${objeto.dataset.transformY}px)`);
                    return;
                }
                if(($ventana.y + 100) >= window.innerHeight && (correccion.oldPosY + (objeto.dataset.mouseY - correccion.y) + 50) > correccion.oldPosY){
                    objeto.dataset.transformX = correccion.oldPosX + (objeto.dataset.mouseX - correccion.x);
                    objeto.setAttribute("style", `transform: translate(${objeto.dataset.transformX}px, ${objeto.dataset.transformY}px)`);
                    return;
                }if($ventana.top <= 0 && correccion.oldPosY + (objeto.dataset.mouseY - correccion.y) < correccion.oldPosY){
                    objeto.dataset.transformX = correccion.oldPosX + (objeto.dataset.mouseX - correccion.x);
                    objeto.setAttribute("style", `transform: translate(${objeto.dataset.transformX}px, ${objeto.dataset.transformY}px)`);
                    return;
                }else{
                objeto.dataset.transformX = correccion.oldPosX + (objeto.dataset.mouseX - correccion.x);
                objeto.dataset.transformY = correccion.oldPosY + (objeto.dataset.mouseY - correccion.y);
                objeto.setAttribute("style", `transform: translate(${objeto.dataset.transformX}px, ${objeto.dataset.transformY}px);  transition:ease-out .15s`);
            }
            }, 15);
        }
    });
    d.addEventListener("mouseup", e => {
        clearInterval(inter);
    });
    // ---------------------touch screen-----------------------
    
    const moveTouch = (e) => {
        element.forEach(el => { 
            el.dataset.mouseX = e.touches[0].clientX;
            el.dataset.mouseY = e.touches[0].clientY;
        });
    }
    d.addEventListener("touchmove", moveTouch);
    d.addEventListener("touchstart", (e) => {
        clearInterval(inter);
        element.forEach(el => {
            if (el.matches(caja)) {
                el.dataset.mouseX = e.touches[0].clientX;
                el.dataset.mouseY = e.touches[0].clientY;
            }
        });
        if (e.target.matches(caja)) {
            let objeto = e.target;
            let correccion = {
                x: (objeto.dataset.mouseX),
                y: (objeto.dataset.mouseY),
                oldPosX: 0,
                oldPosY: 0
            };
            if (objeto.dataset.transformX !== undefined) {
                correccion.oldPosX = parseInt(objeto.dataset.transformX);
                correccion.oldPosY = parseInt(objeto.dataset.transformY);
            }
                inter = setInterval(() => {
                    let $ventana = objeto.getBoundingClientRect();
                    if($ventana.left <= 0 && correccion.oldPosX + (objeto.dataset.mouseX - correccion.x) <= correccion.oldPosX){
                        objeto.dataset.transformY = correccion.oldPosY + (objeto.dataset.mouseY - correccion.y);
                        objeto.setAttribute("style", `transform: translate(${objeto.dataset.transformX}px,${objeto.dataset.transformY}px)`);
                        return;
                    }if($ventana.right >= window.innerWidth && correccion.oldPosX + (objeto.dataset.mouseX - correccion.x) >= correccion.oldPosX){
                        objeto.dataset.transformY = correccion.oldPosY + (objeto.dataset.mouseY - correccion.y);
                        objeto.setAttribute("style", `transform: translate(${objeto.dataset.transformX}px,${objeto.dataset.transformY}px)`);
                        return;
                    }
                    if(($ventana.y + 100) >= window.innerHeight && (correccion.oldPosY + (objeto.dataset.mouseY - correccion.y) + 50) > correccion.oldPosY){
                        objeto.dataset.transformX = correccion.oldPosX + (objeto.dataset.mouseX - correccion.x);
                        objeto.setAttribute("style", `transform: translate(${objeto.dataset.transformX}px, ${objeto.dataset.transformY}px)`);
                        return;
                    }if($ventana.top <= 0 && correccion.oldPosY + (objeto.dataset.mouseY - correccion.y) < correccion.oldPosY){
                        objeto.dataset.transformX = correccion.oldPosX + (objeto.dataset.mouseX - correccion.x);
                        objeto.setAttribute("style", `transform: translate(${objeto.dataset.transformX}px, ${objeto.dataset.transformY}px)`);
                        return;
                    }else{
                    objeto.dataset.transformX = correccion.oldPosX + (objeto.dataset.mouseX - correccion.x);
                    objeto.dataset.transformY = correccion.oldPosY + (objeto.dataset.mouseY - correccion.y);
                    objeto.setAttribute("style", `transform: translate(${objeto.dataset.transformX}px, ${objeto.dataset.transformY}px); transition:none)`);
                    }
                }, 15);
            }
    });
    d.addEventListener("touchend", e => {
            clearInterval(inter);
    });
}