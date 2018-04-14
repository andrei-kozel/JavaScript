// check off specific todos by clicking
$('ul').on('click', 'li',  function(){
    $(this).toggleClass('completed');
});

// click on <span> to delete todo
$('ul').on('click', 'span', function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

// add new todo <li> with input text
$('input[type="text"]').keypress(function(event){
    if(event.which === 13) {
        // grabbing new todo text from <input>
        var newTodoText = $(this).val();
        $(this).val('');
        // create a new <li> and add to <ul>
        $('ul').append("<li><span><i class='fa fa-trash'></i></span> " + newTodoText + "</li>");
    }
});

//
$('.fa-plus').click(function(){
    $('input[type="text"]').fadeToggle();
})