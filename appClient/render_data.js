const $spaceRender=document.getElementById('spaceRender'),
      $limpiar=_=>$spaceRender.innerHTML=''

export function renderCategory(elRender){
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

export function renderProduct(elRender){
  elRender.forEach(e => {
    let des=`Des ${e.discount}%`,
        img=e.url_image
    let $container=document.querySelector(`#DC${e.category}`)
    if(e.discount===0) des=``;
    if(e.url_image==='') img='asset/no-disponible.png'
    $container.insertAdjacentHTML('beforeend',
    ` <figure class="card ${e.name}" id="P${e.id}">
          <img src="${img}" alt="${e.name}">
          <figcaption>${e.name} <br>$${e.price} ${des}</figcaption>
        </figure>` 
    )
  });
}

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
    if(e.url_image==='') img='asset/no-disponible.png'
    $container.insertAdjacentHTML('beforeend',
    ` <figure class="card ${e.name}" id="P${e.id}">
          <img src="${img}" alt="${e.name}">
          <figcaption>${e.name} <br>$${e.price} ${des}</figcaption>
        </figure>` 
    )
  })
}