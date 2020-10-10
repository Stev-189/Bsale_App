import { renderCategory, renderProduct , search } from "./render_data.js";

export async function getProductAll(url,type){
  await fetch(url)
  .then(res=>res.json())
  .then(data=>{
    if(type==='category')renderCategory(data)
    if(type==='product')renderProduct(data)
  })
  .catch(err=>console.log(err))
}

export async function getSearch(url){
  await fetch(url)
  .then(res=>res.json())
  .then(data=>{search(data)})
  .catch(err=>console.log(err))
}
