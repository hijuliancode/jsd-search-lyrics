import * as UI from './interfaz.js'

UI.formularioBuscar.addEventListener('submit', e => {
  e.preventDefault()

  // Obtener valores del formulario
  const artista = document.querySelector('#artista').value,
        cancion = document.querySelector('#cancion').value

  if(artista === '' || cancion === '') { // Formulario con campos vacios
    UI.divMensajes.innerHTML = 'Error => Todos los campos son obligatorios'
    UI.divMensajes.classList.add('error')
    setTimeout(() => {
      UI.divMensajes.innerHTML = ''
    UI.divMensajes.classList.remove('error')
    }, 3000)
  } else { // Formulario completo, realizar consulta a la API

  }
})