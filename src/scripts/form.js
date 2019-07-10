import { saveInterest } from "./api.js";
import { bringAllInterests } from "./domStuff.js";

function makeSaveBtnWrk() {
  document.querySelector("#saveBtn").addEventListener("click", () => {
    // console.log(document.querySelector("#name").value);
    if (
      document.querySelector("#description").value === "" ||
      document.querySelector("#name").value === "" ||
      document.querySelector("#cost").value === "" ||
      document.querySelector("#country").value === ""
    ) {
      alert("All Fields Required");
    } else {
      let capturedIntData = {
        name: document.querySelector("#name").value,
        description: document.querySelector("#description").value,
        cost: document.querySelector("#cost").value,
        country: document.querySelector("#country").value
      };
      saveInterest(capturedIntData).then(() => {
        bringAllInterests();
        document.querySelector("#name").value = "";
        document.querySelector("#description").value = "";
        document.querySelector("#cost").value = "";
        document.querySelector("#country").value = "";
      });
    }
  });
}

export { makeSaveBtnWrk };
