let screen = document.getElementById('Screen');
buttons = document.querySelectorAll('button');
let screenValue = '';


function calculateFactorial(n){

let i = 1;
let f = 1;    
for(i; i<=n; i++){

f*=i;

}

return f;

}

for(item of buttons){

item.addEventListener('click', (e)=>{

buttonText = e.target.innerText;
if(buttonText == 'X'){

buttonText = '*';
screenValue += buttonText;
screen.value += buttonText;
}
else if(buttonText == 'AC'){

    screenValue = "";
    screen.value = screenValue ;

}
else if(buttonText == '÷'){

    buttonText = '/';
    screenValue += buttonText;
    screen.value += buttonText;

}
else if(buttonText == '='){

if(screenValue[2] == 'P'){

    screenValue = calculateFactorial(screenValue[0])/calculateFactorial(screenValue[0]-screenValue[4]);   
    screen.value = screenValue;

}
else if(screenValue[2] == 'C'){

    screenValue = calculateFactorial(screenValue[0])/
    (calculateFactorial(screenValue[4])*calculateFactorial(screenValue[0]-screenValue[4]));   
    screen.value = screenValue;

}
else{

    screen.value = eval(screen.value);

}

}

else if(buttonText == '!'){

console.log('val ', screenValue);
screenValue = calculateFactorial(screenValue);
screen.value = screenValue;

}
else{
    screenValue += buttonText;
    screen.value = screenValue;
}

});

}


