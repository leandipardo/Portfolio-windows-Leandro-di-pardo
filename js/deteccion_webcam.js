const d = document,
n = navigator;
export default function webCam(){
    const $video = d.getElementById("webcam");
    if(n.mediaDevices.getUserMedia){
        n.mediaDevices.getUserMedia({video:true, audio:false})
        .then((stream)=>{
            $video.srcObject = stream;
            $video.play();
        })
        .catch((err)=>{
          $video.insertAdjacentHTML("beforebegin",`<p style="text-align:center; padding: 1rem; font-size:2rem;">Se ha producido un error:<br> <strong>${err}</strong>.</p>`)  
        })
    }
}