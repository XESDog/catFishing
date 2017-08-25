let {startPage} = require('./js/startControl');
let {gamingPage} = require('./js/gamingControl');
let {endPage} = require('./js/endControl');



startPage()
    .then(() => gamingPage())
    .then(() => endPage())




