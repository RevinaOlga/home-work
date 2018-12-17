(function (){

    var buttonMenu = document.querySelector('.spoiler__label'),
        headerMenu = document.querySelector('.header_link');
        


        buttonMenu.onclick = function() {


            headerMenu.classList.toggle('header_link__current');


        }



})();