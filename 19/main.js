var data = [
    {
        text: 'some text 1',
        display: true,
        disable: false
    },
    {
        text: 'some text 2',
        display: false,
        disable: false
    },
    {
        text: 'some text 3',
        display: true,
        disable: true
    },
    {
        text: 'some text 4',
        display: true,
        disable: false
    },
];

// write code here uss filter, map and forEach functions of Array

// expected console.log
// 'item 1 some text 1'
// 'item 1 some text 4'


var dataText = data.map(function (item) {

    return item.text;

});


var dataDisplay = data.map(function (item) {

    return item.display;

});


var dataDisable = data.map(function (item) {

    return item.disable;

});


var filterArr = dataText.filter(function (item, index) {


    if (dataDisplay[index] === true && dataDisable[index] === false) {

        return true;

    }


});


var result = filterArr.map(function (item) {

    return 'item 1 ' + item;

});


result.forEach(function (item) {

    console.log(item);

});

