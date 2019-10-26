$(function () {
    $(".addburger").on("submit", function (event) {
        //event.preventDefault();
        //alert("clicked");

        var newBurgerObj = {
            burger_name : $("#newburger").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data : newBurgerObj
        }).then(function (){
            alert("new burger added "+ burger_name);
            location.reload();
        })
    })
})