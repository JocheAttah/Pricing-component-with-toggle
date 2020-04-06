var cardPrice1 =  document.querySelector('.cards_cardPrice--1');
var cardPrice2 =  document.querySelector('.cards_cardPrice--2');
var cardPrice3 =  document.querySelector('.cards_cardPrice--3');
var toggleInput =document.querySelector('.toggle__input');

toggleInput.addEventListener('click', checkInput);

function checkInput(){
    if (toggleInput.checked ){
        cardPrice1.innerHTML = '<span class="cards__cardPrice--currency" >$</span>199.99';
        cardPrice2.innerHTML = '<span class="cards__cardPrice--currency  cards__cardPrice--currency--two" >$</span>249.99';
        cardPrice3.innerHTML = '<span class="cards__cardPrice--currency" >$</span>399.99';
    }else{
        cardPrice1.innerHTML = '<span class="cards__cardPrice--currency" >$</span>19.99';
        cardPrice2.innerHTML = '<span class="cards__cardPrice--currency  cards__cardPrice--currency--two" >$</span>24.99';
        cardPrice3.innerHTML = '<span class="cards__cardPrice--currency" >$</span>39.99';
    }
}


