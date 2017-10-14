$(document).ready(function () {
    $('.home-slider').slick({
        dots: true,
        customPaging : function(slider, i) {
            // функция цикл, переберает все слайды сколько бы их не было
            // добавляет строку вместо стандартных button
            return '<i></i>'; // все нам этого хватит
        }

    });
});