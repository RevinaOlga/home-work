(function () {
    "use strict";



    document.querySelectorAll('.tabs').forEach(function (tabsElement) {


        var selectElement = tabsElement.querySelector('select'),

            tabsContainerElement = tabsElement.querySelector('.tabs-tabsContainer');





        getTabByName(tabsContainerElement, selectElement.value).classList.add('tabs-container-tab_selected');

        selectElement.onchange = function () {


            document.querySelector('.tabs-container-tab_selected').classList.remove('tabs-container-tab_selected');

            getTabByName(tabsContainerElement, selectElement.value).classList.add('tabs-container-tab_selected');

            console.log('new value: ', selectElement.value);

        };


    });
    
    function getTabByName(tabsContainerElement, name) {
        return tabsContainerElement.querySelector('[data-name=' + name + ']');
    }
})();
