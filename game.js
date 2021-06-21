const game = document.querySelector( '.game' );
let fruit = '';

function selectFruit () {
  const imageIndex = Math.floor( Math.random() * data.length );

  const selectedFruit = data[imageIndex];
  return selectedFruit;
};

function displayFruit () {
  fruit = selectFruit();
  game.innerHTML = '';

  const fig = `
  <figure style='max-width: 60vw'>
    <img id='img-guess' src=${fruit.image}
      alt="${fruit.name}"
      srcset=""
    />
    <div class='card'>
      🤔  ?
    </div>
  </figure >
  <form> 
    <label>La fruta en al image es</label>
    <input id='guessed' type="text" size="10" placeholder="fruta?">
    <button type="submit">Resultado</button> 
  </form>
  `;

  game.innerHTML += fig;
};

function fillCard ( fruit, option ) {
  const card = document.querySelector( '.card' );
  console.log( option )
  if ( option ) {
    card.textContent = `Correcto la fruta es ${fruit}`;
  } else {
    card.textContent = `🙃 La respuesta correcta es ${fruit}`;
  }
  document.getElementById( 'guessed' ).value = '';
  setTimeout( () => {
    displayFruit();
  }, 3000 );
}


game.addEventListener( 'submit', ( e ) => {
  e.preventDefault();
  const userGuess = document.getElementById( 'guessed' ).value;
  const cleanGuess = userGuess.toLowerCase().trim();
  cleanGuess === fruit.nombre ? fillCard( fruit.nombre, true ) : fillCard( fruit.nombre, false )

} );


displayFruit();
