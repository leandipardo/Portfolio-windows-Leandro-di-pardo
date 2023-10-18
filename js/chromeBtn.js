const d = document;
export default function chrome(btn){
    d.addEventListener("click",e=>{
        if(e.target.matches(btn)|| e.target.matches(`${btn} *`)){
            tester=window.open("https://google.com", "tester", `innerWidth=800,innerHeight=600`);
        }
    })
}