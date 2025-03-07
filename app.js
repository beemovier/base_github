//interatividade
//Separação de interesses
'use strict'
alert('HELLO WORLD');
alert('QUER CAFÉ?');
alert('TA COM FOME?');
alert('QUEM NÃO TÁ?');

//parte botão
const switcher = document.querySelector('.btn');
switcher.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className == "light-theme"){
        this.textContent = "Dark";
    }
    else {this.textContent = "Light";}
    console.log('current class name: ' + className);
});
//javascript costumamos usar letras concatenadas para nomes de variáveis com mais de uma palavra className
