const d = document;
//Detecta boton, que modo esta y cambia video a respectivo modo.
export default function darkMode(btn){
let $themeBtn = d.querySelector(".darkmode-button"),
$video = d.querySelector(".background-video"),
$videoSource = d.querySelector(".source-video"),
$videoContainer = d.querySelector(".wallpaper"),
$moon = d.querySelector(".moon"),
$sun = d.querySelector(".sun"),
$source = d.querySelector(".source-video"),
ubiVideo,
$body = d.querySelector("body"),
darkLight="light";
d.addEventListener("click", (e)=>{
    if(e.target.matches(btn)|| e.target.matches(`${btn} *`)){
        if(darkLight === "light"){
            darkLight ="dark";
            $moon.style.background="var(--dark-mode-hover-plus)";
            $moon.style.transform="translateX(5px)translateY(-3px)"
            $sun.style.border="solid rgba(5, 5, 5, 0.918) 1px;"
            $themeBtn.classList.add("background-buttons");
            $body.classList.toggle("classLight");
            $videoContainer.removeChild($video);
            $videoContainer.replaceChild($videoSource);
            let createVideo = d.createElement("video"),
            createVideoSource = d.createElement("source");
            createVideo.classList.add("background-vide");
            createVideo.setAttribute("type","video/mp4");
            createVideo.setAttribute("muted");
            createVideo.setAttribute("autoplay");
            createVideo.setAttribute("playsinline");
            createVideo.setAttribute("alt","video-wallpaper");
            createVideo.setAttribute("src","/assets/video/wallpaper dark mode.mp4");
            $videoContainer.appendChild(createVideo);
            createVideoSource.classList.add("source-video");
            createVideoSource.setAttribute("type","video/mp4");
            createVideoSource.setAttribute("type","video/mp4");
            createVideoSource.setAttribute("muted");
            createVideoSource.setAttribute("autoplay");
            createVideoSource.setAttribute("playsinline");
            createVideoSource.setAttribute("alt","video-wallpaper");
            createVideoSource.setAttribute("src","/assets/video/wallpaper dark mode.mp4");
            createVideoSource.appendChild(createVideoSource);
        }else if(darkLight === "dark"){
            darkLight ="light";
            $moon.style.background ="rgba(255, 255, 255, 0.918)";
            $moon.style.transform = "translateX(0px)translateY(0px)";
            $sun.style.border="solid white 1px;"
            $themeBtn.classList.remove("background-buttons");
            $body.classList.toggle("classLight");
            $videoContainer.removeChild($video);
            $videoContainer.replaceChild($videoSource);
            let createVideoLight = d.createElement("video"),
            createVideoSourceLight = d.createElement("source");
            createVideo.classList.add("background-vide");
            createVideo.setAttribute("type","video/mp4");
            createVideo.setAttribute("muted");
            createVideo.setAttribute("autoplay");
            createVideo.setAttribute("playsinline");
            createVideo.setAttribute("alt","video-wallpaper");
            createVideo.setAttribute("src","/assets/video/wallpaper light mode.mp4");
            $videoContainer.appendChild(createVideoLight);
            createVideoSource.classList.add("source-video");
            createVideoSource.setAttribute("type","video/mp4");
            createVideoSource.setAttribute("type","video/mp4");
            createVideoSource.setAttribute("muted");
            createVideoSource.setAttribute("autoplay");
            createVideoSource.setAttribute("playsinline");
            createVideoSource.setAttribute("alt","video-wallpaper");
            createVideoSource.setAttribute("src","/assets/video/wallpaper light mode.mp4");
            createVideoSource.appendChild(createVideoSourceLight);
        }
    }
})
}