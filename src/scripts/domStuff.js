import { getInterests } from "./api.js";
import { poiForm, makeInterestsComp } from "./DomComponents.js";
import { makeSaveBtnWrk } from "./form.js";

function renderInterests(arr) {
  // document.querySelector("#container").innerHTML = ""
  arr.forEach(int => {
    document.querySelector("#container").innerHTML += makeInterestsComp(int);
  });
}

function openingTheApp() {
  document.querySelector("#openBtn").addEventListener("click", () => {
    getInterests().then(interests => {
      document.querySelector("#openBtn").classList.add("hidden");
      if (interests.length < 2) {
        document.querySelector("#addBtn").classList.remove("hidden");
      } else {
        renderInterests(interests);
      }
    });
  });
}

function makeAddBtnWrk() {
  document.querySelector("#addBtn").addEventListener("click", () => {
    document.querySelector("#container").innerHTML = "";
    // document.querySelector("#addForm").classList.remove("hidden");
    document.querySelector("#addBtn").classList.add("hidden");
    makeSaveBtnWrk();
  });
}

export { openingTheApp, makeAddBtnWrk };
