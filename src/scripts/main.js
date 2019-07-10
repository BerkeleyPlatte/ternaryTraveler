console.log(
  "Your Webpack application is set up and ready to go. Please start writing code."
);

import { openingTheApp, makeAddBtnWrk } from "./domStuff";
import { getPlaces, getInterests } from "./api.js";
import {makeSaveBtnWrk} from "./form.js"

openingTheApp();
getPlaces().then(places => {
  console.log(places);
});

getInterests().then(interests => {
  console.log(interests);
});
makeAddBtnWrk();
// makeSaveBtnWrk()
