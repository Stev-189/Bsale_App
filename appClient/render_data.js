const $spaceRender=document.getElementById('spaceRender'),
      $limpiar=_=>$spaceRender.innerHTML='',
      $doSelect=document.getElementById('catSelect')
let doSelect=true
// a render categorias como contenedores 
export function renderCategory(elRender){
  //agrega las categorias a Selector solo 1 vez al inicio web
  if(doSelect){elRender.forEach(e=>{ 
    $doSelect.insertAdjacentHTML('beforeend',`<option value="${e.id}">${e.name.toUpperCase()}</option>`);
    doSelect=false;
  })
  }
  $limpiar()
  elRender.forEach(e => {
    $spaceRender.insertAdjacentHTML('beforeend',
    `<div id="C${e.id}" class="productContainer">
      <h3>${e.name.toUpperCase()}</h3>
      <div id="DC${e.id}"class="innerDiv">
      </div>
      </div>
    `
    )
  });
}
// se agregan los productos a cada categoria
export function renderProduct(elRender){
  elRender.forEach(e => {
    let des=`Des ${e.discount}%`,
        img=e.url_image
    let $container=document.querySelector(`#DC${e.category}`)
    if(e.discount===0) des=``;
    if(e.url_image===''||e.url_image===null) img='asset/no-disponible.png'
    $container.insertAdjacentHTML('beforeend',
    ` <figure class="card ${e.name}" id="P${e.id}">
          <img src="${img}" alt="${e.name}">
          <figcaption>${e.name} <br>$${e.price} ${des}</figcaption>
        </figure>` 
    )
  });
}
// todas las demas cargas se renderizan a un solo row llamdo resultado
export function search(elRender){
  $limpiar()
  $spaceRender.insertAdjacentHTML('beforeend',
    `<div id="unico" class="productContainer">
      <h3>Resultados</h3>
      <div id="DC"class="innerDiv">
      </div>
      </div>
    `
    )
  elRender.forEach(e=>{
    let des=`Des ${e.discount}%`,
        img=e.url_image
    let $container=document.querySelector(`#DC`)
    if(e.discount===0) des=``;
    if(e.url_image===''||e.url_image===null) img='asset/no-disponible.png'
    $container.insertAdjacentHTML('beforeend',
    ` <figure class="card ${e.name}" id="P${e.id}">
          <img src="${img}" alt="${e.name}">
          <figcaption>${e.name} <br>$${e.price} ${des}</figcaption>
        </figure>` 
    )
  })
}