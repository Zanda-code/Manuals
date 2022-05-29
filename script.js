import myJson from "./data.json" assert {type: "json"};
const arr = [myJson].map(e => [
    e.name,
    e.user,
    e.program
])
console.log(arr);
console.log(myJson.pc1616);

const selectProducer = document.querySelector(`#producer`);
const selectModel = document.querySelector(`#model`);
const btn = document.querySelector(`.mainContent__btn`);

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
    }
}


const findGoodManuals = () => {
    console.log(selectModel.value);
}


selectProducer.addEventListener(`change`, testIndexFunction);
btn.addEventListener(`click`, findGoodManuals);

