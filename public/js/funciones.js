/* eslint-disable no-unused-vars */
function passClear(elementoID){
  let password = document.getElementById(elementoID)
  let eye = document.getElementById('eye')
  if(password.getAttribute('type') === 'password'){
    password.setAttribute('type', 'text')
    eye.classList.remove( 'fa-eye-slash')
    eye.classList.add( 'fa-eye')
  } else {
    password.setAttribute('type', 'password')
    eye.classList.remove( 'fa-eye')
    eye.classList.add( 'fa-eye-slash')
  }
}
