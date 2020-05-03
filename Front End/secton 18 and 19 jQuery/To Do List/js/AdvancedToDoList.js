$("ul").on("click", "li", function () {
    $(this).toggleClass("success");
})
//click on x to delete todo
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
})

$("input").keypress(function (event) {
    if (event.which == 13) {
        var inputText = ($(this).val());
        $(this).val(" ");
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + inputText + "</li>");
    }
})

$("#edit").click(function () {
    $("input").fadeToggle();
})