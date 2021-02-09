"use strict";
//import {butt} from './modules/utils'
var butt = document.querySelectorAll('.RoundedButton');
butt.forEach(function (button) {
    button.addEventListener('click', function (evt) {
        evt.preventDefault();
        console.log('I was clicked :)');
    });
});
