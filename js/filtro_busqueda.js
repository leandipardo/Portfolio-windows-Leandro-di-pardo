const d = document;
export default function busqueda($input, $elementos){
    d.addEventListener("keyup", (e)=>{
        if(e.target.matches($input)){
            let elList=d.querySelectorAll($elementos);
            elList.forEach(element => {
                (element.textContent.toLowerCase().includes(e.target.value))?element.classList.remove("elements-filter") :element.classList.add("elements-filter");
            });
        }
    })
}