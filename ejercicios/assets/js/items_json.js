//Listar submenu JSON
var JSON ={
    submenu:[
        {titulo: 'Ropa', url: '/ropa.html'},
        {titulo: 'Electronica', url: '/electronica.html'},
        {titulo: 'Higiene', url: '/higiene.html'},
        {titulo: 'Alimentos', url: '/alimentos.html'},
        {titulo: 'Otros', url: '/otros.html'}
    ]
}

var subMenu = (function loadSubMenu(){
    var items = JSON.submenu;
    element = document.querySelector('.dropdown.productos .dropdown-content');
    items.forEach(function(item){
        a = document.createElement("a");
        text = document.createTextNode(item.titulo);
        a.appendChild(text);
        a.href = item.url;
        element.appendChild(a);
    });

    return true;
}());