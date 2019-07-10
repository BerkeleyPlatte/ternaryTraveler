import { getInterests, deleteInterest } from "./api.js";
import { poiForm, makeInterestsComp } from "./DomComponents.js";
import { makeSaveBtnWrk } from "./form.js";
import { setPlace } from "./main.js";

function renderInterests(arr) {
  // document.querySelector("#container").innerHTML = ""
  for (let i = 1; i < arr.length; i++) {
    document.querySelector("#container").innerHTML += makeInterestsComp(arr[i]);
  }
  makeDeleteBtnsWrk();
}

function openingTheApp() {
  document.querySelector("#openBtn").addEventListener("click", () => {
    setPlace();
    getInterests().then(interests => {
      document.querySelector("#openBtn").classList.add("hidden");
      document.querySelector("#addBtn").classList.remove("hidden");
      document.querySelector("#openingDiv").classList.add("hidden")
      if (interests.length < 2 !== true) {
        renderInterests(interests);
      }
    });
  });
}

function makeAddBtnWrk() {
  document.querySelector("#addBtn").addEventListener("click", () => {
    // document.querySelector("#container").innerHTML = "";
    document.querySelector("#addForm").classList.remove("hidden");
    // document.querySelector("#container").innerHTML = poiForm();
    document.querySelector("#addBtn").classList.add("hidden");
    makeSaveBtnWrk();
  });
}

function bringAllInterests() {
  getInterests().then(ints => {
    document.querySelector("#container").innerHTML = "";
    renderInterests(ints);
  });
}
function makeDeleteBtnsWrk() {
  let deleteIntBtnArr = document.querySelectorAll(".deleteIntBtn");
  console.log(deleteIntBtnArr);
  for (let i = 0; i < deleteIntBtnArr.length; i++) {
    deleteIntBtnArr[i].addEventListener("click", () => {
      prompt("Are you sure? Type 'yes' to delete"); 
      let btnNum = deleteIntBtnArr[i].id.split("--");
      let intNum = deleteIntBtnArr[i].parentElement.id.split("--");
      if (intNum[1] === btnNum[1]) {
        let answer = prompt("Are you sure? Type 'yes' to delete");
        if (answer === "yes") {
          deleteInterest(intNum[1]).then(() => {
            document.querySelector("#container").innerHTML = "";
            bringAllInterests();
          });
        }

        console.log(intNum[1]);
      }
    });
  }
}

export { openingTheApp, makeAddBtnWrk, makeDeleteBtnsWrk, bringAllInterests };
