//Listar submenu Ajax
var listItems = (function listarItems(){
    $.ajax({url: "php/get_items.php", method: 'GET', success: function(result){
        var obj = JSON.parse(result);
        $.each(obj, function(i, val){
            let item = '<a href="'+val.url+'">'+val.titulo+'</a>';
            $('.dropdown.productos .dropdown-content').append(item);
        });
    }});

    return true;
}());