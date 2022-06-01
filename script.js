import myJson from "./data.json" assert {type: "json"};
const names = Object.getOwnPropertyNames(myJson);

const selectProducer = document.querySelector(`#producer`);
const selectModel = document.querySelector(`#model`);
const btn = document.querySelector(`.mainContent__btn`);
const newWindow = document.querySelector(`.mainContent__newWindow`);
const newWindowH1 = document.querySelector(`#newWindow__h1`);
const newWindowFirstH2 = document.querySelector(`#newWindow__firstH2`);
const newWindowSecondH2 = document.querySelector(`#newWindow__secondH2`);
const newWindowFirstBtn = document.querySelector(`#newWindow__firstBtn`);
const newWindowSecondBtn = document.querySelector(`#newWindow__secondBtn`);
const closeBtn = document.querySelector(`.mainContent__close`);

console.log(myJson[`DSC`]);

const createProducer = () => {
    names.forEach((e, i) => {
        e = document.createElement(`option`);
        e.innerText = names[i];
        selectProducer.appendChild(e);
    })
}

const availableModel = () => {
    if (selectProducer.value === `Wybierz producenta...`){
        selectModel.setAttribute(`disabled`, `True`);
    }
    else{
        selectModel.removeAttribute(`disabled`);
        const newArray = myJson[`${selectProducer.value}`];
        const newArrayFiltered = newArray.filter(i => i.name === selectModel.value);
        const newOption = document.createElement(`option`);
        selectModel.appendChild(newOption);
        selectModel.innerText = `${newArrayFiltered[0]}`;
    }
}
/*const testIndexFunction = () => {
    const index = selectProducer.selectedIndex;
    if(index === 0){
        selectModel.setAttribute(`disabled`, `true`);
    }
    else if(index === 1){
        selectModel.innerHTML = ``;
        selectModel.removeAttribute(`disabled`);
        myJson.dsc.forEach((e, i) => {
            e = document.createElement(`option`);
            e.innerText = `${myJson.dsc[i].name}`;
            selectModel.appendChild(e);
        });
    }
    else if(index === 2){
        selectModel.innerHTML = ``;
        selectModel.removeAttribute(`disabled`);
        myJson.satel.forEach((e, i) => {
            e = document.createElement(`option`);
            e.innerText = `${myJson.satel[i].name}`;
            selectModel.appendChild(e);
        });
    }
    else if(index === 3){
        selectModel.innerHTML = ``;
        selectModel.removeAttribute(`disabled`);
        myJson.jablotron.forEach((e, i) => {
            e = document.createElement(`option`);
            e.innerText = `${myJson.jablotron[i].name}`;
            selectModel.appendChild(e);
        });
    }
}*/
const findGoodManuals = () => {
    const newArray = myJson[`${selectProducer.value}`];
    const newArrayFiltered = newArray.filter(i => i.name === selectModel.value);
    newWindowH1.innerText = `${selectProducer.value} - ${selectModel.value}`;
    newWindowFirstH2.innerText = `Instrukcja użytkownika`;
    newWindowSecondH2.innerText = `Instrukcja programowania`;
    newWindow.style.display = `flex`;
    const hrefUserManual = newArrayFiltered[0].userManual;
    const hrefProgrammingManual = newArrayFiltered[0].programmingManual;
    newWindowFirstBtn.setAttribute(`href`, hrefUserManual);
    newWindowSecondBtn.setAttribute(`href`, hrefProgrammingManual);
}
const closeWindow = () => {
    newWindow.style.display = `none`;
}

const events = () => {
    selectProducer.addEventListener(`change`, availableModel);
    btn.addEventListener(`click`, findGoodManuals);
    closeBtn.addEventListener(`click`, closeWindow);
}

events();
createProducer();
