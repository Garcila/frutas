const root = document.querySelector( '.root' );

function populatePage () {
  data.forEach( item => {
    const fig = `<figure style='max-width: 60vw'>
      <img src=${item.image}
        alt="${item.name}"
        srcset=""

      />
      <div class='card'>
      <figcaption>español ->  ${item.nombre}</figcaption>
      <figcaption>ingles -> ${item.name} </figcaption>
      <figcaption>cientifico -> ${item.scientific} </figcaption>
      </div>
      
    </figure >`;
    root.innerHTML += fig;
  } );
};

populatePage();
