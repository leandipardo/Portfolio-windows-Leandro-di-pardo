export default function giroscopio(){
    if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', (e) =>{
            console.log(e.matches());
          // Evento de cambio en los datos del giroscopio
          var alpha = e.alpha; // Ángulo alrededor del eje z (brújula)
          var beta = e.beta;   // Ángulo alrededor del eje x (inclinación hacia adelante/atrás)
          var gamma = e.gamma; // Ángulo alrededor del eje y (inclinación izquierda/derecha)
            console.log(gamma,e.beta,e.alpha);
          // Hacer algo con los datos del giroscopio, por ejemplo, actualizar la interfaz gráfica
          // Aquí puedes agregar tu propia lógica para manejar los datos del giroscopio
        });
      } else {
        // El giroscopio no es compatible con este navegador
        console.log("El giroscopio no es compatible con este dispositivo/navegador.");
      }
}