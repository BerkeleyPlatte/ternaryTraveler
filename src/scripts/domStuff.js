import { getInterests, deleteInterest } from "./api.js";
import { poiForm, makeInterestsComp } from "./DomComponents.js";
import { makeSaveBtnWrk } from "./form.js";

function renderInterests(arr) {
  // document.querySelector("#container").innerHTML = ""
  arr.forEach(int => {
    document.querySelector("#container").innerHTML += makeInterestsComp(int);
  });
  makeDeleteBtnsWrk();
}

function openingTheApp() {
  document.querySelector("#openBtn").addEventListener("click", () => {
    getInterests().then(interests => {
      document.querySelector("#openBtn").classList.add("hidden");
      document.querySelector("#addBtn").classList.remove("hidden");
      if (interests.length < 2 !== true) {
        renderInterests(interests);
      }
    });
  });
}

function makeAddBtnWrk() {
  document.querySelector("#addBtn").addEventListener("click", () => {
    document.querySelector("#container").innerHTML = "";
    // document.querySelector("#addForm").classList.remove("hidden");
    document.querySelector("#container").innerHTML = poiForm();
    document.querySelector("#addBtn").classList.add("hidden");
    makeSaveBtnWrk();
  });
}

function bringAllInterests() {
  getInterests().then(ints => {
    renderInterests(ints);
  });
}

function makeDeleteBtnsWrk() {
  let deleteIntBtnArr = document.querySelectorAll(".deleteIntBtn");
  console.log(deleteIntBtnArr);
  for (let i = 0; i < deleteIntBtnArr.length; i++) {
    deleteIntBtnArr[i].addEventListener("click", () => {
      console.log("working");
      let btnNum = deleteIntBtnArr[i].id.split("--");
      let intNum = deleteIntBtnArr[i].parentElement.id.split("--");
      if (intNum[1] === btnNum[1]) {
        console.log(intNum[1]);
        deleteInterest(intNum[1]).then(() => {
          document.querySelector("#container").innerHTML = "";
          bringAllInterests();
        });
      }
    });
  }
}

export { openingTheApp, makeAddBtnWrk, makeDeleteBtnsWrk, bringAllInterests };
