import { renderCategory, renderProduct } from "./render_data.js";

export async function getProductAll(url,type){
  await fetch(url)
  .then(res=>res.json())
  .then(data=>{
    if(type==='category')renderCategory(data)
    if(type==='product')renderProduct(data)
  })
  .catch(err=>console.log(err))
}
