import {getProductAll, getSearch} from "./getProductAll.js";

async function cargaInicial(){
  await getProductAll('http://localhost:3002/category', 'category');
  await setTimeout(() => {
    getProductAll('http://localhost:3002/product','product'); 
  }, 1000);
}
// Get Carga Inicial All
document.addEventListener("DOMContentLoaded", async (e)=>{
 await cargaInicial()
})
//Get Busqueda
document.addEventListener("click",async (e)=>{
let $inputSearch= document.getElementById('search')
if(e.target.matches('#btnSearch')&&($inputSearch.value)) {
  await getSearch(`http://localhost:3002/product/text/${$inputSearch.value}`);
}
if(e.target.matches('#btnSearch')&&!($inputSearch.value)) {
  await cargaInicial()
}
})
//Get Selector Categoria
document.addEventListener('change',async e=>{
  if(e.target.value==='allCategory'){
    await cargaInicial()
  } else{
    await getSearch(`http://localhost:3002/product/category/${e.target.value}`);
  }
})