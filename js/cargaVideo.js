const d=document,
w= window;
export default function cargaVideo(id, mq,tipo){
    let breakpoint = w.matchMedia(mq),
    responsive,
    source = d.querySelector(".background-video");
    if(tipo ==="light"){
     responsive = (e) =>{
        if(e.matches){
            source.setAttribute("src","/assets/video/wallpaper light mode.mp4");
        }else{
            source.setAttribute("src","/assets/video/wallpaper light mobile.mp4");
        }
    }
}else if(tipo ==="dark"){
     responsive = (e) =>{
        if(e.matches){
            source.setAttribute("src","/assets/video/wallpaper dark mode.mp4");
        }else{
            source.setAttribute("src","/assets/video/wallpaper dark mobile.mp4");
            source.classList.add("mobile");
        }
    } 

}
    breakpoint.addEventListener("change",responsive);
    responsive(breakpoint);
}
