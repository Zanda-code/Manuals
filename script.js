import myJson from "./data.json" assert {type: "json"};

const selectProducer = document.querySelector(`#producer`);
const selectModel = document.querySelector(`#model`);
const btn = document.querySelector(`.mainContent__btn`);
const mainContent = document.querySelector(`.mainContent`);
const newWindow = document.querySelector(`.mainContent__newWindow`);
const newWindowH1 = document.querySelector(`#newWindow__h1`);
const newWindowFirstH2 = document.querySelector(`#newWindow__firstH2`);
const newWindowSecondH2 = document.querySelector(`#newWindow__secondH2`);
const newWindowFirstBtn = document.querySelector(`#newWindow__firstBtn`);
const newWindowSecondBtn = document.querySelector(`#newWindow__secondBtn`);
const closeBtn = document.querySelector(`.mainContent__close`);

const testIndexFunction = () => {
    const index = selectProducer.selectedIndex;
    if(index === 0){
        selectModel.setAttribute(`disabled`, `true`);
    }
    else if(index === 1){
        selectModel.innerHTML = ``;
        selectModel.removeAttribute(`disabled`);
        const option1 = document.createElement(`option`);
        const option2 = document.createElement(`option`);
        const option3 = document.createElement(`option`);
        const option4 = document.createElement(`option`);
        option1.innerText = `pc 1616/1832/1864`;
        option1.value = `pc1616`;
        selectModel.appendChild(option1);
        option2.innerText = `HS 2016/2032/2064/2128`;
        option2.value = `HS2016`;
        selectModel.appendChild(option2);
        option3.innerText = `pc 5010`;
        option3.value = `pc5010`;
        selectModel.appendChild(option3);
        option4.innerText = `pc 9155`;
        option4.value = `pc9155`;
        selectModel.appendChild(option4);
    }
    else if(index === 2){
        selectModel.innerHTML = ``;
        selectModel.removeAttribute(`disabled`);
        const option1 = document.createElement(`option`);
        const option2 = document.createElement(`option`);
        const option3 = document.createElement(`option`);
        const option4 = document.createElement(`option`);
        const option5 = document.createElement(`option`);
        const option6 = document.createElement(`option`);
        const option7 = document.createElement(`option`);
        const option8 = document.createElement(`option`);
        option1.innerText = `CA 5`;
        option1.value = `ca5`;
        selectModel.appendChild(option1);
        option2.innerText = `CA 6`;
        option2.value = `ca6`;
        selectModel.appendChild(option2);
        option3.innerText = `CA 10`;
        option3.value = `ca10`;
        selectModel.appendChild(option3);
        option4.innerText = `CA 64`;
        option4.value = `ca64`;
        selectModel.appendChild(option4);
        option5.innerText = `INTEGRA`;
        option5.value = `integra`;
        selectModel.appendChild(option5);
        option6.innerText = `Versa 5/10/15`;
        option6.value = `versa`;
        selectModel.appendChild(option6);
        option7.innerText = `Versa IP`;
        option7.value = `versaip`;
        selectModel.appendChild(option7);
        option8.innerText = `Perfecta`;
        option8.value = `perfecta`;
        selectModel.appendChild(option8);
    }
}
const findGoodManuals = () => {
    const newJson = myJson.filter(i => i.name === selectModel.value);
    newWindowH1.innerText = `${selectProducer.value} - ${selectModel.value}`;
    newWindowFirstH2.innerText = `Instrukcja użytkownika`;
    newWindowSecondH2.innerText = `Instrukcja programowania`;
    newWindow.style.display = `flex`;
    const hrefUserManual = newJson[0].userManual;
    const hrefProgrammingManual = newJson[0].programmingManual;
    newWindowFirstBtn.setAttribute(`href`, hrefUserManual);
    newWindowSecondBtn.setAttribute(`href`, hrefProgrammingManual);
}
const closeWindow = () => {
    newWindow.style.display = `none`;
}

const events = () => {
    selectProducer.addEventListener(`change`, testIndexFunction);
    btn.addEventListener(`click`, findGoodManuals);
    closeBtn.addEventListener(`click`, closeWindow);
}

events();