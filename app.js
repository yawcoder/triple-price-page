const toggle = document.querySelector('#check');
const yearlyPrice = document.querySelector('.annually');
const monthlyPrice = document.querySelector('.monthly');

//Add event listeners
toggle.addEventListener('click', () => {
    if(yearlyPrice.classList.contains('price-div')){
        yearlyPrice.classList.remove('price-div');
        monthlyPrice.classList.add('price-div');
    }else{
        yearlyPrice.classList.add('price-div');
        monthlyPrice.classList.remove('price-div');
    }
})
