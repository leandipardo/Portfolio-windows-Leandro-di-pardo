const d = document,
$container = d.querySelector(".mid-menu-container-noticias"),
$template = d.getElementById("template-news").content,
$fragment = d.createDocumentFragment();
let contador = 5,
lastcontador = 0;
export default function newsSection(){
    async function getData(){
        try {
            // let res = await fetch("https://v2.jokeapi.dev/joke/Any?lang=es&blacklistFlags=nsfw,religious,political,racist,sexist,explicit"),
            // json = await res.json();
            // console.log(res,json,json.setup,json.delivery,json.joke);
            let res = await fetch("https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=GELojqgXAOe3FPhqBBwPn9SUxBBOt3Uj"),
            json = await res.json();
            json.results.forEach((e,i)=>{
                if(i >= lastcontador && i < contador && i < 20){
                    $template.querySelector("article").classList.add("new");
                    $template.querySelector("a").setAttribute("href",`${e.url}`);
                    $template.querySelector("a").setAttribute("target","blank_");
                    $template.querySelector("div").classList.add("new-text-container");
                    $template.querySelector("h3").innerText = `${e.title}`;
                    $template.querySelector("p").innerText = `${e.abstract}`;
                    if (e.multimedia && e.multimedia.length > 0)$template.querySelector("img").setAttribute("src",`${e.multimedia[0].url}`);
                    let $clone = d.importNode($template, true);
                    $fragment.appendChild($clone);
                    $container.appendChild($fragment);
                }else{
                    return
                }
            })
            lastcontador+=5;
        } catch (err) {
            console.log(err)
        }
    }
    getData();
    scrolling();
}

function scrolling(){
    $container.addEventListener("scroll",e=>{
        let $elementoFinal = d.querySelector(".mid-menu-container-noticias").lastElementChild;
        let elem =$elementoFinal.getBoundingClientRect().bottom,
        section =d.querySelector(".mid-menu-container-noticias").getBoundingClientRect().bottom;
        if(elem > section){
            return
        }else{
            if(contador < 20){
                contador += 5;
                newsSection();
            }
        }
    })
}
