import { DefaultZip } from './common';

let inputOne = document.getElementById('input-for-one');
let buttonOne = document.getElementById('button-for-one');
let divOne = document.getElementById('div-for-one');

inputOne.addEventListener('input', (e) => {
    DefaultZip.Set(e.target.value);
});

buttonOne.addEventListener('click', (e) => {
    divOne.innerHTML = DefaultZip.Get();
});

