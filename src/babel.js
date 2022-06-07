"use strict";

var _data = _interopRequireDefault(require("./data.json"));

var _dataSE = _interopRequireDefault(require("./dataSE.json"));

var _dataMO = _interopRequireDefault(require("./dataMO.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// AS - Alarm Systems
// SE - Sensors
// MO - Modules
var namesAS = Object.getOwnPropertyNames(_data["default"]);
var namesSE = Object.getOwnPropertyNames(_dataSE["default"]);
var namesMO = Object.getOwnPropertyNames(_dataMO["default"]);
var selectProducerAS = document.querySelector("#producer");
var selectModelAS = document.querySelector("#model");
var btnAS = document.querySelector("#btnAS");
var selectProducerSE = document.querySelector("#producerSE");
var selectModelSE = document.querySelector("#modelSE");
var btnSE = document.querySelector("#btnSE");
var selectProducerMO = document.querySelector("#producerMO");
var selectModelMO = document.querySelector("#modelMO");
var btnMO = document.querySelector("#btnMO");
var newWindow = document.querySelector(".mainContent__newWindow");
var newWindowH1 = document.querySelector("#newWindow__h1");
var newWindowFirstH2 = document.querySelector("#newWindow__firstH2");
var newWindowSecondH2 = document.querySelector("#newWindow__secondH2");
var newWindowFirstBtn = document.querySelector("#newWindow__firstBtn");
var newWindowSecondBtn = document.querySelector("#newWindow__secondBtn");
var closeBtn = document.querySelector(".mainContent__close");

var createProducerAS = function createProducerAS() {
  namesAS.forEach(function (e, i) {
    e = document.createElement("option");
    e.innerText = namesAS[i];
    selectProducerAS.appendChild(e);
  });
};

var createProducerSE = function createProducerSE() {
  namesSE.forEach(function (e, i) {
    e = document.createElement("option");
    e.innerText = namesSE[i];
    selectProducerSE.appendChild(e);
  });
};

var createProducerMO = function createProducerMO() {
  namesMO.forEach(function (e, i) {
    e = document.createElement("option");
    e.innerText = namesMO[i];
    selectProducerMO.appendChild(e);
  });
};

var availableModelAS = function availableModelAS() {
  if (selectProducerAS.value === "Wybierz producenta...") {
    selectModelAS.setAttribute("disabled", "True");
  } else {
    selectModelAS.removeAttribute("disabled");
    selectModelAS.textContent = "";

    var newArray = _data["default"]["".concat(selectProducerAS.value)];

    newArray.forEach(function (el, i) {
      el = document.createElement("option");
      selectModelAS.appendChild(el);
      el.innerText = "".concat(newArray[i].name);
    });
  }
};

var availableModelSE = function availableModelSE() {
  if (selectProducerSE.value === "Wybierz producenta...") {
    selectModelSE.setAttribute("disabled", "True");
  } else {
    selectModelSE.removeAttribute("disabled");
    selectModelSE.textContent = "";

    var newArray = _dataSE["default"]["".concat(selectProducerSE.value)];

    newArray.forEach(function (el, i) {
      el = document.createElement("option");
      selectModelSE.appendChild(el);
      el.innerText = "".concat(newArray[i].name);
    });
  }
};

var availableModelMO = function availableModelMO() {
  if (selectProducerMO.value === "Wybierz producenta...") {
    selectModelMO.setAttribute("disabled", "True");
  } else {
    selectModelMO.removeAttribute("disabled");
    selectModelMO.textContent = "";

    var newArray = _dataMO["default"]["".concat(selectProducerMO.value)];

    newArray.forEach(function (el, i) {
      el = document.createElement("option");
      selectModelMO.appendChild(el);
      el.innerText = "".concat(newArray[i].name);
    });
  }
};

var findGoodManualsAS = function findGoodManualsAS() {
  var newArray = _data["default"]["".concat(selectProducerAS.value)];

  var newArrayFiltered = newArray.filter(function (i) {
    return i.name === selectModelAS.value;
  });
  newWindowH1.innerText = "".concat(selectProducerAS.value, " - ").concat(selectModelAS.value);
  newWindowFirstH2.innerText = "Instrukcja u\u017Cytkownika";
  newWindowSecondH2.innerText = "Instrukcja programowania";
  newWindow.style.display = "flex";
  newWindowSecondBtn.style.display = "block";
  var hrefUserManual = newArrayFiltered[0].userManual;
  var hrefProgrammingManual = newArrayFiltered[0].programmingManual;
  newWindowFirstBtn.setAttribute("href", hrefUserManual);
  newWindowSecondBtn.setAttribute("href", hrefProgrammingManual);
};

var findGoodManualsSE = function findGoodManualsSE() {
  var newArray = _dataSE["default"]["".concat(selectProducerSE.value)];

  var newArrayFiltered = newArray.filter(function (i) {
    return i.name === selectModelSE.value;
  });
  newWindowH1.innerText = "".concat(selectProducerSE.value, " - ").concat(selectModelSE.value);
  newWindowFirstH2.innerText = "Instrukcja";
  newWindowSecondH2.innerText = "";
  newWindowSecondBtn.style.display = "none";
  newWindow.style.display = "flex";
  var hrefUserManual = newArrayFiltered[0].userManual;
  newWindowFirstBtn.setAttribute("href", hrefUserManual);
};

var findGoodManualsMO = function findGoodManualsMO() {
  var newArray = _dataMO["default"]["".concat(selectProducerMO.value)];

  var newArrayFiltered = newArray.filter(function (i) {
    return i.name === selectModelMO.value;
  });
  newWindowH1.innerText = "".concat(selectProducerMO.value, " - ").concat(selectModelMO.value);
  newWindowFirstH2.innerText = "Instrukcja";
  newWindowSecondH2.innerText = "";
  newWindowSecondBtn.style.display = "none";
  newWindow.style.display = "flex";
  var hrefUserManual = newArrayFiltered[0].userManual;
  newWindowFirstBtn.setAttribute("href", hrefUserManual);
};

var closeWindow = function closeWindow() {
  newWindow.style.display = "none";
};

var events = function events() {
  selectProducerAS.addEventListener("change", availableModelAS);
  selectProducerSE.addEventListener("change", availableModelSE);
  selectProducerMO.addEventListener("change", availableModelMO);
  btnAS.addEventListener("click", findGoodManualsAS);
  btnSE.addEventListener("click", findGoodManualsSE);
  btnMO.addEventListener("click", findGoodManualsMO);
  closeBtn.addEventListener("click", closeWindow);
};

events();
createProducerAS();
createProducerSE();
createProducerMO();