import {getProductAll} from "./getProductAll.js";

document.addEventListener("DOMContentLoaded", async (e)=>{
  await getProductAll('http://localhost:3002/category', 'category');
  await setTimeout(() => {
    getProductAll('http://localhost:3002/product','product'); 
  }, 1000);
  
})