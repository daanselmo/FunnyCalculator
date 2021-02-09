//import {butt} from './modules/utils'
const butt = document.querySelectorAll('.RoundedButton')!;

butt.forEach(button => {
    button.addEventListener('click', evt =>
    {
        evt.preventDefault();
        console.log('I was clicked :)');       
    });
});









