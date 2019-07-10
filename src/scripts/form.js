import { saveInterest } from "./api.js";

let intName = document.querySelector("name");
let intDes = document.querySelector("#description");
let intCost = document.querySelector("#cost");
let intCountry = document.querySelector("#country");
function makeSaveBtnWrk() {
  document.querySelector("#saveBtn").addEventListener("click", () => {
    // console.log(intCost);
    if (
        intName.value === "" &&
        intDes.value === "" &&
        intCost.value === ""
    ) {
        alert("All Fields Required")
    } else {
    let capturedIntData = {
      name: intName.value,
      description: intDes.value,
      cost: intCost.value,
      country: intCountry.value
    };
    saveInterest(capturedIntData);
    intName.value = "";
    intDes.value = "";
    intCost.value = "";
    intCountry.value = "";
    }
  });
}

export { makeSaveBtnWrk };
