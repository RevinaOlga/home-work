(function (){

    var buttonMenu = document.querySelector('.header_button'),
        headerMenu = document.querySelector('.header_menu');
        


        buttonMenu.onclick = function() {


            headerMenu.classList.toggle('header_menu__current');


        }



})();