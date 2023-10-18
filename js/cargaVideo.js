const d=document,
w= window;
export default function cargaVideo(id, mq){
    let breakpoint = w.matchMedia(mq),
    source = d.querySelector(".background-video");
    const responsive = (e) =>{
        if(e.matches){
            source.setAttribute("src","/assets/video/wallpaper light mode.mp4");
        }else{
            source.setAttribute("src","/assets/video/wallpaper light mobile.mp4");
        }
    } 
    breakpoint.addEventListener("change",responsive);
    responsive(breakpoint);
    bloquearOrientacionRetrato();
}
function bloquearOrientacionRetrato() {
    if (screen.orientation.lock) {
      screen.orientation.lock('portrait');
    } else if (screen.lockOrientation) {
      screen.lockOrientation('portrait');
    }
  }