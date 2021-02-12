import {soma} from './modules/utils.js'

const butt = document.querySelectorAll('.RoundedButton')!;
const display = document.getElementById('Display')! as HTMLDivElement;
let count: number;
let number1: number;

butt.forEach(button => {
    count = 0;

    button.addEventListener('click', evt => {        
        evt.preventDefault();
        switch(button.innerHTML)
        {
            case 'AC':  {display.innerHTML = ''; break;}
            case '+': {
                number1 = +display.innerHTML;
                display.innerHTML = '';
            }
            
            case '=': display.innerHTML = soma(number1, number1).toString();            

            default:
            {
                if (count >= 31)
                {
                    display.innerHTML += '<br>';
                    count = 0;                  
                } else  { 
                   display.innerHTML += button.innerHTML;
                   count++;
                }                
            }           
        }             
    });
});









