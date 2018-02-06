import { DefaultZip } from './common';

let inputTwo = document.getElementById('input-for-two');
let buttonTwo = document.getElementById('button-for-two');
let divTwo = document.getElementById('div-for-two');

inputTwo.addEventListener('input', (e) => {
    DefaultZip.Set(e.target.value);
});

buttonTwo.addEventListener('click', (e) => {
    divTwo.innerHTML = DefaultZip.Get();
});

