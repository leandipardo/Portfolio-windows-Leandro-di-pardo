const d = document;
let inter;

function breakInterval($ventana) {
    if (
        $ventana.right >= window.innerWidth ||
        $ventana.left < 0 ||
        $ventana.top < 0 ||
        $ventana.bottom >= window.innerHeight
    ) {
        console.log("Ventana fuera de los límites");
        // Puedes hacer lo que necesites cuando la ventana esté fuera de los límites aquí
    }
}

export default function mover(ventana) {
    const ventanas = d.querySelectorAll(ventana);

    const moveMouse = (e) => {
        ventanas.forEach((el) => {
            el.dataset.mouseX = e.clientX;
            el.dataset.mouseY = e.clientY;
        });
    };

    d.addEventListener("mousemove", moveMouse);

    d.addEventListener("mousedown", (e) => {
        clearInterval(inter);
        if (e.target.matches(ventana)) {
            movimiento(e);
        }
    });

    d.addEventListener("mouseup", () => {
        clearInterval(inter);
    });

    const moveTouch = (e) => {
        ventanas.forEach((el) => {
            el.dataset.mouseX = e.touches[0].clientX;
            el.dataset.mouseY = e.touches[0].clientY;
        });
    };

    d.addEventListener("touchmove", moveTouch);

    d.addEventListener("touchstart", (e) => {
        clearInterval(inter);
        ventanas.forEach((el) => {
            if (el.matches(ventana)) {
                el.dataset.mouseX = e.touches[0].clientX;
                el.dataset.mouseY = e.touches[0].clientY;
            }
        });
        if (e.target.matches(ventana)) {
            movimiento(e);
        }
    });

    d.addEventListener("touchend", () => {
        clearInterval(inter);
    });
}

function movimiento(e) {
    let $ventana = e.target.getBoundingClientRect();
    let objeto = e.target;

    let correccion = {
        x: objeto.dataset.mouseX,
        y: objeto.dataset.mouseY,
        oldPosX: 0,
        oldPosY: 0,
    };

    if (objeto.dataset.transformX !== undefined) {
        correccion.oldPosX = parseInt(objeto.dataset.transformX);
        correccion.oldPosY = parseInt(objeto.dataset.transformY);
    }

    inter = setInterval(() => {
        let newPosX = correccion.oldPosX + (objeto.dataset.mouseX - correccion.x);
        let newPosY = correccion.oldPosY + (objeto.dataset.mouseY - correccion.y);

        // Comprobar los límites de la pantalla de manera independiente para cada eje
        if (newPosX >= 0 && newPosX + $ventana.width <= window.innerWidth) {
            objeto.dataset.transformX = newPosX;
        }

        if (newPosY >= 0 && newPosY + $ventana.height <= window.innerHeight) {
            objeto.dataset.transformY = newPosY;
        }

        objeto.setAttribute(
            "style",
            `transform: translate(${objeto.dataset.transformX}px, ${objeto.dataset.transformY}px);  transition: ease-out .1s`
        );

        breakInterval($ventana);
    }, 17);
}