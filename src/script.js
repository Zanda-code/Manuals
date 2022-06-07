// AS - Alarm Systems
// SE - Sensors
// MO - Modules

import JsonAS from "./data.json" assert {type: "json"};
const namesAS = Object.getOwnPropertyNames(JsonAS);
import JsonSE from "./dataSE.json" assert {type: "json"};
const namesSE = Object.getOwnPropertyNames(JsonSE);
import JsonMO from "./dataMO.json" assert {type: "json"};
const namesMO = Object.getOwnPropertyNames(JsonMO);

const selectProducerAS = document.querySelector(`#producer`);
const selectModelAS = document.querySelector(`#model`);
const btnAS = document.querySelector(`#btnAS`);
const selectProducerSE = document.querySelector(`#producerSE`);
const selectModelSE = document.querySelector(`#modelSE`);
const btnSE = document.querySelector(`#btnSE`);
const selectProducerMO = document.querySelector(`#producerMO`);
const selectModelMO = document.querySelector(`#modelMO`);
const btnMO = document.querySelector(`#btnMO`);


const newWindow = document.querySelector(`.mainContent__newWindow`);
const newWindowH1 = document.querySelector(`#newWindow__h1`);
const newWindowFirstH2 = document.querySelector(`#newWindow__firstH2`);
const newWindowSecondH2 = document.querySelector(`#newWindow__secondH2`);
const newWindowFirstBtn = document.querySelector(`#newWindow__firstBtn`);
const newWindowSecondBtn = document.querySelector(`#newWindow__secondBtn`);
const closeBtn = document.querySelector(`.mainContent__close`);

const createProducerAS = () => {
    namesAS.forEach((e, i) => {
        e = document.createElement(`option`);
        e.innerText = namesAS[i];
        selectProducerAS.appendChild(e);
    })
}
const createProducerSE = () => {
    namesSE.forEach((e, i) => {
        e = document.createElement(`option`);
        e.innerText = namesSE[i];
        selectProducerSE.appendChild(e);
    })
}
const createProducerMO = () => {
    namesMO.forEach((e, i) => {
        e = document.createElement(`option`);
        e.innerText = namesMO[i];
        selectProducerMO.appendChild(e);
    })
}
const availableModelAS = () => {
    if (selectProducerAS.value === `Wybierz producenta...`){
        selectModelAS.setAttribute(`disabled`, `True`);
    }
    else{
        selectModelAS.removeAttribute(`disabled`);
        selectModelAS.textContent = ``;
        const newArray = JsonAS[`${selectProducerAS.value}`];
        newArray.forEach((el, i) => {
        el = document.createElement(`option`);
        selectModelAS.appendChild(el);
        el.innerText = `${newArray[i].name}`;
    }) 
    }
}
const availableModelSE = () => {
    if (selectProducerSE.value === `Wybierz producenta...`){
        selectModelSE.setAttribute(`disabled`, `True`);
    }
    else{
        selectModelSE.removeAttribute(`disabled`);
        selectModelSE.textContent = ``;
        const newArray = JsonSE[`${selectProducerSE.value}`];
        newArray.forEach((el, i) => {
        el = document.createElement(`option`);
        selectModelSE.appendChild(el);
        el.innerText = `${newArray[i].name}`;
    }) 
    }
}
const availableModelMO = () => {
    if (selectProducerMO.value === `Wybierz producenta...`){
        selectModelMO.setAttribute(`disabled`, `True`);
    }
    else{
        selectModelMO.removeAttribute(`disabled`);
        selectModelMO.textContent = ``;
        const newArray = JsonMO[`${selectProducerMO.value}`];
        newArray.forEach((el, i) => {
        el = document.createElement(`option`);
        selectModelMO.appendChild(el);
        el.innerText = `${newArray[i].name}`;
    }) 
    }
}
const findGoodManualsAS = () => {
    const newArray = JsonAS[`${selectProducerAS.value}`];
    const newArrayFiltered = newArray.filter(i => i.name === selectModelAS.value);
    newWindowH1.innerText = `${selectProducerAS.value} - ${selectModelAS.value}`;
    newWindowFirstH2.innerText = `Instrukcja użytkownika`;
    newWindowSecondH2.innerText = `Instrukcja programowania`;
    newWindow.style.display = `flex`;
    newWindowSecondBtn.style.display = `block`;
    const hrefUserManual = newArrayFiltered[0].userManual;
    const hrefProgrammingManual = newArrayFiltered[0].programmingManual;
    newWindowFirstBtn.setAttribute(`href`, hrefUserManual);
    newWindowSecondBtn.setAttribute(`href`, hrefProgrammingManual);
}

const findGoodManualsSE = () => {
    const newArray = JsonSE[`${selectProducerSE.value}`];
    const newArrayFiltered = newArray.filter(i => i.name === selectModelSE.value);
    newWindowH1.innerText = `${selectProducerSE.value} - ${selectModelSE.value}`;
    newWindowFirstH2.innerText = `Instrukcja`;
    newWindowSecondH2.innerText = ``;
    newWindowSecondBtn.style.display = `none`;
    newWindow.style.display = `flex`;
    const hrefUserManual = newArrayFiltered[0].userManual;
    newWindowFirstBtn.setAttribute(`href`, hrefUserManual);
}
const findGoodManualsMO = () => {
    const newArray = JsonMO[`${selectProducerMO.value}`];
    const newArrayFiltered = newArray.filter(i => i.name === selectModelMO.value);
    newWindowH1.innerText = `${selectProducerMO.value} - ${selectModelMO.value}`;
    newWindowFirstH2.innerText = `Instrukcja`;
    newWindowSecondH2.innerText = ``;
    newWindowSecondBtn.style.display = `none`;
    newWindow.style.display = `flex`;
    const hrefUserManual = newArrayFiltered[0].userManual;
    newWindowFirstBtn.setAttribute(`href`, hrefUserManual);
}
const closeWindow = () => {
    newWindow.style.display = `none`;
}
const events = () => {
    selectProducerAS.addEventListener(`change`, availableModelAS);
    selectProducerSE.addEventListener(`change`, availableModelSE);
    selectProducerMO.addEventListener(`change`, availableModelMO);
    btnAS.addEventListener(`click`, findGoodManualsAS);
    btnSE.addEventListener(`click`, findGoodManualsSE);
    btnMO.addEventListener(`click`, findGoodManualsMO);
    closeBtn.addEventListener(`click`, closeWindow);
}

events();
createProducerAS();
createProducerSE();
createProducerMO();
