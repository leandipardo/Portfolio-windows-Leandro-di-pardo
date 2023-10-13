let d = document,
$buttonIco=d.querySelector(".sepiaBtn"),
$btn=d.querySelector(".sepia-button");
//Establece modo sepia.
export default function sepia(btn){
    d.addEventListener("click", (e)=>{
        if(e.target.matches(btn)|| e.target.matches(`${btn} *`)){
            document.body.classList.toggle("sepia-efect");
            $buttonIco.classList.toggle("sepiaAnimation");
            $btn.classList.toggle("background-buttons");
        }
    })
}