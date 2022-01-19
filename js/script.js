// get value of selected toppings checked button
$(document).ready(function(){
    $('input[name="topping"').on("click",function(){
        var pizzaToppings = [];
        $.each($('input[name="toppings"]:checked'), function(){
            toppings.push($(this).val());
        });
    });
});

// get value of selected flavor radio button
$('input[name="flavors"]').on("click",function(){
    var pizzaFlavor = $('input[name="flavors"]:checked').val();
});

// get value of selected size radio button
$('input[name="size"]').on("click",function(){
    var pizzaSize = $('input[name="size"]:checked').val();
});

// get value of selected crust radio button
$('input[name="crust"]').on("click",function(){
    var pizzaCrust = $('input[name="crust"]:checked').val();
});


