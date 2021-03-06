import { renderCategory, renderProduct , search } from "./render_data.js";
 //SI todo esta bien render
export async function getProductAll(url,type){
  await fetch(url)
  .then(res=>res.json())
  .then(data=>{
    if(type==='category')renderCategory(data)
    if(type==='product')renderProduct(data)
  })
  .catch(err=>console.log(err))
}
//para busqueda o categoria se render solo un row
export async function getSearch(url){
  await fetch(url)
  .then(res=>res.json())
  .then(data=>{search(data)})
  .catch(err=>console.log(err))
}
