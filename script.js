const selectProducer = document.querySelector(`#producer`);
const selectModel = document.querySelector(`#model`);

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
        option1.innerText = `pc 1616`;
        option1.value = `pc1616`;
        selectModel.appendChild(option1);
        option2.innerText = `pc 1832`;
        option2.value = `pc1832`;
        selectModel.appendChild(option2);
        option3.innerText = `pc 1864`;
        option3.value = `pc1864`;
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

selectProducer.addEventListener(`change`, testIndexFunction);
