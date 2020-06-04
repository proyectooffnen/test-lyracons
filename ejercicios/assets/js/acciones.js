function deleteItems(){
    element = document.querySelector('.content-boxs');
    element.innerHTML = '<h1 class="msg-remove">Los items fueron removidos con éxito!</h1>';
    return true;
}
function changeColorNav(newColor, oldColor){
    element = document.querySelector('nav.navbar');
    element.classList.remove(oldColor);
    element.classList.add(newColor);
    return true;
}
function msgLogo(e){
    e.preventDefault();
    element = document.querySelector('#header .logo');
    element.innerHTML = '<h3>Hola Mundo!</h3>';
    return true;
}