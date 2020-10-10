import {getProductAll, getSearch} from "./getProductAll.js";

async function cargaInicial(){
  await getProductAll('http://localhost:3002/category', 'category');
  await setTimeout(() => {
    getProductAll('http://localhost:3002/product','product'); 
  }, 1000);
}

document.addEventListener("DOMContentLoaded", async (e)=>{
 await cargaInicial()
})

document.addEventListener("click",async (e)=>{
let $inputSearch= document.getElementById('search')
if(e.target.matches('#btnSearch')&&($inputSearch.value)) {
  await getSearch(`http://localhost:3002/product/text/${$inputSearch.value}`);
}
if(e.target.matches('#btnSearch')&&!($inputSearch.value)) {
  await cargaInicial()
}
})