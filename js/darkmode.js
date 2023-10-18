const d = document;
//Detecta boton, que modo esta y cambia video a respectivo modo.
export default function darkMode(btn){
let $themeBtn = d.querySelector(".darkmode-button"),
$moon = d.querySelector(".moon"),
$sun = d.querySelector(".sun"),
$body = d.querySelector("body"),
darkLight="light";
d.addEventListener("click", (e)=>{
    if(e.target.matches(btn)|| e.target.matches(`${btn} *`)){
        let $video = d.querySelector(".background-video"),
        $videoSource = d.querySelector(".source-video"),
        $videoContainer = d.querySelector(".wallpaper");
        if(darkLight === "light"){
            darkLight ="dark";
            $moon.style.background="var(--dark-mode-hover-plus)";
            $moon.style.transform="translateX(5px)translateY(-3px)"
            $sun.style.border="solid rgba(5, 5, 5, 0.918) 1px;"
            $themeBtn.classList.add("background-buttons");
            $body.classList.toggle("classLight");
            $video.removeChild($videoSource);
            $videoContainer.removeChild($video);
            let createVideo = d.createElement("video"),
            createVideoSource = d.createElement("source");
            createVideo.classList.add("background-video");
            createVideo.setAttribute("type","video/mp4");
            createVideo.setAttribute("muted","true");
            createVideo.setAttribute("autoplay","true");
            createVideo.setAttribute("playsinline","true");
            createVideo.setAttribute("alt","video-wallpaper");
            createVideo.setAttribute("src","/assets/video/wallpaper dark mode.mp4");
            $videoContainer.appendChild(createVideo);
            createVideoSource.classList.add("source-video");
            createVideoSource.setAttribute("type","video/mp4");
            createVideoSource.setAttribute("type","video/mp4");
            createVideoSource.setAttribute("muted","true");
            createVideoSource.setAttribute("autoplay","true");
            createVideoSource.setAttribute("playsinline","true");
            createVideoSource.setAttribute("alt","video-wallpaper");
            createVideoSource.setAttribute("src","/assets/video/wallpaper dark mode.mp4");
            createVideo.appendChild(createVideoSource);
        }else if(darkLight === "dark"){
            darkLight ="light";
            $moon.style.background ="rgba(255, 255, 255, 0.918)";
            $moon.style.transform = "translateX(0px)translateY(0px)";
            $sun.style.border="solid white 1px;"
            $themeBtn.classList.remove("background-buttons");
            $body.classList.toggle("classLight");
            $video.removeChild($videoSource);
            $videoContainer.removeChild($video);
            let createVideoLight = d.createElement("video"),
            createVideoSourceLight = d.createElement("source");
            createVideoLight.classList.add("background-video");
            createVideoLight.setAttribute("type","video/mp4");
            createVideoLight.setAttribute("muted","true");
            createVideoLight.setAttribute("autoplay","true");
            createVideoLight.setAttribute("playsinline","true");
            createVideoLight.setAttribute("alt","video-wallpaper");
            createVideoLight.setAttribute("src","/assets/video/wallpaper light mode.mp4");
            $videoContainer.appendChild(createVideoLight);
            createVideoSourceLight.classList.add("source-video");
            createVideoSourceLight.setAttribute("type","video/mp4");
            createVideoSourceLight.setAttribute("type","video/mp4");
            createVideoSourceLight.setAttribute("muted","true");
            createVideoSourceLight.setAttribute("autoplay","true");
            createVideoSourceLight.setAttribute("playsinline","true");
            createVideoSourceLight.setAttribute("alt","video-wallpaper");
            createVideoSourceLight.setAttribute("src","/assets/video/wallpaper light mode.mp4");
            createVideoLight.appendChild(createVideoSourceLight);
        }
    }
})
}