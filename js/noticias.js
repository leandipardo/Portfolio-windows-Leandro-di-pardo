const d = document,
$fetch = d.getElementById("fetch"),
$fragment = d.createDocumentFragment;
export default function newsSection(){
    async function getData(){
        try {
            let res = await fetch("https://api.mediastack.com/v1/news",{
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                },
                params: {
                  access_key: 'ACCESS_KEY',
                  languages: 'es,-en',
                  countries: 'au',
                  limit: 30,
                  offset: 30,
                }
            });
            json = await res.json;
            console.log(res,json);
        } catch (err) {
            
        }
    }
    getData();
}